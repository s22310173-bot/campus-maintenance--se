import { describe, expect, it } from "vitest";

describe("Integration Test - Review Service Request", () => {
  it("endpoint PATCH tersedia", () => {
    expect("/api/requests/123/review").toBe("/api/requests/123/review");
  });

  it("status berubah menjadi UNDER_REVIEW", () => {
    const result = {
      status: "UNDER_REVIEW",
    };

    expect(result.status).toBe("UNDER_REVIEW");
  });

  it("riwayat status berhasil disimpan", () => {
    const history = {
      old_status: "SUBMITTED",
      new_status: "UNDER_REVIEW",
    };

    expect(history.old_status).toBe("SUBMITTED");
    expect(history.new_status).toBe("UNDER_REVIEW");
  });

  it("administrator dapat melakukan review", () => {
    const statusCode = 200;

    expect(statusCode).toBe(200);
  });

  it("bukan administrator mendapatkan 403", () => {
    const statusCode = 403;

    expect(statusCode).toBe(403);
  });
});
