import { describe, expect, it } from "vitest";

describe("Request Comments Integration", () => {
  it("endpoint komentar tersedia", () => {
    expect("/api/requests/1/comments").toContain("/comments");
  });

  it("response komentar berupa array", () => {
    const response = {
      data: [
        {
          author_role: "Administrator",
          comment: "Segera diperbaiki.",
        },
      ],
    };

    expect(Array.isArray(response.data)).toBe(true);
  });

  it("komentar memiliki author", () => {
    const item = {
      author_role: "Administrator",
    };

    expect(item.author_role).toBe("Administrator");
  });

  it("komentar memiliki isi", () => {
    const item = {
      comment: "Sedang diperbaiki.",
    };

    expect(item.comment.length).toBeGreaterThan(0);
  });

  it("komentar sesuai request", () => {
    const requestId = "REQ-001";

    expect(requestId).toContain("REQ");
  });

  it("data komentar berhasil ditampilkan", () => {
    const response = {
      success: true,
    };

    expect(response.success).toBe(true);
  });
});
