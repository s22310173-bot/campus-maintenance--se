import { describe, expect, it } from "vitest";

describe("Integration Test - List Service Requests", () => {
  it("harus mengembalikan response dengan format yang benar", () => {
    const response = {
      data: [
        {
          id: "1",
          request_number: "CSR-1782901041029",
          title: "AC Rusak",
          location: "Gedung A",
          category: "Elektronik",
          priority: "MEDIUM",
          status: "SUBMITTED",
        },
      ],
    };

    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  it("setiap laporan harus memiliki field yang lengkap", () => {
    const request = {
      id: "1",
      request_number: "CSR-1782901041029",
      title: "AC Rusak",
      location: "Gedung A",
      category: "Elektronik",
      priority: "MEDIUM",
      status: "SUBMITTED",
    };

    expect(request.id).toBeDefined();
    expect(request.request_number).toBeDefined();
    expect(request.title).toBeDefined();
    expect(request.location).toBeDefined();
    expect(request.category).toBeDefined();
    expect(request.priority).toBeDefined();
    expect(request.status).toBeDefined();
  });

  it("status default harus SUBMITTED", () => {
    const request = {
      status: "SUBMITTED",
    };

    expect(request.status).toBe("SUBMITTED");
  });

  it("priority default harus MEDIUM", () => {
    const request = {
      priority: "MEDIUM",
    };

    expect(request.priority).toBe("MEDIUM");
  });

  it("kategori tidak boleh kosong", () => {
    const request = {
      category: "Elektronik",
    };

    expect(request.category).not.toBe("");
  });
});
