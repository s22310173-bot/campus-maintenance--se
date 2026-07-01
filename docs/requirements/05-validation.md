# 05 - Validation Report

**Sistem**: Campus Service Request and Maintenance System (Tikerting Laporan Fasilitas Kampus)
**Tanggal**: 2026-06-29
**Skill Digunakan**: `05-validation-dan-change`
**Input**: `03-specification.md` + `04-prioritization.md`
**Status**: Draft — Menunggu Human Review

---

## 1. Tujuan Validasi

Dokumen ini memverifikasi bahwa seluruh requirement dalam SRS (Skill 03) memenuhi empat kriteria kualitas:

| Kriteria         | Definisi                                                          |
| ---------------- | ----------------------------------------------------------------- |
| **Lengkap**      | Requirement memiliki ID, deskripsi jelas, dan aktor yang terlibat |
| **Konsisten**    | Tidak ada requirement yang saling bertentangan                    |
| **Dapat Diuji**  | Requirement memiliki Acceptance Criteria yang terukur             |
| **Sesuai Scope** | Requirement tidak melampaui batasan yang ditetapkan di Inception  |

---

## 2. Validasi Kelengkapan Requirement

### 2.1 Functional Requirements (FR)

| ID    | Deskripsi Singkat                         | ID Ada? | Aktor Ada? | AC Ada?                  | Status Validasi |
| ----- | ----------------------------------------- | ------- | ---------- | ------------------------ | --------------- |
| FR-01 | Buat tiket baru                           | ✅      | ✅ Pelapor | ✅ AC-P-01-1, AC-P-01-2  | ✅ Valid        |
| FR-02 | ID tiket unik otomatis                    | ✅      | ✅ Sistem  | ✅ (tergabung AC-P-01-1) | ✅ Valid        |
| FR-03 | Status awal `Submitted`                   | ✅      | ✅ Sistem  | ✅ (tergabung AC-P-01-1) | ✅ Valid        |
| FR-04 | Timestamp pembuatan tiket                 | ✅      | ✅ Sistem  | ✅ (tergabung AC-P-01-1) | ✅ Valid        |
| FR-05 | Daftar tiket per hak akses                | ✅      | ✅ Semua   | ✅ AC-P-02-1, AC-P-02-2  | ✅ Valid        |
| FR-06 | Detail tiket + riwayat + komentar         | ✅      | ✅ Semua   | ✅ (referensi AC-T-02)   | ✅ Valid        |
| FR-07 | Pencarian kata kunci                      | ✅      | ✅ Semua   | ⚠️ AC belum spesifik     | ⚠️ Perlu AC     |
| FR-08 | Filter status/kategori/prioritas          | ✅      | ✅ Semua   | ⚠️ AC belum spesifik     | ⚠️ Perlu AC     |
| FR-09 | Admin: `Submitted` → `Under Review`       | ✅      | ✅ Admin   | ✅ AC-A-02-1, AC-A-02-2  | ✅ Valid        |
| FR-10 | Admin tetapkan kategori                   | ✅      | ✅ Admin   | ⚠️ AC belum spesifik     | ⚠️ Perlu AC     |
| FR-11 | Admin tetapkan prioritas                  | ✅      | ✅ Admin   | ⚠️ AC belum spesifik     | ⚠️ Perlu AC     |
| FR-12 | Admin tugaskan Teknisi → `Assigned`       | ✅      | ✅ Admin   | ✅ AC-A-04-1, AC-A-04-2  | ✅ Valid        |
| FR-13 | Teknisi: `Assigned` → `In Progress`       | ✅      | ✅ Teknisi | ✅ AC-T-03-1, AC-T-03-2  | ✅ Valid        |
| FR-14 | Teknisi: `In Progress` → `Resolved`       | ✅      | ✅ Teknisi | ✅ AC-T-04-1             | ✅ Valid        |
| FR-15 | Admin tutup tiket `Closed`                | ✅      | ✅ Admin   | ✅ AC-A-05-1             | ✅ Valid        |
| FR-16 | Admin buka kembali tiket `Closed`         | ✅      | ✅ Admin   | ⚠️ AC belum spesifik     | ⚠️ Perlu AC     |
| FR-17 | Log riwayat otomatis                      | ✅      | ✅ Sistem  | ✅ AC-FR17-1, AC-FR17-2  | ✅ Valid        |
| FR-18 | Tambah komentar (3 aktor)                 | ✅      | ✅ Multi   | ⚠️ AC belum spesifik     | ⚠️ Perlu AC     |
| FR-19 | Tampilkan komentar kronologis             | ✅      | ✅ Semua   | ⚠️ AC belum spesifik     | ⚠️ Perlu AC     |
| FR-20 | Tombol konfirmasi Pelapor saat `Resolved` | ✅      | ✅ Pelapor | ✅ AC-P-05-1, AC-P-05-2  | ✅ Valid        |
| FR-21 | Tiket hanya ditutup Admin eksplisit       | ✅      | ✅ Admin   | ✅ AC-A-05-2             | ✅ Valid        |
| FR-22 | Dashboard statistik Manajer               | ✅      | ✅ Manajer | ✅ AC-M-01-1             | ✅ Valid        |
| FR-23 | Daftar tiket read-only Manajer            | ✅      | ✅ Manajer | ✅ AC-M-01-2             | ✅ Valid        |

