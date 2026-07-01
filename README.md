# Campus Service Request and Maintenance System

Sistem Tiketing Laporan Fasilitas Kampus berbasis **React**, **Cloudflare Workers**, dan **Cloudflare D1**.

---

## Deskripsi

Campus Service Request and Maintenance System adalah aplikasi web yang digunakan untuk mengelola laporan kerusakan fasilitas kampus secara terpusat. Sistem ini memungkinkan mahasiswa atau dosen membuat laporan, administrator mengelola tiket, teknisi memperbarui progres pekerjaan, dan manajer fasilitas memantau statistik melalui dashboard.

Proyek ini dikembangkan sebagai tugas mata kuliah **Software Engineering** dengan mengikuti tahapan **Requirements Engineering**, **Design**, **Planning**, **Implementation**, **Testing**, dan **Deployment**.

---

## Tujuan

- Memusatkan pelaporan kerusakan fasilitas kampus.
- Mempermudah pengelolaan tiket oleh administrator.
- Mempercepat proses penugasan teknisi.
- Memberikan transparansi status perbaikan kepada pelapor.
- Menyediakan dashboard statistik bagi manajemen.

---

## Aktor Sistem

| Aktor             | Deskripsi                                                    |
| ----------------- | ------------------------------------------------------------ |
| Pelapor           | Membuat tiket dan melihat status laporan                     |
| Administrator     | Mengelola tiket, menentukan kategori, prioritas, dan teknisi |
| Teknisi           | Memperbarui status pekerjaan                                 |
| Manajer Fasilitas | Melihat dashboard dan laporan statistik                      |

---

## Workflow Tiket

```text
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
```

---

## Fitur MVP

- Membuat laporan kerusakan
- Melihat daftar laporan
- Melihat detail laporan
- Menentukan kategori
- Menentukan prioritas
- Menugaskan teknisi
- Memperbarui status tiket
- Menambahkan komentar
- Dashboard statistik

---

## Teknologi

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Backend

- Cloudflare Workers
- Hono

### Database

- Cloudflare D1 (SQLite)

### Deployment

- Cloudflare Pages
- Cloudflare Workers

---

## Struktur Repository

```text
campus-maintenance/

├── database/
│   └── migrations/
│
├── docs/
│   ├── requirements/
│   ├── design/
│   ├── planning/
│   ├── testing/
│   └── deployment/
│
├── public/
├── src/
├── tests/
├── worker/
├── skills/
│
├── README.md
├── CASE.md
├── package.json
└── wrangler.jsonc
```

---

## Dokumentasi

### Requirements Engineering

- Inception & Stakeholder
- Elicitation
- Software Requirement Specification
- Prioritization
- Validation
- Change Request
- Traceability Matrix

### Design

- Architecture Design
- Database & API Design
- UI Design
- Wireframe

### Planning

- Issue Planning
- GitHub Issues
- Branch Strategy
- Milestone

---

## Cara Menjalankan

### Install dependency

```bash
npm install
```

### Jalankan aplikasi

```bash
npm run dev
```

---

## Database

Migration lokal:

```bash
npx wrangler d1 execute campus-maintenance-db --local --file=database/migrations/0001_initial.sql
```

Migration production:

```bash
npx wrangler d1 execute campus-maintenance-db --remote --file=database/migrations/0001_initial.sql
```

---

## Testing

```bash
npm test
```

---

## Deployment

```bash
npm run deploy
```

---

## Status Proyek

| Tahap                    | Status          |
| ------------------------ | --------------- |
| Requirements Engineering | ✅ Selesai      |
| Design                   | ✅ Selesai      |
| Planning                 | 🚧 Dalam Proses |
| Implementation           | 🚧 Dalam Proses |
| Testing                  | ⏳ Belum        |
| Deployment               | ⏳ Belum        |

---

## Author

**Joshua Jordan**  
Program Studi Informatika  
Universitas Klabat

---

## License

Proyek ini dibuat untuk keperluan akademik pada mata kuliah Software Engineering.
