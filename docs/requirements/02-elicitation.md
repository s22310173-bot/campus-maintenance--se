# 02 - Elicitation

**Sistem**: Campus Service Request and Maintenance System (Tikerting Laporan Fasilitas Kampus)
**Tanggal**: 2026-06-29
**Skill Digunakan**: `02-elicitation`
**Input**: `CASE.md` + `docs/requirements/01-inception.md`
**Status**: Draft — Menunggu Human Review

---

## 1. Daftar Stakeholder yang Dianalisis

Berdasarkan dokumen Inception, terdapat **4 aktor sistem** yang masing-masing memiliki kebutuhan berbeda:

| Aktor                 | Peran                                                    |
| --------------------- | -------------------------------------------------------- |
| **Pelapor**           | Mahasiswa/dosen yang melaporkan kerusakan fasilitas      |
| **Administrator**     | Staf sarpras yang mengelola dan mendistribusikan laporan |
| **Teknisi**           | Staf teknis lapangan yang mengerjakan perbaikan          |
| **Manajer Fasilitas** | Pimpinan yang memantau performa penanganan               |

---

## 2. Kebutuhan Per Stakeholder

### 2.1 Pelapor

| ID      | Kebutuhan                                                                                                                | Prioritas |
| ------- | ------------------------------------------------------------------------------------------------------------------------ | --------- |
| EL-P-01 | Pelapor dapat membuat tiket laporan baru dengan mengisi judul, deskripsi masalah, lokasi ruangan, dan kategori fasilitas | Tinggi    |
| EL-P-02 | Pelapor dapat melihat daftar tiket yang pernah ia buat beserta status terkininya                                         | Tinggi    |
| EL-P-03 | Pelapor dapat melihat detail tiket secara lengkap termasuk riwayat perubahan status                                      | Tinggi    |
| EL-P-04 | Pelapor dapat menambahkan komentar atau informasi tambahan pada tiket miliknya                                           | Sedang    |
| EL-P-05 | Pelapor dapat mengonfirmasi bahwa perbaikan telah selesai setelah status tiket menjadi `Resolved`                        | Tinggi    |
| EL-P-06 | Pelapor dapat mencari tiket berdasarkan kata kunci atau menyaring berdasarkan status                                     | Sedang    |

### 2.2 Administrator

| ID      | Kebutuhan                                                                                             | Prioritas |
| ------- | ----------------------------------------------------------------------------------------------------- | --------- |
| EL-A-01 | Administrator dapat melihat seluruh tiket masuk dari semua pelapor                                    | Tinggi    |
| EL-A-02 | Administrator dapat memeriksa dan memvalidasi laporan yang baru masuk (`Submitted`)                   | Tinggi    |
| EL-A-03 | Administrator dapat menentukan kategori fasilitas pada tiket (misal: IT, Kelistrikan, AC, Mebel)      | Tinggi    |
| EL-A-04 | Administrator dapat menetapkan tingkat prioritas tiket: `Low`, `Medium`, atau `High`                  | Tinggi    |
| EL-A-05 | Administrator dapat menugaskan teknisi yang sesuai ke tiket yang sudah divalidasi                     | Tinggi    |
| EL-A-06 | Administrator dapat menutup tiket (`Closed`) setelah pelapor mengonfirmasi perbaikan selesai          | Tinggi    |
| EL-A-07 | Administrator dapat membuka kembali tiket yang sudah ditutup jika ada masalah lanjutan                | Sedang    |
| EL-A-08 | Administrator dapat menambahkan catatan internal pada tiket                                           | Sedang    |
| EL-A-09 | Administrator dapat mencari dan menyaring tiket berdasarkan status, kategori, prioritas, atau teknisi | Sedang    |

### 2.3 Teknisi

| ID      | Kebutuhan                                                                                           | Prioritas |
| ------- | --------------------------------------------------------------------------------------------------- | --------- |
| EL-T-01 | Teknisi dapat melihat daftar tiket yang ditugaskan kepadanya                                        | Tinggi    |
| EL-T-02 | Teknisi dapat melihat detail tiket termasuk deskripsi masalah, lokasi, dan catatan administrator    | Tinggi    |
| EL-T-03 | Teknisi dapat mengubah status tiket dari `Assigned` menjadi `In Progress` saat mulai mengerjakan    | Tinggi    |
| EL-T-04 | Teknisi dapat mengubah status tiket dari `In Progress` menjadi `Resolved` setelah pekerjaan selesai | Tinggi    |
| EL-T-05 | Teknisi dapat menambahkan catatan teknis atau laporan hasil perbaikan pada tiket                    | Sedang    |

### 2.4 Manajer Fasilitas

