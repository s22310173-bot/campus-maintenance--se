# 03 - Software Requirements Specification (SRS)

**Sistem**: Campus Service Request and Maintenance System (Tikerting Laporan Fasilitas Kampus)
**Tanggal**: 2026-06-29
**Skill Digunakan**: `03-specification`
**Input**: `CASE.md` + `01-inception.md` + `02-elicitation.md`
**Versi**: 1.0 — Draft
**Status**: Menunggu Human Review

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen

Dokumen ini mendefinisikan seluruh persyaratan perangkat lunak (Functional Requirement, Non-Functional Requirement, Business Rule, User Story, dan Acceptance Criteria) untuk sistem **Campus Service Request and Maintenance System** — platform tikerting digital yang menangani pelaporan, penugasan, dan pelacakan perbaikan fasilitas kampus.

### 1.2 Ruang Lingkup

Sistem ini melibatkan 4 aktor: **Pelapor**, **Administrator**, **Teknisi**, dan **Manajer Fasilitas**. Sistem mengelola siklus hidup tiket laporan dari `Submitted` hingga `Closed`.

### 1.3 Referensi

- `CASE.md` — Studi Kasus Proyek
- `docs/requirements/01-inception.md` — Inception & Stakeholder
- `docs/requirements/02-elicitation.md` — Elicitation

---

## 2. Functional Requirements (FR)

### 2.1 Manajemen Tiket

| ID    | Deskripsi                                                                                                                                                                                                              | Aktor   | Prioritas |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------- |
| FR-01 | Sistem harus memungkinkan Pelapor membuat tiket baru dengan mengisi: judul, deskripsi masalah, lokasi ruangan, dan kategori fasilitas                                                                                  | Pelapor | Tinggi    |
| FR-02 | Sistem harus menghasilkan ID tiket yang unik secara otomatis (incremental) pada saat tiket berhasil dibuat                                                                                                             | Sistem  | Tinggi    |
| FR-03 | Sistem harus menyimpan tiket baru dengan status awal `Submitted`                                                                                                                                                       | Sistem  | Tinggi    |
| FR-04 | Sistem harus mencatat waktu (timestamp) pembuatan tiket secara otomatis                                                                                                                                                | Sistem  | Tinggi    |
| FR-05 | Sistem harus menampilkan daftar tiket sesuai hak akses masing-masing aktor: Pelapor hanya melihat tiket miliknya; Teknisi hanya melihat tiket yang ditugaskan kepadanya; Administrator dan Manajer melihat semua tiket | Semua   | Tinggi    |
| FR-06 | Sistem harus menampilkan halaman detail tiket yang memuat: informasi tiket, status terkini, riwayat perubahan status, dan daftar komentar                                                                              | Semua   | Tinggi    |
| FR-07 | Sistem harus menyediakan fitur pencarian tiket berdasarkan kata kunci pada judul atau deskripsi                                                                                                                        | Semua   | Sedang    |
| FR-08 | Sistem harus menyediakan fitur filter tiket berdasarkan: status, kategori fasilitas, dan prioritas                                                                                                                     | Semua   | Sedang    |

### 2.2 Alur Kerja (Workflow) Tiket

| ID    | Deskripsi                                                                                                                 | Aktor         | Prioritas |
| ----- | ------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| FR-09 | Sistem harus mengizinkan Administrator mengubah status tiket dari `Submitted` ke `Under Review`                           | Administrator | Tinggi    |
| FR-10 | Sistem harus mengizinkan Administrator menetapkan kategori fasilitas pada tiket saat status `Under Review`                | Administrator | Tinggi    |
| FR-11 | Sistem harus mengizinkan Administrator menetapkan tingkat prioritas (`Low`, `Medium`, `High`) pada tiket                  | Administrator | Tinggi    |
| FR-12 | Sistem harus mengizinkan Administrator menugaskan satu Teknisi ke tiket dan mengubah status ke `Assigned`                 | Administrator | Tinggi    |
| FR-13 | Sistem harus mengizinkan Teknisi mengubah status tiket dari `Assigned` ke `In Progress`                                   | Teknisi       | Tinggi    |
| FR-14 | Sistem harus mengizinkan Teknisi mengubah status tiket dari `In Progress` ke `Resolved`                                   | Teknisi       | Tinggi    |
| FR-15 | Sistem harus mengizinkan Administrator menutup tiket dengan mengubah status ke `Closed`                                   | Administrator | Tinggi    |
| FR-16 | Sistem harus mengizinkan Administrator membuka kembali tiket berstatus `Closed` menjadi `In Progress`                     | Administrator | Sedang    |
| FR-17 | Sistem harus mencatat setiap perubahan status secara otomatis ke dalam log riwayat tiket beserta nama aktor dan timestamp | Sistem        | Tinggi    |

