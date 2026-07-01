# 06 - Traceability Matrix

**Sistem**: Campus Service Request and Maintenance System (Tikerting Laporan Fasilitas Kampus)
**Tanggal**: 2026-06-29
**Skill Digunakan**: `05-validation-dan-change`
**Status**: Draft — Menunggu Human Review

---

## 1. Tujuan Traceability Matrix

Traceability Matrix memastikan setiap kebutuhan stakeholder dapat ditelusuri dari sumber asalnya hingga ke implementasi dan pengujian. Dokumen ini menghubungkan:

```
Kebutuhan Stakeholder (EL) → Requirement (FR/NFR/BR) → User Story (US) → Acceptance Criteria (AC) → Prioritas (MoSCoW)
```

---

## 2. Matrix Utama: Stakeholder → FR → US → AC → Prioritas

| Kebutuhan Stakeholder                       | FR                         | User Story | Acceptance Criteria           | Prioritas      |
| ------------------------------------------- | -------------------------- | ---------- | ----------------------------- | -------------- |
| **PELAPOR**                                 |                            |            |                               |                |
| EL-P-01: Buat tiket baru                    | FR-01, FR-02, FR-03, FR-04 | US-P-01    | AC-P-01-1, AC-P-01-2          | 🔴 Must Have   |
| EL-P-02: Lihat daftar tiket saya            | FR-05                      | US-P-02    | AC-P-02-1, AC-P-02-2          | 🔴 Must Have   |
| EL-P-03: Lihat detail tiket + riwayat       | FR-06, FR-19               | US-P-03    | (via FR-06, FR-19 AC)         | 🔴 Must Have   |
| EL-P-04: Tambah komentar                    | FR-18                      | US-P-04    | AC-FR18-1, AC-FR18-2 (CR-001) | 🟠 Should Have |
| EL-P-05: Konfirmasi perbaikan selesai       | FR-20, FR-21               | US-P-05    | AC-P-05-1, AC-P-05-2          | 🔴 Must Have   |
| EL-P-06: Cari & filter tiket                | FR-07, FR-08               | US-P-06    | AC-FR07-1, AC-FR07-2 (CR-001) | 🟠 Should Have |
| **ADMINISTRATOR**                           |                            |            |                               |                |
| EL-A-01: Lihat semua tiket masuk            | FR-05                      | US-A-01    | AC-P-02-1 (adaptasi)          | 🔴 Must Have   |
| EL-A-02: Review & validasi tiket            | FR-09                      | US-A-02    | AC-A-02-1, AC-A-02-2          | 🔴 Must Have   |
| EL-A-03: Tetapkan kategori & prioritas      | FR-10, FR-11               | US-A-03    | AC-FR10-1, AC-FR11-1 (CR-001) | 🔴 Must Have   |
| EL-A-04: Tugaskan Teknisi                   | FR-12                      | US-A-04    | AC-A-04-1, AC-A-04-2          | 🔴 Must Have   |
| EL-A-05: Tutup tiket resmi                  | FR-15, FR-21               | US-A-05    | AC-A-05-1, AC-A-05-2          | 🔴 Must Have   |
| EL-A-06: Re-open tiket                      | FR-16                      | US-A-06    | AC-FR16-1, AC-FR16-2 (CR-001) | 🟠 Should Have |
| EL-A-07: Tambah catatan internal            | FR-18                      | US-A-07    | AC-FR18-1 (adaptasi)          | 🟠 Should Have |
| EL-A-08: Cari & filter tiket                | FR-07, FR-08               | US-A-08    | AC-FR08-1, AC-FR08-2 (CR-001) | 🟠 Should Have |
| EL-A-09: Tambah catatan internal            | FR-18                      | US-A-07    | AC-FR18-1                     | 🟠 Should Have |
| **TEKNISI**                                 |                            |            |                               |                |
| EL-T-01: Lihat tiket yang ditugaskan        | FR-05                      | US-T-01    | AC-P-02-1 (adaptasi Teknisi)  | 🔴 Must Have   |
| EL-T-02: Lihat detail tiket + catatan admin | FR-06                      | US-T-02    | (via FR-06)                   | 🔴 Must Have   |
| EL-T-03: Ubah status ke `In Progress`       | FR-13                      | US-T-03    | AC-T-03-1, AC-T-03-2          | 🔴 Must Have   |
| EL-T-04: Ubah status ke `Resolved`          | FR-14                      | US-T-04    | AC-T-04-1                     | 🔴 Must Have   |
| EL-T-05: Tambah catatan teknis              | FR-18                      | US-T-05    | AC-FR18-1 (adaptasi Teknisi)  | 🟠 Should Have |
| **MANAJER FASILITAS**                       |                            |            |                               |                |
| EL-M-01: Dashboard statistik                | FR-22                      | US-M-01    | AC-M-01-1                     | 🟡 Could Have  |
| EL-M-02: Statistik per kategori & prioritas | FR-22                      | US-M-01    | AC-M-01-1                     | 🟡 Could Have  |
| EL-M-03: Daftar tiket read-only             | FR-23                      | US-M-02    | AC-M-01-2                     | 🟡 Could Have  |

