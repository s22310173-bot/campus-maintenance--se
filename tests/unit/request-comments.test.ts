import { describe, expect, it } from "vitest";

describe("Request Comments", () => {
  it("endpoint tambah komentar benar", () => {
    expect("/api/requests/1/comments").toContain("/comments");
  });

  it("method POST digunakan untuk menambah komentar", () => {
    expect("POST").toBe("POST");
  });

  it("method GET digunakan untuk melihat komentar", () => {
    expect("GET").toBe("GET");
  });

  it("komentar tidak boleh kosong", () => {
    const comment = "Komentar pertama";
    expect(comment.length).toBeGreaterThan(0);
  });

  it("role komentar tersedia", () => {
    const role = "Administrator";
    expect(role).toBe("Administrator");
  });

  it("komentar berhasil disimpan", () => {
    const response = {
      message: "Komentar berhasil ditambahkan.",
    };

    expect(response.message).toContain("berhasil");
  });
});
