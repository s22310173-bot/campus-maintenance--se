# Wireframe UI

**Sistem** : Campus Service Request and Maintenance System (Sistem Tiketing Laporan Fasilitas Kampus)

**Versi** : 1.0

**Status** : Draft

---

# 1. Dashboard

```
+--------------------------------------------------------------------+
| Campus Service Request and Maintenance System                      |
+--------------------------------------------------------------------+
| Total Tiket | Submitted | In Progress | Resolved | Closed          |
+--------------------------------------------------------------------+
| Tiket Terbaru                                                 [+]  |
|--------------------------------------------------------------------|
| TKT-001 | AC Rusak         | Submitted      | [Detail]            |
| TKT-002 | Lampu Mati       | Assigned       | [Detail]            |
| TKT-003 | LCD Rusak        | In Progress    | [Detail]            |
+--------------------------------------------------------------------+

                    [ Buat Tiket Baru ]
```

---

# 2. Buat Tiket

```
+--------------------------------------------------------------+
|                FORM LAPORAN KERUSAKAN                        |
+--------------------------------------------------------------+

Judul
[________________________________________________________]

Deskripsi
[________________________________________________________]

Lokasi
[________________________________________________________]

Kategori
[▼ Pilih Kategori]

                 [ Simpan ]      [ Batal ]

+--------------------------------------------------------------+
```

---

# 3. Daftar Tiket

```
+---------------------------------------------------------------------------+
| Cari [____________] Status [▼] Kategori [▼] Prioritas [▼]                |
+---------------------------------------------------------------------------+

+---------------------------------------------------------------------------+
| No | Nomor | Judul | Lokasi | Status | Prioritas | Detail                |
+---------------------------------------------------------------------------+
| 1  |001| AC Rusak      | A101 | Submitted  | High   | [Detail]           |
| 2  |002| Lampu Mati    | B201 | Assigned   | Medium | [Detail]           |
| 3  |003| LCD Rusak     | C302 | Resolved   | Low    | [Detail]           |
+---------------------------------------------------------------------------+
```

---

# 4. Detail Tiket

```
+--------------------------------------------------------------+

Nomor Tiket : TKT-001

Judul       : AC Rusak

Lokasi      : Gedung A101

Kategori    : Elektronik

Prioritas   : High

Status      : In Progress

---------------------------------------------------------------

Deskripsi

AC tidak dingin sejak pagi.

---------------------------------------------------------------

Riwayat Status

✓ Submitted

✓ Under Review

✓ Assigned

✓ In Progress

---------------------------------------------------------------

Komentar

Admin :
Teknisi sudah ditugaskan.

Teknisi :
Sedang melakukan pengecekan.

---------------------------------------------------------------

Tambah Komentar

[____________________________________________]

                    [ Kirim ]

```

---

# 5. Penugasan Teknisi (Administrator)

```
+------------------------------------------------------------+

Nomor Tiket : TKT-001

Judul       : AC Rusak

Kategori

[▼ Elektronik]

Prioritas

[▼ High]

Teknisi

[▼ Budi Santoso]

                [ Tugaskan ]

```

---

# 6. Dashboard Manajer

```
+---------------------------------------------------------------+

Total Tiket : 45

Submitted : 8

Assigned : 12

In Progress : 10

Resolved : 9

Closed : 6

---------------------------------------------------------------

Statistik Status

[ Grafik Status ]

---------------------------------------------------------------

Statistik Prioritas

[ Grafik Prioritas ]

---------------------------------------------------------------

Ringkasan Tiket

No | Judul | Status | Prioritas

001 | AC Rusak | In Progress | High

002 | Lampu Mati | Closed | Medium

003 | LCD Rusak | Submitted | Low

```

---

# 7. Navigasi Aplikasi

```
Dashboard
│
├── Buat Tiket
│
├── Daftar Tiket
│
├── Detail Tiket
│
├── Penugasan Teknisi (Administrator)
│
└── Dashboard Manajer
```

---

# 8. Validasi Form

## Form Buat Tiket

- Judul wajib diisi.
- Deskripsi wajib diisi.
- Lokasi wajib diisi.
- Kategori wajib dipilih.

---

## Form Komentar

- Komentar tidak boleh kosong.

---

## Form Penugasan Teknisi

- Teknisi wajib dipilih.
- Prioritas wajib dipilih.
- Kategori wajib dipilih.

---

# 9. Kesesuaian dengan Requirement

| Functional Requirement | Halaman |
|------------------------|----------|
| FR-01 Membuat Tiket | Buat Tiket |
| FR-05 Daftar Tiket | Daftar Tiket |
| FR-06 Detail Tiket | Detail Tiket |
| FR-09 Review Tiket | Detail Tiket |
| FR-10 Menentukan Kategori | Penugasan Teknisi |
| FR-11 Menentukan Prioritas | Penugasan Teknisi |
| FR-12 Menugaskan Teknisi | Penugasan Teknisi |
| FR-13 Ubah Status ke In Progress | Detail Tiket |
| FR-14 Ubah Status ke Resolved | Detail Tiket |
| FR-15 Menutup Tiket | Detail Tiket |
| FR-18 Tambah Komentar | Detail Tiket |
| FR-19 Lihat Komentar | Detail Tiket |
| FR-22 Dashboard Statistik | Dashboard Manajer |
| FR-23 Daftar Tiket Read Only | Dashboard Manajer |

---

# 10. Quality Check

| Pemeriksaan | Status |
|-------------|--------|
| Semua halaman tersedia | ✅ |
| Navigasi konsisten | ✅ |
| Semua fitur wajib memiliki halaman | ✅ |
| Form memiliki validasi | ✅ |
| UI sederhana dan mudah dipahami | ✅ |

---

# 11. Catatan

Desain wireframe ini hanya mencakup fitur yang termasuk dalam ruang lingkup (MVP) proyek. Fitur berikut **tidak diimplementasikan** pada versi ini:

- Upload foto
- Email notification
- Login menggunakan akun Google
- QR Code ruangan
- AI penentuan kategori
- Inventory spare part
- Vendor management

Fitur-fitur tersebut direncanakan sebagai pengembangan pada versi berikutnya dan berada di luar ruang lingkup proyek.