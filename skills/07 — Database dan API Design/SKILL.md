# Skill 07 - Database dan API Design

## Tujuan

Mendesain struktur database dan REST API berdasarkan requirement sehingga dapat digunakan sebagai dasar implementasi backend.

---

## Kapan Digunakan

Digunakan setelah Architecture Design selesai.

---

## Input

- docs/requirements/
- docs/design/01-architecture.md

---

## Langkah Kerja

1. Identifikasi data yang dibutuhkan.
2. Tentukan tabel database.
3. Tentukan relasi antar tabel.
4. Buat desain endpoint REST API.
5. Dokumentasikan hasil.

---

## Output

- docs/design/02-database-api-design.md
- database/schema.sql
- database/seed.sql

---

## Aturan

- Setiap tabel memiliki Primary Key.
- Gunakan Foreign Key jika diperlukan.
- API mengikuti prinsip REST.

---

## Quality Check

- Semua data memiliki tempat penyimpanan.
- Relasi tabel benar.
- Endpoint sesuai requirement.

---

## Kondisi Gagal

- Requirement belum lengkap.
- Architecture belum selesai.

---

## Human Review

Periksa apakah database dan API sudah mendukung seluruh fitur.
