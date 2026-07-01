# 01 - Architecture Design

**Sistem** : Campus Service Request and Maintenance System (Sistem Tiketing Laporan Fasilitas Kampus)

**Tanggal** : 2026-06-29

**Skill Digunakan** : `06-architecture-design`

**Input** :
- CASE.md
- docs/requirements/

**Versi** : 1.0

**Status** : Draft — Menunggu Human Review

---

# 1. Tujuan

Dokumen ini menjelaskan rancangan arsitektur aplikasi berdasarkan kebutuhan yang telah didefinisikan pada tahap Requirements Engineering.

Tujuan utama arsitektur ini adalah:

- mempermudah proses pengembangan
- memisahkan tanggung jawab setiap komponen
- menjaga kemudahan pemeliharaan
- memastikan seluruh requirement dapat diimplementasikan

---

# 2. Gambaran Umum Arsitektur

Sistem menggunakan arsitektur **Client–Server**.

```
+----------------------+
|      Browser         |
| (Mahasiswa, Admin,   |
| Teknisi, Manajer)    |
+----------+-----------+
           |
           | HTTPS
           |
+----------v-----------+
|   Frontend (React)   |
+----------+-----------+
           |
           | REST API
           |
+----------v-----------+
| Backend API          |
| Cloudflare Workers   |
+----------+-----------+
           |
           |
+----------v-----------+
| Database Cloudflare  |
| D1 SQLite            |
+----------------------+
```

Semua pengguna mengakses aplikasi melalui browser.

Frontend berkomunikasi dengan Backend menggunakan REST API.

Backend menangani seluruh logika bisnis serta akses database.

---

# 3. Komponen Sistem

Sistem terdiri dari empat komponen utama.

## 3.1 Frontend

Berfungsi sebagai antarmuka pengguna.

Tanggung jawab:

- Login pengguna
- Menampilkan dashboard
- Membuat tiket
- Menampilkan daftar tiket
- Menampilkan detail tiket
- Mengubah status
- Menampilkan komentar
- Menampilkan statistik

Teknologi:

- React
- TypeScript
- Vite
- Tailwind CSS

---

## 3.2 Backend

Backend bertugas menangani seluruh proses bisnis.

Fungsi utama:

- Validasi request
- Autentikasi
- Otorisasi berdasarkan role
- Mengelola tiket
- Mengelola komentar
- Mengelola status tiket
- Menghasilkan data dashboard
- Mengakses database

Teknologi:

- Cloudflare Workers
- Hono Framework
- TypeScript

---

## 3.3 Database

Database menyimpan seluruh data sistem.

Data utama:

- User
- Ticket
- Comment
- Status History

Teknologi:

- Cloudflare D1 (SQLite)

---

## 3.4 Browser

Browser digunakan oleh empat aktor:

- Pelapor
- Administrator
- Teknisi
- Manajer Fasilitas

Browser hanya mengakses Frontend.

---

# 4. Modul Aplikasi

Berdasarkan requirement, aplikasi dibagi menjadi beberapa modul.

## Modul Autentikasi

Fungsi:

- Login
- Logout
- Menentukan Role

Digunakan oleh:

- Semua aktor

---

## Modul Tiket

Fungsi:

- Membuat tiket
- Mengubah tiket
- Menampilkan tiket
- Detail tiket
- Filter
- Pencarian

---

## Modul Workflow

Mengatur perubahan status:

Submitted

↓

Under Review

↓

Assigned

↓

In Progress

↓

Resolved

↓

Closed

---

## Modul Komentar

Fungsi:

- Menambah komentar
- Menampilkan komentar
- Riwayat komunikasi

---

## Modul Dashboard

Menampilkan:

- Jumlah tiket
- Statistik status
- Statistik kategori
- Statistik prioritas

---

# 5. Aliran Data (Data Flow)

## 5.1 Membuat Tiket

```
Pelapor

↓

Frontend

↓

Backend API

↓

Validasi

↓

Database

↓

Response

↓

Frontend

↓

Tiket berhasil dibuat
```

---

## 5.2 Administrator Menugaskan Teknisi