| ID      | Kebutuhan                                                                                               | Prioritas |
| ------- | ------------------------------------------------------------------------------------------------------- | --------- |
| EL-M-01 | Manajer dapat melihat dashboard yang menampilkan jumlah tiket berdasarkan status (aktif, selesai, dll.) | Tinggi    |
| EL-M-02 | Manajer dapat melihat ringkasan statistik seperti total tiket per kategori dan per prioritas            | Sedang    |
| EL-M-03 | Manajer dapat melihat daftar semua tiket (read-only, tanpa aksi edit)                                   | Sedang    |

---

## 3. Kebutuhan Fungsional

Kebutuhan fungsional menggambarkan **apa yang harus dilakukan** oleh sistem.

### 3.1 Manajemen Tiket (Laporan)

| ID    | Deskripsi Kebutuhan                                                                                      | Aktor   |
| ----- | -------------------------------------------------------------------------------------------------------- | ------- |
| FR-01 | Sistem harus memungkinkan Pelapor membuat tiket baru dengan data: judul, deskripsi, lokasi, dan kategori | Pelapor |
| FR-02 | Sistem harus memberikan nomor/ID tiket yang unik secara otomatis saat tiket dibuat                       | Sistem  |
| FR-03 | Sistem harus menyimpan tiket dengan status awal `Submitted`                                              | Sistem  |
| FR-04 | Sistem harus menampilkan daftar tiket sesuai hak akses masing-masing aktor                               | Semua   |
| FR-05 | Sistem harus menampilkan halaman detail tiket beserta seluruh riwayat perubahan status                   | Semua   |
| FR-06 | Sistem harus menyediakan fitur pencarian tiket berdasarkan kata kunci                                    | Semua   |
| FR-07 | Sistem harus menyediakan filter tiket berdasarkan status, kategori, dan prioritas                        | Semua   |

### 3.2 Alur Kerja (Workflow) Tiket

| ID    | Deskripsi Kebutuhan                                                                                  | Aktor         |
| ----- | ---------------------------------------------------------------------------------------------------- | ------------- |
| FR-08 | Sistem harus mengizinkan Administrator mengubah status tiket dari `Submitted` ke `Under Review`      | Administrator |
| FR-09 | Sistem harus mengizinkan Administrator menetapkan kategori dan prioritas pada tiket                  | Administrator |
| FR-10 | Sistem harus mengizinkan Administrator menugaskan Teknisi ke tiket dan mengubah status ke `Assigned` | Administrator |
| FR-11 | Sistem harus mengizinkan Teknisi mengubah status tiket dari `Assigned` ke `In Progress`              | Teknisi       |
| FR-12 | Sistem harus mengizinkan Teknisi mengubah status tiket dari `In Progress` ke `Resolved`              | Teknisi       |
| FR-13 | Sistem harus mengizinkan Administrator menutup tiket (`Closed`)                                      | Administrator |
| FR-14 | Sistem harus mengizinkan Administrator membuka kembali tiket yang sudah `Closed`                     | Administrator |
| FR-15 | Sistem harus mencatat setiap perubahan status secara otomatis ke dalam riwayat tiket                 | Sistem        |

### 3.3 Komentar dan Catatan

| ID    | Deskripsi Kebutuhan                                                                          | Aktor                   |
| ----- | -------------------------------------------------------------------------------------------- | ----------------------- |
| FR-16 | Sistem harus mengizinkan Pelapor, Administrator, dan Teknisi menambahkan komentar pada tiket | Pelapor, Admin, Teknisi |
| FR-17 | Sistem harus menampilkan komentar secara kronologis beserta nama aktor dan waktu komentar    | Semua                   |

### 3.4 Konfirmasi dan Penutupan

| ID    | Deskripsi Kebutuhan                                                                                       | Aktor         |
| ----- | --------------------------------------------------------------------------------------------------------- | ------------- |
| FR-18 | Sistem harus mengizinkan Pelapor memberikan konfirmasi bahwa tiket dengan status `Resolved` sudah selesai | Pelapor       |
| FR-19 | Sistem hanya boleh ditutup oleh Administrator, bukan secara otomatis                                      | Administrator |

### 3.5 Dashboard

| ID    | Deskripsi Kebutuhan                                                                                      | Aktor             |
| ----- | -------------------------------------------------------------------------------------------------------- | ----------------- |
| FR-20 | Sistem harus menampilkan dashboard yang memuat: jumlah tiket per status, per kategori, dan per prioritas | Manajer Fasilitas |
| FR-21 | Sistem harus menampilkan daftar semua tiket dalam mode baca (read-only) untuk Manajer Fasilitas          | Manajer Fasilitas |

---

## 4. Kebutuhan Non-Fungsional

Kebutuhan non-fungsional menggambarkan **bagaimana kualitas sistem** harus berjalan.