### 2.3 Komentar dan Catatan

| ID    | Deskripsi                                                                                                          | Aktor                   | Prioritas |
| ----- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- | --------- |
| FR-18 | Sistem harus mengizinkan Pelapor, Administrator, dan Teknisi menambahkan komentar pada tiket di semua tahap status | Pelapor, Admin, Teknisi | Sedang    |
| FR-19 | Sistem harus menampilkan daftar komentar secara kronologis (terlama di atas) beserta nama aktor dan waktu komentar | Semua                   | Sedang    |

### 2.4 Konfirmasi Perbaikan

| ID    | Deskripsi                                                                                                    | Aktor         | Prioritas |
| ----- | ------------------------------------------------------------------------------------------------------------ | ------------- | --------- |
| FR-20 | Sistem harus menampilkan tombol konfirmasi kepada Pelapor saat status tiket adalah `Resolved`                | Pelapor       | Tinggi    |
| FR-21 | Sistem hanya boleh menutup tiket (`Closed`) setelah aksi eksplisit dari Administrator, bukan secara otomatis | Administrator | Tinggi    |

### 2.5 Dashboard & Laporan

| ID    | Deskripsi                                                                                                                            | Aktor             | Prioritas |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | --------- |
| FR-22 | Sistem harus menampilkan dashboard dengan metrik: jumlah tiket per status, jumlah tiket per kategori, dan jumlah tiket per prioritas | Manajer Fasilitas | Tinggi    |
| FR-23 | Sistem harus menampilkan daftar semua tiket untuk Manajer Fasilitas dalam mode baca (read-only, tanpa tombol aksi)                   | Manajer Fasilitas | Sedang    |

---

## 3. Non-Functional Requirements (NFR)

| ID     | Kategori             | Deskripsi                                                                                            | Kriteria Uji                                                                               |
| ------ | -------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| NFR-01 | Keamanan             | Setiap aktor hanya dapat mengakses halaman dan fitur sesuai perannya (role-based access control)     | Mencoba mengakses halaman Administrator sebagai Pelapor harus menghasilkan penolakan akses |
| NFR-02 | Keamanan             | Pelapor hanya dapat melihat tiket yang dibuat oleh dirinya sendiri                                   | Akses langsung ke URL detail tiket milik Pelapor lain harus ditolak                        |
| NFR-03 | Keamanan             | Teknisi hanya dapat melihat tiket yang secara eksplisit ditugaskan kepadanya                         | Daftar tiket Teknisi tidak menampilkan tiket yang ditugaskan ke Teknisi lain               |
| NFR-04 | Ketersediaan         | Sistem harus dapat diakses selama ada koneksi internet tanpa downtime terjadwal                      | Sistem dapat diakses dari browser kapan saja                                               |
| NFR-05 | Kinerja              | Halaman daftar tiket harus dimuat dalam waktu ≤ 3 detik pada koneksi broadband normal                | Diukur menggunakan tools browser developer                                                 |
| NFR-06 | Kemudahan Penggunaan | Antarmuka harus intuitif sehingga pengguna baru dapat menyelesaikan tugas utama tanpa panduan khusus | Pengguna baru dapat membuat tiket dalam ≤ 5 menit pertama                                  |
| NFR-07 | Keterlacakan         | Setiap perubahan status tiket harus tersimpan permanen dan tidak dapat dihapus oleh siapapun         | Riwayat status tidak memiliki tombol hapus                                                 |
| NFR-08 | Skalabilitas         | Sistem harus mampu menyimpan minimal 10.000 data tiket teks tanpa degradasi kinerja signifikan       | Diuji dengan data dummy 10.000 entri                                                       |

---

## 4. Business Rules (BR)

Business Rule adalah kebijakan bisnis yang mengatur perilaku sistem, terlepas dari implementasi teknis.

