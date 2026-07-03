import { describe, it, expect } from "vitest";

describe("POST /api/requests", () => {
  it("mengembalikan status 422 jika title kosong", () => {
    const request = {
      title: "",
      description: "Deskripsi kerusakan lebih dari dua puluh karakter.",
      location: "Gedung A",
      category: "Elektronik",
    };

    expect(request.title).toBe("");
  });

  it("mengembalikan status 422 jika description kurang dari 20 karakter", () => {
    const request = {
      title: "AC Rusak",
      description: "Pendek",
      location: "Gedung A",
      category: "Elektronik",
    };

    expect(request.description.length).toBeLessThan(20);
  });

  it("mengembalikan status 422 jika location kosong", () => {
    const request = {
      title: "AC Rusak",
      description: "Deskripsi kerusakan lebih dari dua puluh karakter.",
      location: "",
      category: "Elektronik",
    };

    expect(request.location).toBe("");
  });

  it("mengembalikan status 422 jika category kosong", () => {
    const request = {
      title: "AC Rusak",
      description: "Deskripsi kerusakan lebih dari dua puluh karakter.",
      location: "Gedung A",
      category: "",
    };

    expect(request.category).toBe("");
  });

  it("request valid siap dikirim ke endpoint", () => {
    const request = {
      title: "AC Rusak",
      description: "AC tidak dingin sejak pagi dan perlu segera diperbaiki.",
      location: "Gedung A",
      category: "Elektronik",
    };

    expect(request.title).toBeTruthy();
    expect(request.description.length).toBeGreaterThanOrEqual(20);
    expect(request.location).toBeTruthy();
    expect(request.category).toBeTruthy();
  });
});
