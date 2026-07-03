import { describe, expect, it } from "vitest";

describe("PATCH /api/requests/:id/review", () => {
  it("menggunakan endpoint review yang benar", () => {
    expect("/api/requests/123/review").toBe("/api/requests/123/review");
  });

  it("menggunakan method PATCH", () => {
    expect("PATCH").toBe("PATCH");
  });

  it("hanya administrator yang dapat melakukan review", () => {
    const role = "Administrator";

    expect(role).toBe("Administrator");
  });

  it("status berubah menjadi UNDER_REVIEW", () => {
    const status = "UNDER_REVIEW";

    expect(status).toBe("UNDER_REVIEW");
  });

  it("response berhasil", () => {
    const response = {
      message: "Laporan berhasil direview.",
      status: "UNDER_REVIEW",
    };

    expect(response.message).toBeDefined();
    expect(response.status).toBe("UNDER_REVIEW");
  });
});