| ID    | Business Rule                                                                                                                                  |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| BR-01 | Hanya Pelapor yang dapat membuat tiket laporan baru                                                                                            |
| BR-02 | Status tiket hanya dapat berubah mengikuti alur yang telah ditetapkan: `Submitted → Under Review → Assigned → In Progress → Resolved → Closed` |
| BR-03 | Administrator adalah satu-satunya aktor yang dapat menugaskan Teknisi ke tiket                                                                 |
| BR-04 | Administrator adalah satu-satunya aktor yang dapat menutup tiket (`Closed`)                                                                    |
| BR-05 | Teknisi hanya dapat mengubah status tiket yang secara resmi ditugaskan kepadanya                                                               |
| BR-06 | Satu tiket hanya dapat ditugaskan kepada satu Teknisi pada satu waktu                                                                          |
| BR-07 | Pelapor, Administrator, dan Teknisi dapat menambahkan komentar pada tiket yang relevan                                                         |
| BR-08 | Manajer Fasilitas hanya memiliki hak baca (read-only) terhadap semua data tiket dan dashboard                                                  |
| BR-09 | Riwayat perubahan status tiket bersifat permanen dan tidak dapat diubah atau dihapus                                                           |
| BR-10 | Upload foto, notifikasi email, dan login Google berada di luar scope sistem versi pertama ini                                                  |

---

## 5. User Stories

### 5.1 Pelapor

| ID      | User Story                                                                                                                                                                                          | FR Terkait                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| US-P-01 | **Sebagai** Pelapor, **saya ingin** membuat tiket laporan baru dengan mengisi judul, deskripsi, lokasi, dan kategori, **sehingga** masalah fasilitas yang saya temukan dapat tercatat dan ditangani | FR-01, FR-02, FR-03, FR-04 |
| US-P-02 | **Sebagai** Pelapor, **saya ingin** melihat daftar semua tiket yang saya buat beserta statusnya, **sehingga** saya dapat memantau progres penanganan                                                | FR-05                      |
| US-P-03 | **Sebagai** Pelapor, **saya ingin** melihat halaman detail tiket termasuk riwayat status dan komentar, **sehingga** saya mengetahui perkembangan penanganan secara lengkap                          | FR-06, FR-19               |
| US-P-04 | **Sebagai** Pelapor, **saya ingin** menambahkan komentar pada tiket saya, **sehingga** saya dapat memberikan informasi tambahan kepada administrator atau teknisi                                   | FR-18                      |
| US-P-05 | **Sebagai** Pelapor, **saya ingin** mengonfirmasi bahwa perbaikan sudah selesai saat tiket berstatus `Resolved`, **sehingga** administrator dapat menutup tiket secara resmi                        | FR-20                      |
| US-P-06 | **Sebagai** Pelapor, **saya ingin** mencari dan menyaring tiket berdasarkan kata kunci atau status, **sehingga** saya dapat menemukan tiket tertentu dengan mudah                                   | FR-07, FR-08               |

### 5.2 Administrator

| ID      | User Story                                                                                                                                                                | FR Terkait   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| US-A-01 | **Sebagai** Administrator, **saya ingin** melihat semua tiket yang masuk dari seluruh pelapor, **sehingga** tidak ada laporan yang terlewat                               | FR-05        |
| US-A-02 | **Sebagai** Administrator, **saya ingin** memeriksa tiket baru dan mengubah statusnya ke `Under Review`, **sehingga** pelapor mengetahui laporannya sudah ditindaklanjuti | FR-09        |
| US-A-03 | **Sebagai** Administrator, **saya ingin** menetapkan kategori dan prioritas pada tiket, **sehingga** teknisi yang tepat dapat ditugaskan                                  | FR-10, FR-11 |
| US-A-04 | **Sebagai** Administrator, **saya ingin** menugaskan teknisi ke tiket dan mengubah statusnya ke `Assigned`, **sehingga** penanganan dapat dimulai                         | FR-12        |
| US-A-05 | **Sebagai** Administrator, **saya ingin** menutup tiket setelah perbaikan dikonfirmasi pelapor, **sehingga** siklus penanganan tiket selesai secara resmi                 | FR-15, FR-21 |
| US-A-06 | **Sebagai** Administrator, **saya ingin** membuka kembali tiket yang sudah ditutup, **sehingga** laporan dengan masalah lanjutan dapat ditangani ulang                    | FR-16        |
| US-A-07 | **Sebagai** Administrator, **saya ingin** menambahkan catatan internal pada tiket, **sehingga** ada rekaman koordinasi antara admin dan teknisi                           | FR-18        |
| US-A-08 | **Sebagai** Administrator, **saya ingin** mencari dan menyaring tiket berdasarkan status, kategori, prioritas, atau teknisi, **sehingga** pengelolaan tiket lebih efisien | FR-07, FR-08 |