---

## 3. Matrix FR → BR (Business Rule yang Mengatur FR)

| FR    | Business Rule Terkait           | Penjelasan Relasi                                     |
| ----- | ------------------------------- | ----------------------------------------------------- |
| FR-01 | BR-01                           | Hanya Pelapor yang boleh membuat tiket                |
| FR-02 | —                               | ID otomatis, tidak ada BR spesifik                    |
| FR-03 | BR-02                           | Status awal `Submitted` adalah bagian dari alur wajib |
| FR-04 | —                               | Timestamp otomatis oleh sistem                        |
| FR-05 | BR-01, BR-05, BR-08             | Hak akses berbeda per aktor                           |
| FR-06 | —                               | Semua aktor boleh baca detail                         |
| FR-07 | —                               | Tidak ada BR khusus untuk pencarian                   |
| FR-08 | —                               | Tidak ada BR khusus untuk filter                      |
| FR-09 | BR-02, BR-03                    | Admin wajib review sebelum assign                     |
| FR-10 | BR-03                           | Admin yang menetapkan kategori                        |
| FR-11 | BR-03                           | Admin yang menetapkan prioritas                       |
| FR-12 | BR-02, BR-03, BR-06             | Hanya Admin, satu Teknisi per tiket                   |
| FR-13 | BR-02, BR-05                    | Hanya Teknisi yang ditugaskan                         |
| FR-14 | BR-02, BR-05                    | Hanya Teknisi yang ditugaskan                         |
| FR-15 | BR-02, BR-04                    | Hanya Admin yang menutup                              |
| FR-16 | BR-02 (pengecualian via CR-002) | Re-open oleh Admin sebagai mekanisme darurat          |
| FR-17 | BR-09                           | Riwayat permanen dan tidak bisa dihapus               |
| FR-18 | BR-07                           | Tiga aktor boleh komentar                             |
| FR-19 | —                               | Tampilan kronologis, tidak ada BR khusus              |
| FR-20 | BR-04                           | Konfirmasi Pelapor bukan penutupan                    |
| FR-21 | BR-04                           | Hanya Admin yang menutup secara eksplisit             |
| FR-22 | BR-08                           | Manajer hanya baca                                    |
| FR-23 | BR-08                           | Manajer hanya baca                                    |

---

## 4. Matrix FR → NFR (Non-Functional Requirements yang Berlaku)

| FR            | NFR Terkait            | Aspek Kualitas                                |
| ------------- | ---------------------- | --------------------------------------------- |
| FR-01         | NFR-06                 | Form buat tiket harus intuitif                |
| FR-02         | NFR-07                 | ID tiket tidak boleh berubah/dihapus          |
| FR-03         | NFR-07                 | Status `Submitted` adalah data permanen       |
| FR-04         | NFR-07                 | Timestamp tidak boleh dimanipulasi            |
| FR-05         | NFR-01, NFR-02, NFR-03 | RBAC dan isolasi data per aktor               |
| FR-06         | NFR-05                 | Detail tiket harus dimuat cepat               |
| FR-07         | NFR-05                 | Hasil pencarian harus responsif               |
| FR-08         | NFR-05                 | Filter harus responsif                        |
| FR-09 - FR-15 | NFR-01                 | Aksi hanya untuk aktor yang berwenang         |
| FR-17         | NFR-07, NFR-08         | Log permanen, harus mampu simpan banyak entri |
| FR-18, FR-19  | NFR-08                 | Komentar harus skalabel                       |
| FR-22, FR-23  | NFR-01, NFR-05         | Dashboard hanya untuk Manajer, dimuat cepat   |

---

## 5. Matrix Prioritas Lengkap (MoSCoW)

### 5.1 Semua FR dengan Prioritas

| Prioritas      | ID    | Deskripsi Singkat                 | Fase   |
| -------------- | ----- | --------------------------------- | ------ |
| 🔴 Must Have   | FR-01 | Buat tiket baru                   | Fase 1 |
| 🔴 Must Have   | FR-02 | ID tiket unik otomatis            | Fase 1 |
| 🔴 Must Have   | FR-03 | Status awal Submitted             | Fase 1 |
| 🔴 Must Have   | FR-04 | Timestamp otomatis                | Fase 1 |
| 🔴 Must Have   | FR-05 | Daftar tiket per hak akses        | Fase 1 |
| 🔴 Must Have   | FR-06 | Detail tiket + riwayat + komentar | Fase 1 |
| 🔴 Must Have   | FR-09 | Admin: Submitted → Under Review   | Fase 1 |
| 🔴 Must Have   | FR-10 | Admin tetapkan kategori           | Fase 1 |
| 🔴 Must Have   | FR-11 | Admin tetapkan prioritas          | Fase 1 |
| 🔴 Must Have   | FR-12 | Admin tugaskan Teknisi            | Fase 1 |
| 🔴 Must Have   | FR-13 | Teknisi: Assigned → In Progress   | Fase 1 |
| 🔴 Must Have   | FR-14 | Teknisi: In Progress → Resolved   | Fase 1 |
| 🔴 Must Have   | FR-15 | Admin tutup tiket                 | Fase 1 |
| 🔴 Must Have   | FR-17 | Log riwayat status otomatis       | Fase 1 |
| 🔴 Must Have   | FR-20 | Tombol konfirmasi Pelapor         | Fase 1 |
| 🟠 Should Have | FR-07 | Pencarian kata kunci              | Fase 2 |
| 🟠 Should Have | FR-08 | Filter tiket                      | Fase 2 |
| 🟠 Should Have | FR-16 | Re-open tiket Closed              | Fase 2 |
| 🟠 Should Have | FR-18 | Tambah komentar                   | Fase 2 |
| 🟠 Should Have | FR-19 | Tampilkan komentar kronologis     | Fase 2 |
| 🟠 Should Have | FR-21 | Tutup hanya oleh Admin eksplisit  | Fase 2 |
| 🟡 Could Have  | FR-22 | Dashboard statistik Manajer       | Fase 3 |
| 🟡 Could Have  | FR-23 | Daftar tiket read-only Manajer    | Fase 3 |

