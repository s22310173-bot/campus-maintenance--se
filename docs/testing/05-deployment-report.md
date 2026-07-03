# Deployment Report

## Project

Campus Service Request and Maintenance System

---

# Deployment Information

| Item            | Value                |
| --------------- | -------------------- |
| Platform        | Cloudflare Workers   |
| Frontend        | React + Vite         |
| Backend         | Cloudflare Workers   |
| Database        | Cloudflare D1        |
| Deployment Tool | Wrangler CLI         |
| Environment     | Production           |
| Version         | v1.0.0               |
| Deployment Date | ********\_\_******** |
=======
| Item            | Value                        |
| --------------- | ---------------------------- |
| Platform        | Cloudflare Workers           |
| Frontend        | React + Vite                 |
| Backend         | Cloudflare Workers           |
| Database        | Cloudflare D1                |
| Deployment Tool | Wrangler CLI                 |
| Environment     | Production                   |
| Version         | v1.0.0                       |
| Deployment Date | **\*\*\*\***\_\_**\*\*\*\*** |


=======
=======
| Item            | Value                |
| --------------- | -------------------- |
| Platform        | Cloudflare Workers   |
| Frontend        | React + Vite         |
| Backend         | Cloudflare Workers   |
| Database        | Cloudflare D1        |
| Deployment Tool | Wrangler CLI         |
| Environment     | Production           |
| Version         | v1.0.0               |
| Deployment Date | ********\_\_******** |


---

# Deployment Prerequisites

Pastikan seluruh persyaratan berikut telah terpenuhi sebelum melakukan deployment.

- [x] Source code selesai diimplementasikan.
- [x] Code Review selesai.
- [x] Test Plan selesai.
- [x] Automated Testing berhasil.
- [x] Acceptance Testing berhasil.
- [x] Wrangler telah terinstal.
- [x] Login ke Cloudflare menggunakan Wrangler.
- [x] Database Cloudflare D1 telah dibuat.

---

# Deployment Steps

## 1. Install Dependency

```bash
npm install
```

---

## 2. Build Frontend

```bash
npm run build
```

Output yang diharapkan:

```
dist/
```

---

## 3. Login Cloudflare

```bash
npx wrangler login
```

---

## 4. Deploy Cloudflare Worker

```bash
npx wrangler deploy
```

Output yang diharapkan:

```
Deployment successful
```

---

## 5. Deploy Database Migration

```bash
npx wrangler d1 migrations apply campus-maintenance-db --remote
```

---

## 6. Verifikasi Database

```bash
npx wrangler d1 execute campus-maintenance-db --remote --command="SELECT * FROM service_requests;"
```

Expected Result

- Database dapat diakses.
- Query berhasil dijalankan.

---

## 7. Verifikasi Website

Buka URL hasil deployment.

Pastikan:

- Login berhasil.
- Dashboard tampil.
- Membuat laporan berhasil.
- Status laporan dapat diubah.
- Database menyimpan data.

---

# Deployment Checklist

| Item                         | Status |
| ---------------------------- | ------ |
| Build berhasil               | ☐      |
| Worker berhasil di-deploy    | ☐      |
| Frontend berhasil di-deploy  | ☐      |
| Database D1 terhubung        | ☐      |
| API dapat diakses            | ☐      |
| Semua halaman dapat dibuka   | ☐      |
| Tidak ada error pada browser | ☐      |

---

# Deployment Result

## Public URL

Frontend

```
https://____________________________________
```

Backend API

```
https://____________________________________
```

---

# Database

| Item       | Status    |
| ---------- | --------- |
| Connection | ☐ Success |
| Migration  | ☐ Success |
| Read Data  | ☐ Success |
| Write Data | ☐ Success |

---

# Smoke Testing

| Test           | Result |
| -------------- | ------ |
| Login          | ☐ Pass |
| Create Request | ☐ Pass |
| View Requests  | ☐ Pass |
| Update Status  | ☐ Pass |
| Add Comment    | ☐ Pass |
| Upload Photo   | ☐ Pass |

---

# Known Issues

| No  | Description | Severity | Status |
| --- | ----------- | -------- | ------ |
| 1   | -           | -        | -      |

---

# Rollback Plan

Apabila deployment gagal:

1. Rollback ke versi sebelumnya.
2. Periksa log deployment.
3. Perbaiki error.
4. Deploy ulang.

---

# Release Notes

## Version

v1.0.0

### New Features

- User Login
- Submit Service Request
- View Service Requests
- Update Request Status
- View Request Detail
- Add Comment
- Dashboard
- Manage Users
- Review Request
- Upload Photo

### Improvements

- Validasi input ditingkatkan.
- Performa API dioptimalkan.
- Struktur kode dirapikan.

### Bug Fixes

- Perbaikan validasi formulir.
- Perbaikan penanganan error API.
- Perbaikan proses pembaruan status tiket.

---

# Approval

| Role          | Name | Status |
| ------------- | ---- | ------ |
| Developer     |      | ☐      |
| Reviewer      |      | ☐      |
| Project Owner |      | ☐      |

---

# Conclusion

Pilih salah satu.

- [ ] Deployment Successful
- [ ] Deployment Failed

---

# Notes

---

---

---
