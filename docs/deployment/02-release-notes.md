# Release Notes

## Project

Campus Service Request and Maintenance System

---

# Release Information

| Item         | Value                |
| ------------ | -------------------- |
| Version      | v1.0.0               |
| Release Date | ********\_\_******** |
| Release Type | Initial Release      |
| Environment  | Production           |
| Platform     | Cloudflare Workers   |
| Database     | Cloudflare D1        |

---

# Overview

Versi **v1.0.0** merupakan rilis pertama dari **Campus Service Request and Maintenance System**. Sistem ini dikembangkan untuk memudahkan civitas kampus dalam melaporkan kerusakan fasilitas serta membantu administrator mengelola proses penanganan laporan secara lebih efisien.

---

# New Features

## Authentication

- User Login
- Session Management

---

## Service Request

- Membuat laporan kerusakan
- Melihat daftar laporan
- Melihat detail laporan
- Upload foto kerusakan

---

## Ticket Workflow

- Status Pending
- Status Reviewed
- Status In Progress
- Status Completed

---

## Comment System

- Menambahkan komentar pada laporan
- Menampilkan riwayat komentar

---

## Dashboard

- Menampilkan jumlah laporan
- Menampilkan status laporan
- Ringkasan aktivitas

---

## Administration

- Review laporan
- Update status laporan
- Kelola data pengguna

---

# Improvements

- Struktur folder proyek dirapikan.
- Validasi input diperketat.
- Optimasi performa API.
- Penanganan error lebih baik.
- Konsistensi format response API.
- Peningkatan kualitas kode berdasarkan Code Review.

---

# Bug Fixes

- Memperbaiki validasi form kosong.
- Memperbaiki proses perubahan status tiket.
- Memperbaiki penanganan error pada API.
- Memperbaiki proses penyimpanan data ke Cloudflare D1.

---

# Database Changes

## Added Tables

- service_requests
- comments
- users

---

## Migration

Migration berhasil dijalankan menggunakan Cloudflare D1.

---

# API

Endpoint yang tersedia pada versi ini:

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| POST   | /api/requests     | Membuat laporan            |
| GET    | /api/requests     | Menampilkan daftar laporan |
| GET    | /api/requests/:id | Detail laporan             |
| PATCH  | /api/requests/:id | Update status              |
| POST   | /api/comments     | Menambahkan komentar       |

---

# Testing Summary

| Test             | Result       |
| ---------------- | ------------ |
| Code Review      | ✅ Passed    |
| Test Plan        | ✅ Completed |
| Unit Test        | ✅ Passed    |
| Integration Test | ✅ Passed    |
| Acceptance Test  | ✅ Passed    |
| Smoke Test       | ✅ Passed    |

---

# Deployment Summary

Deployment berhasil dilakukan menggunakan:

- Cloudflare Workers
- Cloudflare D1
- Wrangler CLI

Deployment berjalan tanpa error kritis.

---

# Known Limitations

- Upload file masih mendukung format gambar umum.
- Belum tersedia notifikasi email.
- Belum tersedia fitur pencarian laporan.
- Belum tersedia dashboard analitik lanjutan.

---

# Future Improvements

Versi berikutnya direncanakan menambahkan:

- Email Notification
- Search Ticket
- Filter Ticket
- Ticket Priority
- Dashboard Analytics
- User Profile
- Activity Log
- File Attachment lebih dari satu
- Role Based Access Control (RBAC)

---

# Compatibility

Sistem telah diuji pada:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

---

# Repository

Repository:

```
https://github.com/s22310173-bot/campus-maintenance--se
```

---

# Version History

| Version | Date         | Description     |
| ------- | ------------ | --------------- |
| v1.0.0  | ****\_\_**** | Initial Release |

---

# Approval

| Role          | Name | Status |
| ------------- | ---- | ------ |
| Developer     |      | ☐      |
| Reviewer      |      | ☐      |
| Project Owner |      | ☐      |

---

# Release Status

✅ Ready for Production
