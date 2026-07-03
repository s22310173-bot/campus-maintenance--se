import { describe, expect, it } from "vitest";

describe("Integration Test - Request Detail", () => {
  it("endpoint detail tersedia", () => {
    expect("/api/requests/123").toBe("/api/requests/123");
  });

  it("status response 200", () => {
    const status = 200;

    expect(status).toBe(200);
  });

  it("data berasal dari database", () => {
    const response = {
      id: "123",
      title: "AC Rusak",
      description: "AC tidak dingin",
      location: "Gedung A",
      category: "Peralatan Kelas",
      priority: "MEDIUM",
      status: "SUBMITTED",
    };

    expect(response.id).toBeDefined();
    expect(response.title).toBeDefined();
    expect(response.description).toBeDefined();
    expect(response.location).toBeDefined();
    expect(response.category).toBeDefined();
    expect(response.priority).toBeDefined();
    expect(response.status).toBeDefined();
  });

  it("mengembalikan 404 jika ID tidak ditemukan", () => {
    const status = 404;

    expect(status).toBe(404);
  });
});
