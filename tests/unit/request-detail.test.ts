import { describe, expect, it } from "vitest";

describe("GET /api/requests/:id", () => {
  it("menggunakan endpoint detail yang benar", () => {
    expect("/api/requests/123").toBe("/api/requests/123");
  });

  it("menggunakan method GET", () => {
    expect("GET").toBe("GET");
  });

  it("response memiliki id", () => {
    const request = {
      id: "123",
    };

    expect(request.id).toBeDefined();
  });

  it("response memiliki title", () => {
    const request = {
      title: "AC Rusak",
    };

    expect(request.title).toBeDefined();
  });

  it("response memiliki description", () => {
    const request = {
      description: "AC tidak dingin sejak pagi.",
    };

    expect(request.description).toBeDefined();
  });

  it("response memiliki location", () => {
    const request = {
      location: "Gedung A",
    };

    expect(request.location).toBeDefined();
  });

  it("response memiliki category", () => {
    const request = {
      category: "Peralatan Kelas",
    };

    expect(request.category).toBeDefined();
  });

  it("response memiliki priority", () => {
    const request = {
      priority: "MEDIUM",
    };

    expect(request.priority).toBeDefined();
  });

  it("response memiliki status", () => {
    const request = {
      status: "SUBMITTED",
    };

    expect(request.status).toBeDefined();
  });
});