> **Temuan**: FR-07, FR-08, FR-10, FR-11, FR-16, FR-18, FR-19 memerlukan Acceptance Criteria yang lebih spesifik. Dicatat sebagai Change Request CR-001.

### 2.2 Non-Functional Requirements (NFR)

| ID     | Kategori                         | Kriteria Uji Ada? | Status Validasi |
| ------ | -------------------------------- | ----------------- | --------------- |
| NFR-01 | Keamanan — RBAC                  | ✅                | ✅ Valid        |
| NFR-02 | Keamanan — isolasi tiket Pelapor | ✅                | ✅ Valid        |
| NFR-03 | Keamanan — isolasi tiket Teknisi | ✅                | ✅ Valid        |
| NFR-04 | Ketersediaan                     | ✅                | ✅ Valid        |
| NFR-05 | Kinerja ≤ 3 detik                | ✅                | ✅ Valid        |
| NFR-06 | Usability ≤ 5 menit              | ✅                | ✅ Valid        |
| NFR-07 | Keterlacakan permanen            | ✅                | ✅ Valid        |
| NFR-08 | Skalabilitas 10.000 tiket        | ✅                | ✅ Valid        |

### 2.3 Business Rules (BR)

| ID    | Business Rule Singkat             | Konsisten dengan FR? | Status Validasi |
| ----- | --------------------------------- | -------------------- | --------------- |
| BR-01 | Hanya Pelapor buat tiket          | ✅ FR-01             | ✅ Valid        |
| BR-02 | Alur status harus urut            | ✅ FR-09 s/d FR-15   | ✅ Valid        |
| BR-03 | Hanya Admin tugaskan Teknisi      | ✅ FR-12             | ✅ Valid        |
| BR-04 | Hanya Admin tutup tiket           | ✅ FR-15, FR-21      | ✅ Valid        |
| BR-05 | Teknisi hanya ubah tiket miliknya | ✅ FR-13, FR-14      | ✅ Valid        |
| BR-06 | Satu tiket satu Teknisi           | ✅ FR-12             | ✅ Valid        |
| BR-07 | Tiga aktor bisa komentar          | ✅ FR-18             | ✅ Valid        |
| BR-08 | Manajer read-only                 | ✅ FR-23             | ✅ Valid        |
| BR-09 | Riwayat permanen                  | ✅ FR-17, NFR-07     | ✅ Valid        |
| BR-10 | Fitur opsional di luar scope      | ✅ Sesuai CASE.md    | ✅ Valid        |

---

## 3. Pemeriksaan Konsistensi

### 3.1 Potensi Konflik yang Ditemukan

| ID Temuan | FR yang Berpotensi Konflik | Analisis                                                                                                                                                             | Resolusi                                                                                                                                       |
| --------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| CONF-01   | FR-20 vs FR-21             | FR-20 menyatakan Pelapor mengonfirmasi saat `Resolved`, FR-21 menyatakan tiket ditutup hanya oleh Admin. Keduanya tidak bertentangan tetapi perlu urutan yang jelas. | Urutan: Pelapor konfirmasi → Admin tutup. Tidak ada konflik. ✅                                                                                |
| CONF-02   | FR-16 vs BR-02             | FR-16 memungkinkan tiket `Closed` dibuka kembali, sementara BR-02 menyatakan alur status harus berurutan.                                                            | FR-16 dikecualikan dari alur linear sebagai mekanisme re-open yang bersifat darurat. Perlu catatan eksplisit di BR-02. Dicatat sebagai CR-002. |
| CONF-03   | FR-05 vs NFR-02 & NFR-03   | FR-05 menyatakan sistem menampilkan tiket sesuai hak akses; NFR-02 dan NFR-03 mendetailkan batasan per aktor.                                                        | Konsisten. NFR-02 dan NFR-03 merupakan penjabaran detail dari FR-05. ✅                                                                        |

### 3.2 Requirement yang Ambigu

| ID Temuan | Requirement | Ambiguitas                                                                                     | Rekomendasi                                                                                         |
| --------- | ----------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| AMB-01    | FR-18       | Frasa "di semua tahap status" perlu dikonfirmasi — apakah Pelapor bisa komentar saat `Closed`? | Tambahkan batasan: Pelapor hanya bisa komentar selama tiket belum `Closed`. Dicatat sebagai CR-003. |
| AMB-02    | FR-07       | "Kata kunci pada judul atau deskripsi" — apakah pencarian juga mencakup komentar dan catatan?  | Klarifikasi: pencarian hanya pada judul dan deskripsi untuk fase pertama. ✅                        |
| AMB-03    | NFR-05      | Threshold "≤ 3 detik" perlu spesifikasi kondisi jaringan yang jelas                            | Tambahkan: diukur pada koneksi broadband ≥ 10 Mbps. ✅                                              |

