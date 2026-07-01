# 05 - Change Request Log

**Sistem**: Campus Service Request and Maintenance System (Tikerting Laporan Fasilitas Kampus)
**Tanggal**: 2026-06-29
**Skill Digunakan**: `05-validation-dan-change`
**Status**: Draft — Menunggu Human Review

---

## 1. Panduan Change Request

Change Request (CR) adalah permintaan perubahan terhadap requirement yang sudah terdefinisi. Setiap CR harus memiliki:

- **ID unik** (format: CR-XXX)
- **Alasan** perubahan yang jelas
- **Dampak** terhadap requirement lain
- **Status** persetujuan

### Status CR

| Status          | Keterangan                                |
| --------------- | ----------------------------------------- |
| 🟡 **Pending**  | Menunggu review dan keputusan stakeholder |
| ✅ **Approved** | Disetujui dan akan diimplementasikan      |
| ❌ **Rejected** | Ditolak, requirement tetap seperti semula |
| 🔄 **Deferred** | Ditunda ke fase berikutnya                |

---

## 2. Daftar Change Request

### CR-001 — Tambah Acceptance Criteria untuk FR yang Belum Lengkap

| Field             | Detail                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| **ID**            | CR-001                                                                                                 |
| **Tanggal**       | 2026-06-29                                                                                             |
| **Diajukan oleh** | Tim Validation (Skill 05)                                                                              |
| **Alasan**        | Hasil validasi menemukan 7 FR yang belum memiliki Acceptance Criteria yang dapat diuji secara spesifik |
| **FR Terdampak**  | FR-07, FR-08, FR-10, FR-11, FR-16, FR-18, FR-19                                                        |
| **Status**        | 🟡 Pending                                                                                             |
| **Prioritas**     | 🟠 Should Have                                                                                         |

**Perubahan yang Diminta:**
Tambahkan Acceptance Criteria berikut ke dalam dokumen SRS (`03-specification.md`):

#### AC tambahan untuk FR-07 (Pencarian Tiket)

| ID        | Skenario                  | Given                                         | When                                             | Then                                                 |
| --------- | ------------------------- | --------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| AC-FR07-1 | Pencarian ditemukan       | Ada tiket dengan judul "Proyektor rusak"      | Pengguna mengetik "proyektor" di kolom pencarian | Tiket "Proyektor rusak" muncul dalam hasil pencarian |
| AC-FR07-2 | Pencarian tidak ditemukan | Tidak ada tiket dengan kata kunci yang dicari | Pengguna mengetik kata kunci yang tidak ada      | Sistem menampilkan pesan "Tidak ada tiket ditemukan" |

#### AC tambahan untuk FR-08 (Filter Tiket)

| ID        | Skenario                  | Given                                            | When                                                       | Then                                                          |
| --------- | ------------------------- | ------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------- |
| AC-FR08-1 | Filter berdasarkan status | Ada tiket dengan berbagai status                 | Pengguna memilih filter status "In Progress"               | Hanya tiket berstatus `In Progress` yang ditampilkan          |
| AC-FR08-2 | Filter kombinasi          | Ada tiket dengan berbagai kategori dan prioritas | Pengguna memilih filter kategori "IT" dan prioritas "High" | Hanya tiket dengan kategori IT dan prioritas High yang tampil |
| AC-FR08-3 | Reset filter              | Pengguna sudah memilih filter                    | Pengguna menekan tombol "Reset Filter"                     | Semua tiket ditampilkan kembali tanpa filter                  |

#### AC tambahan untuk FR-10 (Tetapkan Kategori)

| ID        | Skenario                         | Given                              | When                                                                               | Then                                                  |
| --------- | -------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------- |
| AC-FR10-1 | Kategori berhasil ditetapkan     | Ada tiket berstatus `Under Review` | Administrator memilih kategori dari dropdown dan menyimpan                         | Kategori tersimpan dan tampil di halaman detail tiket |
| AC-FR10-2 | Kategori wajib sebelum penugasan | Tiket belum memiliki kategori      | Administrator mencoba menugaskan Teknisi tanpa menetapkan kategori terlebih dahulu | Sistem menampilkan pesan error dan mencegah penugasan |

#### AC tambahan untuk FR-11 (Tetapkan Prioritas)

| ID        | Skenario                      | Given                              | When                                                 | Then                                                                        |
| --------- | ----------------------------- | ---------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------- |
| AC-FR11-1 | Prioritas berhasil ditetapkan | Ada tiket berstatus `Under Review` | Administrator memilih prioritas `High` dan menyimpan | Prioritas `High` tersimpan dan ditampilkan di detail tiket dan daftar tiket |

#### AC tambahan untuk FR-16 (Re-open Tiket)

| ID        | Skenario                               | Given                                              | When                                        | Then                                                                        |
| --------- | -------------------------------------- | -------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------- |
| AC-FR16-1 | Re-open berhasil                       | Ada tiket berstatus `Closed`                       | Administrator menekan tombol "Buka Kembali" | Status tiket berubah ke `In Progress` dan entri re-open tercatat di riwayat |
| AC-FR16-2 | Re-open tidak tersedia untuk non-admin | Pelapor atau Teknisi membuka detail tiket `Closed` | Pengguna melihat halaman detail             | Tombol "Buka Kembali" tidak muncul                                          |

#### AC tambahan untuk FR-18 (Komentar)

