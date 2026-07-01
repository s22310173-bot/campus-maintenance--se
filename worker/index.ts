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