### 5.3 Teknisi

| ID      | User Story                                                                                                                                                                                     | FR Terkait |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| US-T-01 | **Sebagai** Teknisi, **saya ingin** melihat daftar tiket yang ditugaskan kepada saya, **sehingga** saya tahu pekerjaan apa yang harus dikerjakan hari ini                                      | FR-05      |
| US-T-02 | **Sebagai** Teknisi, **saya ingin** melihat detail tiket termasuk deskripsi masalah, lokasi, dan catatan administrator, **sehingga** saya memiliki informasi cukup untuk mengerjakan perbaikan | FR-06      |
| US-T-03 | **Sebagai** Teknisi, **saya ingin** mengubah status tiket menjadi `In Progress` saat saya mulai mengerjakan, **sehingga** pelapor dan administrator mengetahui penanganan sudah dimulai        | FR-13      |
| US-T-04 | **Sebagai** Teknisi, **saya ingin** mengubah status tiket menjadi `Resolved` setelah pekerjaan selesai, **sehingga** pelapor dapat memberikan konfirmasi                                       | FR-14      |
| US-T-05 | **Sebagai** Teknisi, **saya ingin** menambahkan catatan teknis pada tiket, **sehingga** ada dokumentasi tentang tindakan perbaikan yang sudah dilakukan                                        | FR-18      |

### 5.4 Manajer Fasilitas

| ID      | User Story                                                                                                                                                                                                 | FR Terkait |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| US-M-01 | **Sebagai** Manajer Fasilitas, **saya ingin** melihat dashboard dengan jumlah tiket per status, kategori, dan prioritas, **sehingga** saya dapat memantau performa penanganan fasilitas secara keseluruhan | FR-22      |
| US-M-02 | **Sebagai** Manajer Fasilitas, **saya ingin** melihat daftar semua tiket tanpa dapat mengubahnya, **sehingga** saya memiliki visibilitas penuh tanpa risiko perubahan data yang tidak disengaja            | FR-23      |

---

## 6. Acceptance Criteria

### AC untuk US-P-01 (Membuat Tiket Baru)

| ID        | Skenario              | Given                                                | When                                                                                              | Then                                                                                                            |
| --------- | --------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AC-P-01-1 | Tiket berhasil dibuat | Pelapor sudah login dan berada di halaman buat tiket | Pelapor mengisi semua field wajib (judul, deskripsi, lokasi, kategori) dan menekan tombol "Kirim" | Tiket baru tersimpan dengan ID unik otomatis, status `Submitted`, dan Pelapor diarahkan ke halaman detail tiket |
| AC-P-01-2 | Validasi field wajib  | Pelapor berada di halaman buat tiket                 | Pelapor menekan tombol "Kirim" tanpa mengisi salah satu field wajib                               | Sistem menampilkan pesan error pada field yang kosong dan tiket tidak tersimpan                                 |

### AC untuk US-P-02 (Melihat Daftar Tiket)

| ID        | Skenario              | Given                                                | When                                   | Then                                                                                                   |
| --------- | --------------------- | ---------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| AC-P-02-1 | Daftar tiket Pelapor  | Pelapor sudah login                                  | Pelapor membuka halaman "Tiket Saya"   | Sistem hanya menampilkan tiket yang dibuat oleh Pelapor tersebut, beserta status terkini masing-masing |
| AC-P-02-2 | Isolasi antar Pelapor | Pelapor A dan Pelapor B masing-masing memiliki tiket | Pelapor A membuka halaman "Tiket Saya" | Tiket milik Pelapor B tidak muncul dalam daftar Pelapor A                                              |

### AC untuk US-P-05 (Konfirmasi Perbaikan)

| ID        | Skenario                         | Given                                           | When                                 | Then                                                |
| --------- | -------------------------------- | ----------------------------------------------- | ------------------------------------ | --------------------------------------------------- |
| AC-P-05-1 | Tombol konfirmasi tersedia       | Tiket milik Pelapor berstatus `Resolved`        | Pelapor membuka halaman detail tiket | Tombol "Konfirmasi Selesai" muncul dan dapat diklik |
| AC-P-05-2 | Tombol konfirmasi tidak tersedia | Tiket milik Pelapor berstatus selain `Resolved` | Pelapor membuka halaman detail tiket | Tombol "Konfirmasi Selesai" tidak muncul            |

