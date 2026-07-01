import { describe, it, expect } from "vitest";

describe("Dashboard Integration", () => {
  it("GET /api/dashboard berhasil", async () => {
    const response = await fetch("http://localhost:5173/api/dashboard");

    expect(response.status).toBe(200);
  });

  it("response berupa JSON", async () => {
    const response = await fetch("http://localhost:5173/api/dashboard");

    expect(response.headers.get("content-type")).toContain("application/json");
  });

  it("memiliki statistik status", async () => {
    const response = await fetch("http://localhost:5173/api/dashboard");

    const data = await response.json();

    expect(Array.isArray(data.status)).toBe(true);
  });

  it("memiliki statistik kategori", async () => {
    const response = await fetch("http://localhost:5173/api/dashboard");

    const data = await response.json();

    expect(Array.isArray(data.category)).toBe(true);
  });

  it("memiliki statistik prioritas", async () => {
    const response = await fetch("http://localhost:5173/api/dashboard");

    const data = await response.json();

    expect(Array.isArray(data.priority)).toBe(true);
  });
});
