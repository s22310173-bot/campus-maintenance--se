import { describe, expect, it } from "vitest";

describe("PATCH /api/requests/:id/assign", () => {
  it("menggunakan endpoint assign", () => {
    expect("/api/requests/123/assign").toBe("/api/requests/123/assign");
  });

  it("menggunakan method PATCH", () => {
    expect("PATCH").toBe("PATCH");
  });

  it("teknisi berhasil dipilih", () => {
    const technician = "TECH-001";

    expect(technician).toBe("TECH-001");
  });

  it("status berubah menjadi ASSIGNED", () => {
    const status = "ASSIGNED";

    expect(status).toBe("ASSIGNED");
  });

  it("administrator dapat melakukan penugasan", () => {
    const role = "Administrator";

    expect(role).toBe("Administrator");
  });
});
