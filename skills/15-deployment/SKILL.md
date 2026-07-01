# Skill 15 - Deployment

## Tujuan

Mempublikasikan aplikasi ke Cloudflare Workers dan memastikan aplikasi dapat diakses melalui internet.

---

## Kapan Digunakan

Dilakukan setelah implementasi, code review, dan seluruh pengujian selesai.

---

## Input

- Source Code
- Wrangler Configuration
- Database D1
- Testing Report

---

## Langkah Kerja

1. Pastikan seluruh test berhasil.
2. Build aplikasi frontend.
3. Deploy backend ke Cloudflare Workers.
4. Hubungkan database Cloudflare D1.
5. Verifikasi aplikasi dapat diakses.
6. Dokumentasikan URL deployment.
7. Buat Release Note.

---

## Output

- URL aplikasi
- Release Note
- Deployment Report

---

## Aturan

- Deploy menggunakan Cloudflare Workers.
- Gunakan Cloudflare D1 sebagai database.
- Pastikan aplikasi dapat diakses publik.

---

## Quality Check

- Deployment berhasil.
- URL dapat diakses.
- Database berfungsi.
- Tidak ada error kritis.

---

## Kondisi Gagal

- Build gagal.
- Deployment gagal.
- Database tidak dapat diakses.

---

## Human Review

Periksa aplikasi secara langsung melalui URL publik.
