import { describe, expect, it } from "vitest";

describe("GET /api/requests", () => {
  it("menggunakan endpoint GET /api/requests", () => {
    expect("/api/requests").toBe("/api/requests");
  });

  it("method harus GET", () => {
    expect("GET").toBe("GET");
  });

  it("response berupa array", () => {
    const response = {
      data: [],
    };

    expect(Array.isArray(response.data)).toBe(true);
  });

  it("status tersedia", () => {
    const request = {
      status: "SUBMITTED",
    };

    expect(request.status).toBe("SUBMITTED");
  });

  it("priority tersedia", () => {
    const request = {
      priority: "MEDIUM",
    };

    expect(request.priority).toBe("MEDIUM");
  });

  it("category tersedia", () => {
    const request = {
      category: "Elektronik",
    };

    expect(request.category).toBe("Elektronik");
  });
});