| ID     | Kategori             | Deskripsi Kebutuhan                                                                                                                                               |
| ------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-01 | Keamanan             | Setiap aktor hanya dapat mengakses fitur sesuai perannya (role-based access control)                                                                              |
| NFR-02 | Keamanan             | Data tiket hanya dapat dilihat oleh aktor yang berwenang (Pelapor hanya melihat tiket miliknya; Teknisi hanya melihat tiket yang ditugaskan kepadanya) `[ASUMSI]` |
| NFR-03 | Ketersediaan         | Sistem harus dapat diakses kapan saja selama ada koneksi internet `[ASUMSI]`                                                                                      |
| NFR-04 | Kinerja              | Halaman daftar tiket harus dapat dimuat dalam waktu yang wajar pada koneksi normal                                                                                |
| NFR-05 | Kemudahan Penggunaan | Antarmuka harus intuitif dan dapat digunakan tanpa pelatihan khusus oleh semua aktor                                                                              |
| NFR-06 | Keterlacakan         | Setiap perubahan status harus tersimpan permanen dan tidak dapat dihapus                                                                                          |
| NFR-07 | Skalabilitas         | Sistem harus mampu menangani ribuan data tiket teks dalam kapasitas penyimpanan yang tersedia `[ASUMSI]`                                                          |

---

## 5. Asumsi dalam Kebutuhan

| Label      | Pernyataan                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| `[ASUMSI]` | Teknisi hanya dapat melihat tiket yang ditugaskan kepadanya (perlu konfirmasi dari stakeholder)                |
| `[ASUMSI]` | Pelapor masih dapat berkomentar saat status tiket adalah `In Progress` atau `Resolved` (perlu konfirmasi)      |
| `[ASUMSI]` | Jika konfirmasi pelapor ditolak/tidak diberikan, tiket dikembalikan ke status `In Progress` (perlu konfirmasi) |
| `[ASUMSI]` | Format ID tiket menggunakan angka otomatis (format khusus seperti `TKT-2026-0001` belum dikonfirmasi)          |
| `[ASUMSI]` | Kategori fasilitas bersifat tetap (tidak dapat ditambahkan oleh Administrator secara dinamis)                  |

---

## 6. Pertanyaan yang Belum Terjawab

Pertanyaan berikut masih terbuka dan harus diselesaikan sebelum membuat SRS (Skill 03):

| #    | Pertanyaan                                                                                               | Dampak pada Sistem            |
| ---- | -------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Q-01 | Apakah format nomor tiket harus berformat khusus (misal `TKT-2026-0001`) atau cukup ID numerik otomatis? | Desain field nomor tiket      |
| Q-02 | Apa saja kategori fasilitas yang harus tersedia sebagai pilihan tetap?                                   | Desain form dan filter        |
| Q-03 | Apakah ada SLA (batas waktu penanganan) per level prioritas (Low/Medium/High)?                           | Perlu fitur indikator waktu   |
| Q-04 | Apakah Pelapor boleh berkomentar saat status tiket sudah `In Progress` atau `Resolved`?                  | Aturan hak akses komentar     |
| Q-05 | Jika Pelapor menolak konfirmasi perbaikan, status tiket kembali ke `Assigned` atau `In Progress`?        | Alur re-open workflow         |
| Q-06 | Apakah Teknisi hanya melihat tiket yang ditugaskan kepadanya saja?                                       | Desain halaman daftar Teknisi |
| Q-07 | Apakah diperlukan notifikasi in-app (bukan email) saat status tiket berubah?                             | Perlu komponen notifikasi     |

---

## 7. Quality Check

| Kriteria                                                                 | Status |
| ------------------------------------------------------------------------ | ------ |
| Semua 4 aktor memiliki daftar kebutuhan                                  | ✅     |
| Kebutuhan fungsional ditulis dengan jelas dan tidak bertentangan         | ✅     |
| Kebutuhan non-fungsional mencakup aspek keamanan, kinerja, dan kemudahan | ✅     |
| Semua asumsi telah ditandai dengan label `[ASUMSI]`                      | ✅     |
| Pertanyaan terbuka terdokumentasi dengan dampak yang jelas               | ✅     |
| Tidak ada kebutuhan yang dibuat di luar studi kasus                      | ✅     |

---

## 8. Human Review

> ⚠️ **Mohon diperiksa sebelum melanjutkan ke Skill 03 — Specification (SRS):**
>
> - Apakah seluruh kebutuhan per aktor sudah mencerminkan kebutuhan nyata stakeholder kampus?
> - Apakah ada kebutuhan yang **terlewat** atau **tidak relevan** dari daftar di atas?
> - Jawab pertanyaan terbuka pada **Bagian 6** agar SRS dapat dibuat dengan lengkap.
> - Apakah kebutuhan non-fungsional (NFR) sudah sesuai dengan kapasitas infrastruktur yang digunakan?

---

_Dokumen ini dibuat menggunakan Skill `02-elicitation` berdasarkan `CASE.md` dan `01-inception.md`._
_Lanjutkan ke **Skill 03 — Specification (SRS)** setelah dokumen ini disetujui._
