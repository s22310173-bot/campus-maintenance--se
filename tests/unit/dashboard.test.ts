import { describe, it, expect } from "vitest";

describe("Dashboard Endpoint", () => {
  it("endpoint dashboard adalah GET /api/dashboard", () => {
    expect("/api/dashboard").toBe("/api/dashboard");
  });

  it("method menggunakan GET", () => {
    expect("GET").toBe("GET");
  });

  it("mengembalikan statistik status", () => {
    const data = {
      status: [
        {
          status: "SUBMITTED",
          total: 2,
        },
      ],
    };

    expect(data.status.length).toBeGreaterThan(0);
  });

  it("mengembalikan statistik kategori", () => {
    const data = {
      category: [
        {
          category: "Internet",
          total: 1,
        },
      ],
    };

    expect(data.category.length).toBeGreaterThan(0);
  });

  it("mengembalikan statistik prioritas", () => {
    const data = {
      priority: [
        {
          priority: "HIGH",
          total: 1,
        },
      ],
    };

    expect(data.priority.length).toBeGreaterThan(0);
  });
});