| ID        | Skenario                      | Given                                           | When                                          | Then                                                                      |
| --------- | ----------------------------- | ----------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------- |
| AC-FR18-1 | Komentar berhasil ditambahkan | Pelapor membuka detail tiket aktif              | Pelapor mengetik komentar dan menekan "Kirim" | Komentar muncul di bagian bawah daftar komentar dengan nama dan timestamp |
| AC-FR18-2 | Komentar pada tiket Closed    | Pelapor membuka detail tiket berstatus `Closed` | Pelapor mencoba menambahkan komentar          | Kolom input komentar dinonaktifkan atau tidak muncul                      |

#### AC tambahan untuk FR-19 (Tampilkan Komentar Kronologis)

| ID        | Skenario                | Given                                              | When                                  | Then                                                                          |
| --------- | ----------------------- | -------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------- |
| AC-FR19-1 | Urutan kronologis benar | Ada 3 komentar yang ditambahkan pada waktu berbeda | Pengguna membuka halaman detail tiket | Komentar ditampilkan dari yang paling lama (atas) ke yang paling baru (bawah) |

---

### CR-002 — Klarifikasi BR-02 untuk Skenario Re-open

| Field             | Detail                                                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**            | CR-002                                                                                                                                                  |
| **Tanggal**       | 2026-06-29                                                                                                                                              |
| **Diajukan oleh** | Tim Validation (Skill 05)                                                                                                                               |
| **Alasan**        | FR-16 memungkinkan tiket `Closed` dibuka kembali, namun BR-02 menyatakan alur status harus linear. Terdapat potensi ambiguitas yang perlu dikonfirmasi. |
| **BR Terdampak**  | BR-02                                                                                                                                                   |
| **FR Terdampak**  | FR-16                                                                                                                                                   |
| **Status**        | 🟡 Pending                                                                                                                                              |
| **Prioritas**     | 🟠 Should Have                                                                                                                                          |

**Perubahan yang Diminta:**
Perjelas BR-02 dengan menambahkan pengecualian eksplisit:

> _Sebelum:_ "Status tiket hanya dapat berubah mengikuti alur yang telah ditetapkan: `Submitted → Under Review → Assigned → In Progress → Resolved → Closed`"
>
> _Sesudah:_ "Status tiket hanya dapat berubah mengikuti alur yang telah ditetapkan: `Submitted → Under Review → Assigned → In Progress → Resolved → Closed`. **Pengecualian**: Administrator dapat membuka kembali tiket `Closed` ke status `In Progress` sebagai mekanisme darurat (lihat FR-16)."

---

### CR-003 — Klarifikasi Batasan Komentar pada Status Tertentu

| Field             | Detail                                                                                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**            | CR-003                                                                                                                                                   |
| **Tanggal**       | 2026-06-29                                                                                                                                               |
| **Diajukan oleh** | Tim Validation (Skill 05)                                                                                                                                |
| **Alasan**        | FR-18 menyatakan komentar dapat ditambahkan "di semua tahap status", namun tidak jelas apakah Pelapor masih bisa komentar saat tiket berstatus `Closed`. |
| **FR Terdampak**  | FR-18                                                                                                                                                    |
| **Status**        | 🟡 Pending                                                                                                                                               |
| **Prioritas**     | 🟡 Could Have                                                                                                                                            |

**Perubahan yang Diminta:**
Perjelas FR-18 dengan batasan status:

> _Sebelum:_ "Sistem harus mengizinkan Pelapor, Administrator, dan Teknisi menambahkan komentar pada tiket di semua tahap status"
>
> _Sesudah:_ "Sistem harus mengizinkan Pelapor, Administrator, dan Teknisi menambahkan komentar pada tiket selama status tiket adalah `Submitted`, `Under Review`, `Assigned`, `In Progress`, atau `Resolved`. Komentar tidak dapat ditambahkan pada tiket berstatus `Closed`."

---

## 3. Riwayat Keputusan CR

| ID     | Keputusan  | Tanggal | Diputuskan oleh | Catatan                              |
| ------ | ---------- | ------- | --------------- | ------------------------------------ |
| CR-001 | 🟡 Pending | —       | —               | Menunggu review                      |
| CR-002 | 🟡 Pending | —       | —               | Menunggu konfirmasi kebijakan kampus |
| CR-003 | 🟡 Pending | —       | —               | Menunggu konfirmasi kebijakan kampus |

---

## 4. Dampak CR terhadap Dokumen Lain

| CR     | Dokumen yang Perlu Diperbarui | Bagian                       |
| ------ | ----------------------------- | ---------------------------- |
| CR-001 | `03-specification.md`         | Tambahkan AC di Bagian 6     |
| CR-002 | `03-specification.md`         | Perbarui BR-02 di Bagian 4   |
| CR-003 | `03-specification.md`         | Perbarui FR-18 di Bagian 2.3 |

---

## 5. Human Review

> ⚠️ **Mohon keputusan untuk setiap Change Request:**
>
> - **CR-001**: Apakah penambahan AC untuk 7 FR yang belum lengkap disetujui?
> - **CR-002**: Apakah re-open tiket sebagai "mekanisme darurat" sesuai kebijakan kampus?
> - **CR-003**: Apakah Pelapor/Teknisi boleh komentar saat tiket sudah `Closed`?
>
> Tandai status masing-masing CR sebagai ✅ Approved, ❌ Rejected, atau 🔄 Deferred.

---

_Dokumen ini dibuat menggunakan Skill `05-validation-dan-change`._
