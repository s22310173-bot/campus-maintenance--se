# 🏫 Campus Service Request and Maintenance System

Sistem pelaporan dan manajemen fasilitas kampus berbasis **React, TypeScript, Cloudflare Workers, dan Cloudflare D1**.

---

## 🌐 Live Application

**Demo Aplikasi**

🔗 https://campus-maintenance.s22310173.workers.dev/

---

## 📖 Deskripsi

Campus Service Request and Maintenance System adalah aplikasi yang membantu civitas kampus dalam melaporkan kerusakan atau masalah fasilitas kampus. Sistem ini menyediakan proses pengelolaan tiket mulai dari pembuatan laporan, review oleh administrator, penugasan teknisi, hingga penyelesaian pekerjaan.

---

## ✨ Fitur

### 👨‍🎓 Pelapor

- Membuat laporan kerusakan
- Melihat daftar laporan
- Melihat detail laporan
- Memberikan komentar

### 👨‍💼 Administrator

- Review laporan
- Mengubah kategori
- Mengubah prioritas
- Menugaskan teknisi
- Mengubah status laporan

### 👨‍🔧 Teknisi

- Melihat tugas
- Mengubah status pekerjaan
- Memberikan komentar

### 📊 Manajer

- Dashboard statistik
- Statistik kategori
- Statistik prioritas
- Statistik status

---

# 🔄 Workflow Sistem

```text
Submitted
      │
      ▼
Under Review
      │
      ▼
Assigned
      │
      ▼
In Progress
      │
      ▼
Resolved
      │
      ▼
Closed
```

---

# 🛠 Tech Stack

| Teknologi          | Digunakan Untuk    |
| ------------------ | ------------------ |
| React              | Frontend           |
| TypeScript         | Bahasa Pemrograman |
| Vite               | Build Tool         |
| Cloudflare Workers | Backend API        |
| Cloudflare D1      | Database           |
| HTML5              | Struktur Halaman   |
| CSS3               | User Interface     |
| GitHub             | Version Control    |

---

# 📂 Project Structure

```text
campus-maintenance
│
├── docs/
│   ├── deployment/
│   ├── design/
│   └── testing/
│
├── database/
│   └── migrations/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── worker/
│   └── index.ts
│
├── package.json
├── wrangler.jsonc
└── README.md
```

---

# 🚀 Instalasi

Clone repository

```bash
git clone https://github.com/s22310173-bot/campus-maintenance--se.git
```

Masuk ke folder project

```bash
cd campus-maintenance
```

Install dependency

```bash
npm install
```

Menjalankan aplikasi

```bash
npm run dev
```

Build aplikasi

```bash
npm run build
```

Deploy

```bash
npx wrangler deploy
```

---

# ☁️ Deployment

| Komponen | Platform                  |
| -------- | ------------------------- |
| Frontend | Cloudflare Workers Assets |
| Backend  | Cloudflare Workers        |
| Database | Cloudflare D1             |

---

# 🔗 API Endpoints

| Endpoint                   | Method | Fungsi              |
| -------------------------- | ------ | ------------------- |
| /api/health                | GET    | Health Check        |
| /api/dashboard             | GET    | Dashboard Statistik |
| /api/requests              | GET    | Daftar Laporan      |
| /api/requests              | POST   | Membuat Laporan     |
| /api/requests/:id          | GET    | Detail Laporan      |
| /api/requests/:id/comments | POST   | Tambah Komentar     |
| /api/requests/:id/review   | PATCH  | Review Laporan      |
| /api/requests/:id/assign   | PATCH  | Assign Teknisi      |
| /api/requests/:id/status   | PATCH  | Update Status       |

---

# 📷 Screenshot

Tambahkan screenshot aplikasi di folder:

```text
assets/screenshots/
```

Contoh:

- Dashboard
- Buat Laporan
- Daftar Laporan
- Detail Laporan
- Review Laporan
- Penugasan Teknisi
- Dashboard Statistik

---

# ✅ Pengujian

| Fitur           | Status |
| --------------- | ------ |
| Membuat Laporan | ✅     |
| Daftar Laporan  | ✅     |
| Detail Laporan  | ✅     |
| Review Laporan  | ✅     |
| Assign Teknisi  | ✅     |
| Update Status   | ✅     |
| Dashboard       | ✅     |
| Komentar        | ✅     |
| Deployment      | ✅     |

---

# 📂 Repository

GitHub Repository

https://github.com/s22310173-bot/campus-maintenance--se

---

# 👨‍💻 Developer

Joshua Jordan Jeblo

Program Studi Informatika

Universitas Klabat

---

# 📄 License

Project ini dibuat sebagai tugas mata kuliah **Software Engineering**.
