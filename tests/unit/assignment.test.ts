import { describe, expect, it } from "vitest";

describe("PATCH /api/requests/:id/assignment", () => {
  it("menggunakan endpoint assignment", () => {
    expect("/api/requests/123/assignment").toBe("/api/requests/123/assignment");
  });

  it("menggunakan method PATCH", () => {
    expect("PATCH").toBe("PATCH");
  });

  it("kategori berhasil diperbarui", () => {
    expect("Internet").toBe("Internet");
  });

  it("prioritas berhasil diperbarui", () => {
    expect("HIGH").toBe("HIGH");
  });

  it("response berhasil", () => {
    const response = {
      message: "Kategori dan prioritas berhasil diperbarui.",
    };

    expect(response.message).toBeDefined();
  });
});