---

## 4. Validasi Testability (Dapat Diuji)

| ID     | Dapat Diuji? | Metode Pengujian                                               |
| ------ | ------------ | -------------------------------------------------------------- |
| FR-01  | ✅           | Functional test: isi form & submit                             |
| FR-02  | ✅           | Verifikasi ID unik di database                                 |
| FR-03  | ✅           | Cek status tiket setelah dibuat                                |
| FR-04  | ✅           | Cek timestamp tiket di detail view                             |
| FR-05  | ✅           | Login per aktor, bandingkan daftar yang tampil                 |
| FR-06  | ✅           | Buka detail tiket, verifikasi semua komponen hadir             |
| FR-07  | ✅           | Input kata kunci, verifikasi hasil yang relevan muncul         |
| FR-08  | ✅           | Pilih filter, verifikasi hanya tiket sesuai filter yang tampil |
| FR-09  | ✅           | Admin klik "Tinjau", cek status berubah                        |
| FR-10  | ✅           | Admin pilih kategori, cek tersimpan di detail tiket            |
| FR-11  | ✅           | Admin pilih prioritas, cek tersimpan di detail tiket           |
| FR-12  | ✅           | Admin tugaskan Teknisi, cek status & nama Teknisi di tiket     |
| FR-13  | ✅           | Teknisi klik "Mulai", cek status `In Progress`                 |
| FR-14  | ✅           | Teknisi klik "Selesai", cek status `Resolved`                  |
| FR-15  | ✅           | Admin klik "Tutup", cek status `Closed`                        |
| FR-16  | ✅           | Admin klik "Buka Kembali", cek status berubah                  |
| FR-17  | ✅           | Setiap aksi status, verifikasi entri baru di log riwayat       |
| FR-18  | ✅           | Input komentar, verifikasi tersimpan dan tampil                |
| FR-19  | ✅           | Tambah beberapa komentar, verifikasi urutan kronologis         |
| FR-20  | ✅           | Cek tombol konfirmasi hanya muncul saat `Resolved`             |
| FR-21  | ✅           | Konfirmasi Pelapor tidak langsung menutup tiket                |
| FR-22  | ✅           | Buka dashboard, bandingkan angka dengan data aktual            |
| FR-23  | ✅           | Login Manajer, verifikasi tidak ada tombol aksi                |
| NFR-01 | ✅           | Uji akses silang antar peran                                   |
| NFR-02 | ✅           | Akses URL tiket Pelapor lain secara langsung                   |
| NFR-03 | ✅           | Login Teknisi, verifikasi hanya tiket yang ditugaskan tampil   |
| NFR-05 | ✅           | Ukur waktu muat dengan browser DevTools                        |
| NFR-07 | ✅           | Cari tombol hapus di riwayat — harus tidak ada                 |

---

## 5. Ringkasan Hasil Validasi

| Aspek                       | Total | Valid       | Perlu Perbaikan         |
| --------------------------- | ----- | ----------- | ----------------------- |
| Functional Requirements     | 23    | 16          | 7 (butuh AC tambahan)   |
| Non-Functional Requirements | 8     | 8           | 0                       |
| Business Rules              | 10    | 10          | 0                       |
| Konflik ditemukan           | —     | 1 (CONF-02) | Perlu klarifikasi BR-02 |
| Ambiguitas ditemukan        | —     | 3           | CR-003 untuk FR-18      |

---

## 6. Quality Check

| Kriteria                                                   | Status |
| ---------------------------------------------------------- | ------ |
| Semua FR diperiksa kelengkapannya                          | ✅     |
| Semua NFR diperiksa kriteria ujinya                        | ✅     |
| Semua BR diperiksa konsistensinya                          | ✅     |
| Potensi konflik teridentifikasi dan dianalisis             | ✅     |
| Ambiguitas terdokumentasi dengan rekomendasi               | ✅     |
| Semua requirement dapat diuji                              | ✅     |
| Change Request terdokumentasi (lihat 05-change-request.md) | ✅     |

---

## 7. Human Review

> ⚠️ **Mohon diperiksa:**
>
> - Apakah resolusi untuk **CONF-02** (re-open tiket vs alur status linear) sudah sesuai kebijakan bisnis kampus?
> - Apakah batasan komentar pada **AMB-01** (Pelapor tidak bisa komentar saat `Closed`) sudah sesuai?
> - Review **Change Requests** pada dokumen `05-change-request.md` dan setujui/tolak setiap CR.

---

_Dokumen ini dibuat menggunakan Skill `05-validation-dan-change`._
_Dokumen terkait: `05-change-request.md` dan `06-traceability-matrix.md`._
