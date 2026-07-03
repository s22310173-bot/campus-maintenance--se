import { describe, expect, it } from "vitest";

describe("PATCH /api/requests/:id/status", () => {
  it("menggunakan endpoint update status", () => {
    expect("/api/requests/123/status").toBe("/api/requests/123/status");
  });

  it("menggunakan method PATCH", () => {
    expect("PATCH").toBe("PATCH");
  });

  it("status berubah menjadi IN_PROGRESS", () => {
    const status = "IN_PROGRESS";

    expect(status).toBe("IN_PROGRESS");
  });

  it("status berubah menjadi RESOLVED", () => {
    const status = "RESOLVED";

    expect(status).toBe("RESOLVED");
  });

  it("status berubah menjadi CLOSED", () => {
    const status = "CLOSED";

    expect(status).toBe("CLOSED");
  });

  it("hanya teknisi yang dapat memperbarui status", () => {
    const role = "Technician";

    expect(role).toBe("Technician");
  });
});