### AC untuk US-A-02 (Review Tiket)

| ID        | Skenario                            | Given                                                           | When                                  | Then                                                                                           |
| --------- | ----------------------------------- | --------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| AC-A-02-1 | Perubahan status ke Under Review    | Ada tiket berstatus `Submitted`                                 | Administrator menekan tombol "Tinjau" | Status tiket berubah menjadi `Under Review` dan perubahan tercatat di riwayat dengan timestamp |
| AC-A-02-2 | Aksi tidak tersedia untuk non-admin | Pelapor atau Teknisi membuka detail tiket berstatus `Submitted` | Pengguna melihat halaman detail       | Tombol "Tinjau" tidak muncul                                                                   |

### AC untuk US-A-04 (Penugasan Teknisi)

| ID        | Skenario                    | Given                                        | When                                                                    | Then                                                                                                 |
| --------- | --------------------------- | -------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| AC-A-04-1 | Berhasil menugaskan teknisi | Ada tiket berstatus `Under Review`           | Administrator memilih Teknisi dari daftar dan menekan tombol "Tugaskan" | Status tiket berubah ke `Assigned`, nama Teknisi tercatat pada tiket, dan perubahan masuk ke riwayat |
| AC-A-04-2 | Satu tiket satu teknisi     | Tiket sudah memiliki Teknisi yang ditugaskan | Administrator ingin menugaskan Teknisi baru                             | Sistem menimpa penugasan lama dengan Teknisi baru yang dipilih                                       |

### AC untuk US-T-03 (Mulai Mengerjakan)

| ID        | Skenario                                | Given                                                 | When                                                                        | Then                                                                    |
| --------- | --------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| AC-T-03-1 | Teknisi mulai mengerjakan               | Tiket ditugaskan kepada Teknisi X (status `Assigned`) | Teknisi X menekan tombol "Mulai Kerjakan"                                   | Status tiket berubah ke `In Progress` dan perubahan tercatat di riwayat |
| AC-T-03-2 | Teknisi lain tidak bisa mengubah status | Tiket ditugaskan ke Teknisi X                         | Teknisi Y (bukan Teknisi X) mencoba menekan tombol aksi pada tiket tersebut | Tombol aksi tidak muncul atau aksi ditolak oleh sistem                  |

### AC untuk US-T-04 (Selesai Mengerjakan)

| ID        | Skenario          | Given                                                     | When                                      | Then                                                                 |
| --------- | ----------------- | --------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| AC-T-04-1 | Pekerjaan selesai | Tiket berstatus `In Progress` dan ditugaskan ke Teknisi X | Teknisi X menekan tombol "Tandai Selesai" | Status tiket berubah ke `Resolved` dan perubahan tercatat di riwayat |

### AC untuk US-A-05 (Menutup Tiket)

| ID        | Skenario                            | Given                                                      | When                                       | Then                                                                                              |
| --------- | ----------------------------------- | ---------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| AC-A-05-1 | Administrator menutup tiket         | Tiket berstatus `Resolved` dan Pelapor sudah mengonfirmasi | Administrator menekan tombol "Tutup Tiket" | Status tiket berubah ke `Closed` dan perubahan tercatat di riwayat                                |
| AC-A-05-2 | Sistem tidak menutup tiket otomatis | Pelapor menekan "Konfirmasi Selesai"                       | Sistem memproses konfirmasi Pelapor        | Status tiket TIDAK berubah langsung ke `Closed`; tetap `Resolved` hingga Administrator menutupnya |

### AC untuk US-M-01 (Dashboard Manajer)

| ID        | Skenario                   | Given                                         | When                              | Then                                                                                                    |
| --------- | -------------------------- | --------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| AC-M-01-1 | Dashboard menampilkan data | Ada tiket dengan berbagai status dan kategori | Manajer membuka halaman Dashboard | Dashboard menampilkan angka jumlah tiket yang dikelompokkan per status, per kategori, dan per prioritas |
| AC-M-01-2 | Dashboard read-only        | Manajer membuka halaman Dashboard             | Manajer mencoba mengklik tiket    | Manajer dapat melihat detail tiket tetapi tidak ada tombol aksi (ubah status, tugaskan, dll.)           |