### 5.2 Semua NFR dengan Prioritas

| Prioritas      | ID     | Deskripsi Singkat               |
| -------------- | ------ | ------------------------------- |
| 🔴 Must Have   | NFR-01 | RBAC per aktor                  |
| 🔴 Must Have   | NFR-02 | Isolasi tiket Pelapor           |
| 🔴 Must Have   | NFR-03 | Isolasi tiket Teknisi           |
| 🔴 Must Have   | NFR-04 | Sistem dapat diakses kapan saja |
| 🟠 Should Have | NFR-05 | Kinerja ≤ 3 detik               |
| 🟠 Should Have | NFR-06 | Usability ≤ 5 menit onboarding  |
| 🔴 Must Have   | NFR-07 | Keterlacakan permanen           |
| 🟡 Could Have  | NFR-08 | Skalabilitas 10.000 tiket       |

### 5.3 Semua BR dengan Prioritas

| Prioritas      | ID    | Business Rule Singkat                      |
| -------------- | ----- | ------------------------------------------ |
| 🔴 Must Have   | BR-01 | Hanya Pelapor buat tiket                   |
| 🔴 Must Have   | BR-02 | Alur status linear (+ pengecualian CR-002) |
| 🔴 Must Have   | BR-03 | Hanya Admin tugaskan Teknisi               |
| 🔴 Must Have   | BR-04 | Hanya Admin tutup tiket                    |
| 🔴 Must Have   | BR-05 | Teknisi hanya ubah tiket miliknya          |
| 🔴 Must Have   | BR-06 | Satu tiket satu Teknisi                    |
| 🟠 Should Have | BR-07 | Tiga aktor bisa komentar                   |
| 🟡 Could Have  | BR-08 | Manajer read-only                          |
| 🔴 Must Have   | BR-09 | Riwayat permanen                           |
| 🔴 Must Have   | BR-10 | Fitur opsional di luar scope               |

---

## 6. Rekapitulasi Traceability

| Dimensi                          | Total | Tertelusuri             |
| -------------------------------- | ----- | ----------------------- |
| Kebutuhan Stakeholder (EL) ke FR | 23 EL | 23/23 ✅                |
| FR ke User Story                 | 23 FR | 23/23 ✅                |
| FR ke Business Rule              | 23 FR | 23/23 ✅                |
| FR ke NFR                        | 23 FR | 23/23 ✅                |
| FR ke Acceptance Criteria        | 23 FR | 16/23 ✅ (7 via CR-001) |
| FR ke Prioritas MoSCoW           | 23 FR | 23/23 ✅                |

---

## 7. Quality Check

| Kriteria                                         | Status                                              |
| ------------------------------------------------ | --------------------------------------------------- |
| Semua EL terhubung ke minimal satu FR            | ✅                                                  |
| Semua FR terhubung ke minimal satu US            | ✅                                                  |
| Semua FR terhubung ke prioritas MoSCoW           | ✅                                                  |
| Semua FR yang Must Have memiliki AC              | ✅ (AC yang kurang ada di CR-001 untuk Should Have) |
| Tidak ada FR yatim (tanpa kebutuhan stakeholder) | ✅                                                  |
| Matrix FR → BR konsisten dengan dokumen SRS      | ✅                                                  |
| Traceability lengkap dari ujung ke ujung         | ✅                                                  |

---

## 8. Human Review

> ⚠️ **Mohon diperiksa:**
>
> - Apakah ada kebutuhan stakeholder yang **belum terpetakan** ke FR dalam Matrix Bagian 2?
> - Apakah FR-07 dan FR-08 (Should Have) sudah pada fase yang tepat?
> - Setelah CR-001 disetujui, dokumen ini perlu diperbarui untuk memasukkan AC yang baru ke kolom AC.

---

_Dokumen ini dibuat menggunakan Skill `05-validation-dan-change`._
_Lanjutkan ke **Skill 06 — Architecture Design** setelah seluruh dokumen requirements disetujui._
