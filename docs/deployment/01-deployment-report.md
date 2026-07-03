
# Release Notes

Version 1.0

Tanggal:
2026-07-03

## Fitur

- Membuat laporan
- Dashboard
- Detail laporan
- Review laporan
- Assign teknisi
- Update status
- Komentar
- Dashboard Manager
- Riwayat Status
- Deployment ke Cloudflare

## Bug Fix

- Perbaikan request_status_history
- Perbaikan technician_id
- Perbaikan review endpoint
- Perbaikan assign endpoint
- Perbaikan komentar

## Known Limitations

- Belum mendukung upload foto
- Belum ada autentikasi login
=======
# Deployment Report

## Project

Campus Service Request and Maintenance System

---

# Purpose

Dokumen ini menjelaskan proses deployment aplikasi **Campus Service Request and Maintenance System** ke **Cloudflare Workers** menggunakan **Cloudflare D1** sebagai database, serta hasil verifikasi setelah deployment.

---

# Deployment Information

| Item            | Value                                         |
| --------------- | --------------------------------------------- |
| Project         | Campus Service Request and Maintenance System |
| Platform        | Cloudflare Workers                            |
| Frontend        | React + Vite                                  |
| Backend         | Cloudflare Workers                            |
| Database        | Cloudflare D1                                 |
| Deployment Tool | Wrangler CLI                                  |
| Environment     | Production                                    |
| Version         | v1.0.0                                        |
| Deployment Date | ********\_\_********                          |

---

# Deployment Prerequisites

Pastikan seluruh persyaratan berikut telah terpenuhi sebelum deployment.

- [x] Source code selesai diimplementasikan
- [x] Code Review selesai
- [x] Test Plan selesai
- [x] Automated Testing berhasil
- [x] Acceptance Testing berhasil
- [x] Node.js telah terinstal
- [x] Wrangler CLI telah terinstal
- [x] Login ke Cloudflare berhasil
- [x] Database Cloudflare D1 telah dibuat
- [x] File `wrangler.jsonc` telah dikonfigurasi

---

# Deployment Steps

## Step 1 — Install Dependencies

```bash
npm install
```

Expected Result

- Seluruh dependency berhasil diinstal.

---

## Step 2 — Build Application

```bash
npm run build
```

Expected Result

```
dist/
```

Tidak terdapat error selama proses build.

---

## Step 3 — Login ke Cloudflare

```bash
npx wrangler login
```

Expected Result

- Browser terbuka.
- Login berhasil.
- Wrangler terhubung ke akun Cloudflare.

---

## Step 4 — Deploy Worker

```bash
npx wrangler deploy
```

Expected Result

```
Deployment successful
```

Worker berhasil dipublikasikan.

---

## Step 5 — Jalankan Database Migration

```bash
npx wrangler d1 migrations apply campus-maintenance-db --remote
```

Expected Result

- Seluruh tabel berhasil dibuat.

---

## Step 6 — Verifikasi Database

```bash
npx wrangler d1 execute campus-maintenance-db --remote --command="SELECT * FROM service_requests;"
```

Expected Result

- Query berhasil dijalankan.
- Database dapat diakses tanpa error.

---

## Step 7 — Verifikasi Website

Buka URL aplikasi hasil deployment.

Pastikan:

- Login berhasil.
- Dashboard tampil.
- Membuat laporan berhasil.
- Detail laporan dapat dibuka.
- Status laporan dapat diubah.
- Komentar dapat ditambahkan.
- Database menyimpan data dengan benar.

---

# Deployment Checklist

| Item                        | Status |
| --------------------------- | ------ |
| Build berhasil              | ☐      |
| Worker berhasil di-deploy   | ☐      |
| Frontend berhasil di-deploy | ☐      |
| Database D1 terhubung       | ☐      |
| Migration berhasil          | ☐      |
| API dapat diakses           | ☐      |
| Semua halaman dapat dibuka  | ☐      |
| Tidak ada error kritis      | ☐      |

---

# Deployment Result

## Public URL

### Frontend

```
https://_________________________________________
```

### Backend API

```
https://_________________________________________
```

---

# Database Verification

| Item        | Status    |
| ----------- | --------- |
| Connection  | ☐ Success |
| Migration   | ☐ Success |
| Read Data   | ☐ Success |
| Insert Data | ☐ Success |
| Update Data | ☐ Success |
| Delete Data | ☐ Success |

---

# Smoke Testing

| Feature                | Result |
| ---------------------- | ------ |
| Login                  | ☐ Pass |
| Submit Service Request | ☐ Pass |
| View Service Requests  | ☐ Pass |
| View Request Detail    | ☐ Pass |
| Update Request Status  | ☐ Pass |
| Add Comment            | ☐ Pass |
| Upload Photo           | ☐ Pass |
| Dashboard              | ☐ Pass |

---

# Known Issues

| No  | Description | Severity | Status |
| --- | ----------- | -------- | ------ |
| 1   | -           | -        | -      |

---

# Rollback Plan

Apabila deployment gagal:

1. Identifikasi penyebab kegagalan melalui log Wrangler.
2. Rollback ke versi stabil sebelumnya.
3. Perbaiki konfigurasi atau source code.
4. Jalankan deployment ulang.
5. Lakukan smoke testing kembali.

---

# Release Summary

## Version

**v1.0.0**

### New Features

- User Login
- Submit Service Request
- View Service Requests
- View Request Detail
- Update Request Status
- Add Comment
- Dashboard
- Manage Users
- Review Request
- Upload Photo

### Improvements

- Struktur proyek lebih rapi.
- Validasi input ditingkatkan.
- Performa API ditingkatkan.
- Penanganan error diperbaiki.

### Bug Fixes

- Perbaikan validasi formulir.
- Perbaikan proses update status.
- Perbaikan respons API.

---

# Approval

| Role          | Name | Signature | Date |
| ------------- | ---- | --------- | ---- |
| Developer     |      |           |      |
| Reviewer      |      |           |      |
| Project Owner |      |           |      |

---

# Final Result

Pilih salah satu.

- [ ] Deployment Successful
- [ ] Deployment Failed

---

# Conclusion

---

---

---

---

# Notes

---

---

---

