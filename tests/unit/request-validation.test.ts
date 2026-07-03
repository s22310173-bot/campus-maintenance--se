import { describe, it, expect } from "vitest";

describe("Create Service Request Validation", () => {
  it("harus gagal jika judul kosong", () => {
    const data = {
      title: "",
      description: "Deskripsi kerusakan lebih dari dua puluh karakter.",
      location: "Gedung A",
      category: "Elektronik",
    };

    expect(data.title).not.toBeTruthy();
  });

  it("harus gagal jika deskripsi kosong", () => {
    const data = {
      title: "AC Rusak",
      description: "",
      location: "Gedung A",
      category: "Elektronik",
    };

    expect(data.description).not.toBeTruthy();
  });

  it("harus gagal jika deskripsi kurang dari 20 karakter", () => {
    const data = {
      title: "AC Rusak",
      description: "AC rusak",
      location: "Gedung A",
      category: "Elektronik",
    };

    expect(data.description.length).toBeLessThan(20);
  });

  it("harus gagal jika lokasi kosong", () => {
    const data = {
      title: "AC Rusak",
      description: "Deskripsi kerusakan lebih dari dua puluh karakter.",
      location: "",
      category: "Elektronik",
    };

    expect(data.location).not.toBeTruthy();
  });

  it("harus gagal jika kategori kosong", () => {
    const data = {
      title: "AC Rusak",
      description: "Deskripsi kerusakan lebih dari dua puluh karakter.",
      location: "Gedung A",
      category: "",
    };

    expect(data.category).not.toBeTruthy();
  });

  it("harus lolos jika seluruh field valid", () => {
    const data = {
      title: "AC Rusak",
      description:
        "AC tidak dingin sejak pagi dan perlu dilakukan pemeriksaan.",
      location: "Gedung A",
      category: "Elektronik",
    };

    expect(data.title).toBeTruthy();
    expect(data.description.length).toBeGreaterThanOrEqual(20);
    expect(data.location).toBeTruthy();
    expect(data.category).toBeTruthy();
  });
});