```
Administrator

↓

Frontend

↓

Backend

↓

Validasi Hak Akses

↓

Update Ticket

↓

Simpan History

↓

Database

↓

Response
```

---

## 5.3 Teknisi Memperbarui Status

```
Teknisi

↓

Frontend

↓

Backend

↓

Validasi

↓

Update Status

↓

Tambah History

↓

Database
```

---

## 5.4 Dashboard

```
Browser

↓

Frontend

↓

Backend

↓

Query Database

↓

Hitung Statistik

↓

Frontend

↓

Dashboard
```

---

# 6. Hak Akses

| Role | Hak Akses |
|-------|-----------|
| Pelapor | Membuat tiket, melihat tiket sendiri, komentar |
| Administrator | Mengelola seluruh tiket |
| Teknisi | Melihat tiket yang ditugaskan dan memperbarui status |
| Manajer | Melihat dashboard dan seluruh tiket (read only) |

---

# 7. Teknologi yang Digunakan

| Komponen | Teknologi |
|-----------|-----------|
| Frontend | React |
| Bahasa Frontend | TypeScript |
| Build Tool | Vite |
| CSS | Tailwind CSS |
| Backend | Cloudflare Workers |
| Framework Backend | Hono |
| Database | Cloudflare D1 |
| Version Control | Git |
| Repository | GitHub |
| Deployment Frontend | Cloudflare Pages |
| Deployment Backend | Cloudflare Workers |

---

# 8. Struktur Direktori

```
campus-maintenance/

│
├── docs/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── assets/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── database/
│   ├── models/
│   └── utils/
│
├── migrations/
│
├── tests/
│
└── README.md
```

---

# 9. Diagram Arsitektur

```
                 +---------------------------+
                 |        Browser            |
                 |---------------------------|
                 | Pelapor                   |
                 | Administrator             |
                 | Teknisi                   |
                 | Manajer                   |
                 +-------------+-------------+
                               |
                               |
                          HTTPS Request
                               |
                               v
                +------------------------------+
                |      React Frontend          |
                |------------------------------|
                | Login                        |
                | Dashboard                    |
                | Tiket                        |
                | Komentar                     |
                | Statistik                    |
                +--------------+---------------+
                               |
                           REST API
                               |
                               v
                +------------------------------+
                | Cloudflare Workers + Hono    |
                |------------------------------|
                | Authentication               |
                | Authorization                |
                | Ticket Service               |
                | Comment Service              |
                | Dashboard Service            |
                +--------------+---------------+
                               |
                               |
                               v
                +------------------------------+
                |      Cloudflare D1           |
                |------------------------------|
                | User                         |
                | Ticket                       |
                | Comment                      |
                | Status History               |
                +------------------------------+
```

---

# 10. Kesesuaian dengan Requirement

| Requirement | Komponen |
|------------|----------|
| FR-01 – FR-08 | Modul Tiket |
| FR-09 – FR-17 | Modul Workflow |
| FR-18 – FR-19 | Modul Komentar |
| FR-20 – FR-21 | Modul Workflow |
| FR-22 – FR-23 | Dashboard |
| NFR-01 | Authentication & Authorization |
| NFR-02 | Role Based Access |
| NFR-03 | Role Based Access |
| NFR-04 | Cloudflare |
| NFR-05 | React + API |
| NFR-06 | UI React |
| NFR-07 | Status History |
| NFR-08 | Cloudflare D1 |

---

# 11. Quality Check

| Pemeriksaan | Status |
|-------------|--------|
| Semua requirement telah dipetakan | ✅ |
| Tidak ada komponen di luar scope | ✅ |
| Data flow jelas | ✅ |
| Teknologi sesuai requirement | ✅ |
| Struktur sederhana | ✅ |

---

# 12. Kesimpulan

Arsitektur yang diusulkan menggunakan pola **Client–Server** dengan Frontend berbasis React, Backend menggunakan Cloudflare Workers dan Hono, serta Database Cloudflare D1. Rancangan ini mendukung seluruh Functional Requirement (FR), Non-Functional Requirement (NFR), dan Business Rule (BR) yang telah ditetapkan tanpa menambahkan fitur di luar ruang lingkup proyek. Arsitektur juga mudah dipahami, dikembangkan, dan dipelihara.