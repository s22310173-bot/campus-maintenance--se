# 03 - UI Design

**Sistem** : Campus Service Request and Maintenance System (Sistem Tiketing Laporan Fasilitas Kampus)

**Tanggal** : 2026-06-29

**Skill Digunakan** : `08-ui-design`

**Input**

* CASE.md
* docs/requirements/
* docs/design/01-architecture.md
* docs/design/02-database-api-design.md

**Output**

* docs/design/03-ui-design.md
* docs/design/wireframe.md

**Versi** : 1.0

**Status** : Draft — Menunggu Human Review

---

# 1. Tujuan

Dokumen ini menjelaskan rancangan antarmuka pengguna (User Interface/UI) untuk Sistem Tiketing Laporan Fasilitas Kampus.

Tujuan desain UI adalah:

* Menyediakan tampilan yang sederhana dan mudah dipahami.
* Memastikan seluruh fitur utama dapat diakses dengan mudah.
* Menjaga konsistensi tampilan pada seluruh halaman.
* Mendukung kebutuhan setiap aktor sistem.

---

# 2. Pengguna Sistem

Sistem memiliki empat jenis pengguna.

| Pengguna          | Hak Akses                            |
| ----------------- | ------------------------------------ |
| Pelapor           | Membuat dan melihat tiket sendiri    |
| Administrator     | Mengelola seluruh tiket              |
| Teknisi           | Melihat tugas dan memperbarui status |
| Manajer Fasilitas | Melihat dashboard dan laporan        |

---

# 3. Struktur Navigasi

## Pelapor

```
Dashboard
│
├── Tiket Saya
│
├── Buat Tiket
│
└── Profil
```

---

## Administrator

```
Dashboard
│
├── Semua Tiket
│
├── Detail Tiket
│
├── Penugasan Teknisi
│
└── Profil
```

---

## Teknisi

```
Dashboard
│
├── Tugas Saya
│
├── Detail Tiket
│
└── Profil
```

---

## Manajer Fasilitas

```
Dashboard
│
├── Statistik
│
├── Daftar Tiket
│
└── Profil
```

---

# 4. Daftar Halaman

## 4.1 Halaman Login

Fungsi:

* Login pengguna
* Menentukan role pengguna

Komponen:

* Logo aplikasi
* Input email
* Input password
* Tombol Login

---

## 4.2 Dashboard

Menampilkan informasi sesuai role.

Komponen:

* Navbar
* Sidebar
* Ringkasan tiket
* Statistik singkat
* Daftar tiket terbaru

---

## 4.3 Halaman Daftar Tiket

Komponen:

* Tabel tiket
* Kolom pencarian
* Filter status
* Filter kategori
* Filter prioritas
* Tombol Detail

---

## 4.4 Halaman Detail Tiket

Menampilkan informasi lengkap tiket.

Komponen:

* Informasi tiket
* Status
* Prioritas
* Kategori
* Lokasi
* Riwayat status
* Komentar

---

## 4.5 Halaman Buat Tiket

Komponen Form:

* Judul
* Deskripsi
* Lokasi
* Kategori
* Tombol Simpan
* Tombol Batal

---

## 4.6 Halaman Penugasan Teknisi

Digunakan Administrator.

Komponen:

* Detail tiket
* Dropdown Teknisi
* Dropdown Prioritas
* Dropdown Kategori
* Tombol Tugaskan

---

## 4.7 Halaman Dashboard Manajer

Komponen:

* Total tiket
* Tiket berdasarkan status
* Tiket berdasarkan kategori
* Tiket berdasarkan prioritas
* Tabel ringkasan

---

# 5. Komponen UI

| Komponen   | Digunakan Pada               |
| ---------- | ---------------------------- |
| Navbar     | Semua halaman                |
| Sidebar    | Dashboard                    |
| Card       | Statistik                    |
| Button     | Semua halaman                |
| Form Input | Login & Buat Tiket           |
| Text Area  | Deskripsi & Komentar         |
| Dropdown   | Kategori, Prioritas, Teknisi |
| Badge      | Status Tiket                 |
| Table      | Daftar Tiket                 |
| Modal      | Konfirmasi aksi              |

---

# 6. Standar Warna

| Elemen     | Warna         |
| ---------- | ------------- |
| Primary    | Biru          |
| Success    | Hijau         |
| Warning    | Kuning        |
| Danger     | Merah         |
| Background | Putih         |
| Text       | Abu-abu Gelap |

---

# 7. Ikon

| Ikon    | Fungsi     |
| ------- | ---------- |
| Home    | Dashboard  |
| Ticket  | Tiket      |
| Search  | Pencarian  |
| User    | Profil     |
| Comment | Komentar   |
| Setting | Pengaturan |

---

# 8. Validasi Form

## Login

* Email wajib diisi.
* Password wajib diisi.

---

## Buat Tiket

* Judul wajib diisi.
* Deskripsi wajib diisi.
* Lokasi wajib diisi.
* Kategori wajib dipilih.

---

## Komentar

* Komentar tidak boleh kosong.

---

# 9. Responsif

UI harus mendukung:

* Desktop
* Laptop
* Tablet
* Smartphone

Layout menggunakan pendekatan responsive sehingga tampilan tetap nyaman digunakan pada berbagai ukuran layar.

---

# 10. Konsistensi Desain

Seluruh halaman menggunakan:

* Navbar yang sama.
* Sidebar yang sama.
* Warna utama yang sama.
* Tombol dengan ukuran seragam.
* Font yang konsisten.
* Ikon yang seragam.

---

# 11. Kesesuaian dengan Requirement

| Requirement | Halaman              |
| ----------- | -------------------- |
| FR-01       | Buat Tiket           |
| FR-05       | Daftar Tiket         |
| FR-06       | Detail Tiket         |
| FR-09       | Detail Tiket (Admin) |
| FR-10       | Penugasan Teknisi    |
| FR-11       | Penugasan Teknisi    |
| FR-12       | Penugasan Teknisi    |
| FR-13       | Detail Tiket Teknisi |
| FR-14       | Detail Tiket Teknisi |
| FR-15       | Detail Tiket Admin   |
| FR-18       | Detail Tiket         |
| FR-19       | Detail Tiket         |
| FR-22       | Dashboard Manajer    |
| FR-23       | Dashboard Manajer    |

---

# 12. Quality Check

| Pemeriksaan                        | Status |
| ---------------------------------- | ------ |
| Semua halaman tersedia             | ✅      |
| Semua fitur wajib memiliki halaman | ✅      |
| Navigasi konsisten                 | ✅      |
| Form memiliki validasi             | ✅      |
| UI sederhana dan mudah dipahami    | ✅      |

---

# 13. Kesimpulan

Desain UI dirancang sederhana, konsisten, dan mudah digunakan oleh seluruh aktor sistem. Seluruh halaman telah disesuaikan dengan Functional Requirement sehingga dapat mendukung proses implementasi frontend pada tahap berikutnya.
