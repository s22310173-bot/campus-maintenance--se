interface Env {
  DB: D1Database;
}

function json(data: unknown, status = 200) {
  return Response.json(data, { status });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // ===========================
    // Health Check
    // ===========================
    if (url.pathname === "/api/health" && request.method === "GET") {
      return json({ status: "ok" });
    }

    // ===========================
    // GET /api/requests
    // List Service Requests
    // ===========================
    if (url.pathname === "/api/requests" && request.method === "GET") {
      const result = await env.DB.prepare(
        `
        SELECT
          id,
          request_number,
          title,
          location,
          category,
          priority,
          status
        FROM service_requests
        ORDER BY created_at DESC
        `,
      ).all();

      return json({
        data: result.results,
      });
    }

    // ===========================
    // GET /api/requests/:id
    // Detail Service Request
    // ===========================
    const detailMatch = url.pathname.match(/^\/api\/requests\/([^/]+)$/);

    if (detailMatch && request.method === "GET") {
      const id = detailMatch[1];

      const result = await env.DB.prepare(
        `
        SELECT
          id,
          request_number,
          title,
          description,
          location,
          category,
          priority,
          status,
          created_at
        FROM service_requests
        WHERE id = ?
        `,
      )
        .bind(id)
        .first();

      if (!result) {
        return json(
          {
            error: "Laporan tidak ditemukan.",
          },
          404,
        );
      }

      return json(result);
    }

    // ===========================
    // POST /api/requests
    // Create Service Request
    // ===========================
    if (url.pathname === "/api/requests" && request.method === "POST") {
      const input = (await request.json()) as {
        title?: string;
        description?: string;
        location?: string;
        category?: string;
      };

      if (
        !input.title ||
        !input.description ||
        !input.location ||
        !input.category
      ) {
        return json(
          {
            error: "Semua field wajib diisi.",
          },
          422,
        );
      }

      if (input.description.trim().length < 20) {
        return json(
          {
            error: "Deskripsi minimal 20 karakter.",
          },
          422,
        );
      }

      const id = crypto.randomUUID();
      const requestNumber = `CSR-${Date.now()}`;

      await env.DB.prepare(
        `
        INSERT INTO service_requests
        (
          id,
          request_number,
          title,
          description,
          location,
          category,
          priority,
          status
        )
        VALUES
        (
          ?, ?, ?, ?, ?, ?, 'MEDIUM', 'SUBMITTED'
        )
        `,
      )
        .bind(
          id,
          requestNumber,
          input.title.trim(),
          input.description.trim(),
          input.location.trim(),
          input.category.trim(),
        )
        .run();

      return json(
        {
          id,
          requestNumber,
          status: "SUBMITTED",
        },
        201,
      );
    }

    // ===========================
    // PATCH /api/requests/:id/review
    // Review Service Request (Administrator Only)
    // ===========================
    const reviewMatch = url.pathname.match(
      /^\/api\/requests\/([^/]+)\/review$/,
    );

    if (reviewMatch && request.method === "PATCH") {
      const id = reviewMatch[1];
      const role = request.headers.get("x-role");

      if (role !== "Administrator") {
        return json(
          {
            error: "Hanya administrator yang dapat melakukan review.",
          },
          403,
        );
      }

      try {
        // Ambil status lama
        const current = await env.DB.prepare(
          `
          SELECT status
          FROM service_requests
          WHERE id = ?
          `,
        )
          .bind(id)
          .first<{ status: string }>();

        if (!current) {
          return json(
            {
              error: "Laporan tidak ditemukan.",
            },
            404,
          );
        }

        // Siapkan query Update status
        const updateStmt = env.DB.prepare(
          `
          UPDATE service_requests
          SET status = 'UNDER_REVIEW'
          WHERE id = ?
          `,
        ).bind(id);

        // Siapkan query Simpan riwayat status
        const historyStmt = env.DB.prepare(
          `
          INSERT INTO request_status_history
          (
            id,
            request_id,
            old_status,
            new_status,
            changed_by
          )
          VALUES
          (
            ?, ?, ?, ?, ?
          )
          `,
        ).bind(
          crypto.randomUUID(),
          id,
          current.status,
          "UNDER_REVIEW",
          "Administrator",
        );

        // Eksekusi kedua query secara bersamaan (Database Transaction)
        await env.DB.batch([updateStmt, historyStmt]);

        return json({
          message: "Laporan berhasil direview.",
          status: "UNDER_REVIEW",
        });
      } catch (error) {
        console.error("Review Error:", error);
        return json(
          {
            error: "Terjadi kesalahan server saat memperbarui status.",
          },
          500,
        );
      }
    }

    // ===========================
    // PATCH /api/requests/:id/assignment
    // Update Category & Priority
    // ===========================
    const assignmentMatch = url.pathname.match(
      /^\/api\/requests\/([^/]+)\/assignment$/,
    );

    if (assignmentMatch && request.method === "PATCH") {
      const id = assignmentMatch[1];
      const role = request.headers.get("x-role");

      if (role !== "Administrator") {
        return json(
          {
            error:
              "Hanya administrator yang dapat mengubah kategori dan prioritas.",
          },
          403,
        );
      }

      const input = (await request.json()) as {
        category?: string;
        priority?: string;
      };

      if (!input.category || !input.priority) {
        return json(
          {
            error: "Kategori dan prioritas wajib diisi.",
          },
          422,
        );
      }

      const current = await env.DB.prepare(
        `
        SELECT id
        FROM service_requests
        WHERE id = ?
        `,
      )
        .bind(id)
        .first();

      if (!current) {
        return json(
          {
            error: "Laporan tidak ditemukan.",
          },
          404,
        );
      }

      await env.DB.prepare(
        `
        UPDATE service_requests
        SET
          category = ?,
          priority = ?
        WHERE id = ?
        `,
      )
        .bind(input.category.trim(), input.priority.trim(), id)
        .run();

      return json({
        message: "Kategori dan prioritas berhasil diperbarui.",
        category: input.category,
        priority: input.priority,
      });
    }

    // ===========================
    // PATCH /api/requests/:id/assign
    // Assign Technician
    // ===========================
    const assignMatch = url.pathname.match(
      /^\/api\/requests\/([^/]+)\/assign$/,
    );

    if (assignMatch && request.method === "PATCH") {
      const id = assignMatch[1];
      const role = request.headers.get("x-role");

      if (role !== "Administrator") {
        return json(
          {
            error: "Hanya administrator yang dapat menugaskan teknisi.",
          },
          403,
        );
      }

      const input = (await request.json()) as {
        technician_id?: string;
      };

      if (!input.technician_id) {
        return json(
          {
            error: "Teknisi wajib dipilih.",
          },
          422,
        );
      }

      const current = await env.DB.prepare(
        `
        SELECT status
        FROM service_requests
        WHERE id = ?
        `,
      )
        .bind(id)
        .first<{ status: string }>();

      if (!current) {
        return json(
          {
            error: "Laporan tidak ditemukan.",
          },
          404,
        );
      }

      if (current.status !== "UNDER_REVIEW") {
        return json(
          {
            error:
              "Laporan hanya dapat ditugaskan jika berstatus UNDER_REVIEW.",
          },
          409,
        );
      }

      const updateStmt = env.DB.prepare(
        `
        UPDATE service_requests
        SET
          technician_id = ?,
          status = 'ASSIGNED'
        WHERE id = ?
        `,
      ).bind(input.technician_id, id);

      const historyStmt = env.DB.prepare(
        `
        INSERT INTO request_status_history
        (
          id,
          request_id,
          old_status,
          new_status,
          changed_by
        )
        VALUES
        (
          ?, ?, ?, ?, ?
        )
        `,
      ).bind(
        crypto.randomUUID(),
        id,
        current.status,
        "ASSIGNED",
        "Administrator",
      );

      await env.DB.batch([updateStmt, historyStmt]);

      return json({
        message: "Teknisi berhasil ditugaskan.",
        technician_id: input.technician_id,
        status: "ASSIGNED",
      });
    }

    // ===========================
    // PATCH /api/requests/:id/status
    // Update Service Request Status
    // ===========================
    const statusMatch = url.pathname.match(
      /^\/api\/requests\/([^/]+)\/status$/,
    );

    if (statusMatch && request.method === "PATCH") {
      const id = statusMatch[1];
      const role = request.headers.get("x-role");

      if (role !== "Technician") {
        return json(
          {
            error: "Hanya teknisi yang dapat memperbarui status.",
          },
          403,
        );
      }

      const input = (await request.json()) as {
        status?: string;
      };

      if (!input.status) {
        return json(
          {
            error: "Status wajib dipilih.",
          },
          422,
        );
      }

      const current = await env.DB.prepare(
        `
        SELECT status
        FROM service_requests
        WHERE id = ?
        `,
      )
        .bind(id)
        .first<{ status: string }>();

      if (!current) {
        return json(
          {
            error: "Laporan tidak ditemukan.",
          },
          404,
        );
      }

      const allowedTransitions: Record<string, string> = {
        ASSIGNED: "IN_PROGRESS",
        IN_PROGRESS: "RESOLVED",
        RESOLVED: "CLOSED",
      };

      if (allowedTransitions[current.status] !== input.status) {
        return json(
          {
            error: "Perubahan status tidak sesuai workflow.",
          },
          409,
        );
      }

      const updateStmt = env.DB.prepare(
        `
        UPDATE service_requests
        SET
          status = ?
        WHERE id = ?
        `,
      ).bind(input.status, id);

      const historyStmt = env.DB.prepare(
        `
        INSERT INTO request_status_history
        (
          id,
          request_id,
          old_status,
          new_status,
          changed_by
        )
        VALUES
        (
          ?, ?, ?, ?, ?
        )
        `,
      ).bind(
        crypto.randomUUID(),
        id,
        current.status,
        input.status,
        "Technician",
      );

      await env.DB.batch([updateStmt, historyStmt]);

      return json({
        message: "Status berhasil diperbarui.",
        status: input.status,
      });
    }

    // ===========================
    // Route Not Found
    // ===========================
    return json(
      {
        error: "Alamat API tidak ditemukan.",
      },
      404,
    );
  },
} satisfies ExportedHandler<Env>;