### AC untuk FR-17 (Log Riwayat Tiket)

| ID        | Skenario                    | Given                                     | When                                          | Then                                                                                      |
| --------- | --------------------------- | ----------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------- |
| AC-FR17-1 | Riwayat tidak dapat dihapus | Ada tiket dengan riwayat perubahan status | Pengguna manapun membuka halaman detail tiket | Tidak ada tombol "Hapus" pada entri riwayat status                                        |
| AC-FR17-2 | Riwayat tercatat otomatis   | Status tiket berubah oleh aktor mana pun  | Perubahan status diproses                     | Entri baru muncul di riwayat dengan: nama aktor, status lama → status baru, dan timestamp |

---

## 7. Traceability Matrix

| User Story | FR Terkait                 | NFR Terkait | BR Terkait   |
| ---------- | -------------------------- | ----------- | ------------ |
| US-P-01    | FR-01, FR-02, FR-03, FR-04 | NFR-06      | BR-01        |
| US-P-02    | FR-05                      | NFR-02      | —            |
| US-P-03    | FR-06, FR-19               | NFR-07      | —            |
| US-P-04    | FR-18                      | —           | BR-07        |
| US-P-05    | FR-20, FR-21               | —           | BR-04        |
| US-P-06    | FR-07, FR-08               | NFR-05      | —            |
| US-A-01    | FR-05                      | NFR-01      | —            |
| US-A-02    | FR-09                      | NFR-01      | BR-02        |
| US-A-03    | FR-10, FR-11               | —           | BR-03        |
| US-A-04    | FR-12                      | —           | BR-03, BR-06 |
| US-A-05    | FR-15, FR-21               | —           | BR-04        |
| US-A-06    | FR-16                      | —           | BR-02        |
| US-A-07    | FR-18                      | —           | BR-07        |
| US-A-08    | FR-07, FR-08               | NFR-05      | —            |
| US-T-01    | FR-05                      | NFR-03      | BR-05        |
| US-T-02    | FR-06                      | —           | —            |
| US-T-03    | FR-13                      | —           | BR-02, BR-05 |
| US-T-04    | FR-14                      | —           | BR-02, BR-05 |
| US-T-05    | FR-18                      | NFR-07      | BR-07        |
| US-M-01    | FR-22                      | NFR-05      | BR-08        |
| US-M-02    | FR-23                      | NFR-01      | BR-08        |

---

## 8. Quality Check

| Kriteria                                                           | Status                 |
| ------------------------------------------------------------------ | ---------------------- |
| Semua Functional Requirement memiliki ID unik                      | ✅ (FR-01 s/d FR-23)   |
| Semua Non-Functional Requirement memiliki ID unik dan kriteria uji | ✅ (NFR-01 s/d NFR-08) |
| Semua Business Rule terdokumentasi                                 | ✅ (BR-01 s/d BR-10)   |
| Semua User Story mencakup 4 aktor                                  | ✅                     |
| Semua Acceptance Criteria dapat diuji (Given/When/Then)            | ✅                     |
| Tidak ada requirement yang bertentangan satu sama lain             | ✅                     |
| Tidak ada fitur di luar scope yang ditambahkan                     | ✅                     |
| Traceability Matrix menghubungkan US ↔ FR ↔ NFR ↔ BR               | ✅                     |

---

## 9. Human Review

> ⚠️ **Mohon diperiksa sebelum melanjutkan ke Skill 04 — Prioritization:**
>
> - Apakah semua **Functional Requirement** sudah lengkap dan tidak ada yang terlewat?
> - Apakah **Business Rules** sudah mencerminkan kebijakan nyata di kampus?
> - Apakah **Acceptance Criteria** cukup spesifik untuk digunakan sebagai dasar pengujian?
> - Apakah ada **User Story** yang perlu ditambahkan atau dihapus?
> - Pertanyaan terbuka dari Skill 02 (format nomor tiket, kategori fasilitas, SLA) masih perlu dijawab untuk penyempurnaan dokumen ini.

---

_Dokumen ini dibuat menggunakan Skill `03-specification` berdasarkan `CASE.md`, `01-inception.md`, dan `02-elicitation.md`._
_Lanjutkan ke **Skill 04 — Prioritization** setelah dokumen ini disetujui._
