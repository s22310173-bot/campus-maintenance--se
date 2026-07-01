# 04 - Prioritization

**Sistem**: Campus Service Request and Maintenance System (Tikerting Laporan Fasilitas Kampus)
**Tanggal**: 2026-06-29
**Skill Digunakan**: `04-prioritization`
**Input**: `docs/requirements/03-specification.md`
**Metode**: MoSCoW (Must Have / Should Have / Could Have / Won't Have)
**Status**: Draft — Menunggu Human Review

---

## 1. Dasar Analisis Prioritas

Setiap requirement dianalisis berdasarkan tiga dimensi:

| Dimensi                   | Keterangan                                               |
| ------------------------- | -------------------------------------------------------- |
| **Nilai Bisnis**          | Seberapa besar dampaknya terhadap tujuan inti sistem     |
| **Urgensi**               | Apakah sistem bisa berjalan tanpa requirement ini        |
| **Kebutuhan Stakeholder** | Apakah requirement ini diminta langsung oleh aktor utama |

### Definisi Kategori MoSCoW

| Kategori           | Definisi                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| 🔴 **Must Have**   | Wajib ada. Sistem tidak dapat berfungsi tanpa ini. Menjadi bagian dari MVP (Minimum Viable Product) |
| 🟠 **Should Have** | Penting, namun sistem masih bisa berjalan tanpanya. Dijadwalkan segera setelah Must Have selesai    |
| 🟡 **Could Have**  | Berguna dan diinginkan, tetapi dapat ditunda tanpa dampak signifikan                                |
| ⚫ **Won't Have**  | Disepakati tidak dikerjakan pada fase ini. Dicatat untuk pertimbangan fase berikutnya               |

---

## 2. Prioritas Functional Requirements (FR)

### 2.1 Ringkasan Prioritas FR

| Kategori       | Jumlah FR | ID                                                                                                      |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| 🔴 Must Have   | 15        | FR-01, FR-02, FR-03, FR-04, FR-05, FR-06, FR-09, FR-10, FR-11, FR-12, FR-13, FR-14, FR-15, FR-17, FR-20 |
| 🟠 Should Have | 6         | FR-07, FR-08, FR-16, FR-18, FR-19, FR-21                                                                |
| 🟡 Could Have  | 2         | FR-22, FR-23                                                                                            |
| ⚫ Won't Have  | 0         | —                                                                                                       |

### 2.2 Detail Prioritas FR

| ID    | Deskripsi Singkat                                               | Prioritas      | Alasan                                                                          |
| ----- | --------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| FR-01 | Pelapor membuat tiket baru (judul, deskripsi, lokasi, kategori) | 🔴 Must Have   | Fungsi inti utama sistem; tanpa ini sistem tidak memiliki nilai                 |
| FR-02 | Sistem membuat ID tiket unik otomatis                           | 🔴 Must Have   | Setiap tiket harus dapat diidentifikasi secara unik                             |
| FR-03 | Status awal tiket = `Submitted`                                 | 🔴 Must Have   | Merupakan titik awal alur workflow yang wajib                                   |
| FR-04 | Sistem mencatat timestamp pembuatan tiket                       | 🔴 Must Have   | Keterlacakan waktu adalah kebutuhan dasar sistem tikerting                      |
| FR-05 | Daftar tiket sesuai hak akses per aktor                         | 🔴 Must Have   | Setiap aktor harus bisa melihat tiket yang relevan; dasar operasional           |
| FR-06 | Halaman detail tiket + riwayat status + komentar                | 🔴 Must Have   | Transparansi status adalah tujuan utama sistem                                  |
| FR-07 | Pencarian tiket berdasarkan kata kunci                          | 🟠 Should Have | Memudahkan pengelolaan ketika jumlah tiket bertambah banyak                     |
| FR-08 | Filter tiket (status, kategori, prioritas)                      | 🟠 Should Have | Penting untuk efisiensi Administrator, bisa ditambah setelah MVP                |
| FR-09 | Admin ubah status `Submitted` → `Under Review`                  | 🔴 Must Have   | Langkah pertama workflow Administrator; wajib untuk alur berjalan               |
| FR-10 | Admin tetapkan kategori fasilitas                               | 🔴 Must Have   | Klasifikasi tiket wajib sebelum penugasan teknisi                               |
| FR-11 | Admin tetapkan prioritas (Low/Medium/High)                      | 🔴 Must Have   | Penentuan urgensi penanganan adalah kebutuhan bisnis inti                       |
| FR-12 | Admin tugaskan Teknisi → status `Assigned`                      | 🔴 Must Have   | Penugasan adalah langkah wajib agar teknisi bisa bekerja                        |
| FR-13 | Teknisi ubah status `Assigned` → `In Progress`                  | 🔴 Must Have   | Memberi sinyal bahwa pekerjaan telah dimulai; kritis untuk transparansi         |
| FR-14 | Teknisi ubah status `In Progress` → `Resolved`                  | 🔴 Must Have   | Menandai selesainya pekerjaan teknisi; wajib untuk alur konfirmasi              |
| FR-15 | Admin menutup tiket (`Closed`)                                  | 🔴 Must Have   | Penutupan resmi adalah penyelesaian siklus hidup tiket                          |
| FR-16 | Admin buka kembali tiket `Closed` → `In Progress`               | 🟠 Should Have | Berguna untuk kasus pengecualian, tetapi tidak menghalangi operasional normal   |
| FR-17 | Sistem catat riwayat status otomatis + aktor + timestamp        | 🔴 Must Have   | Audit trail wajib; menjadi dasar transparansi dan keterlacakan                  |
| FR-18 | Pelapor/Admin/Teknisi tambahkan komentar                        | 🟠 Should Have | Mendukung komunikasi antar aktor, bisa ditambahkan setelah alur utama berjalan  |
| FR-19 | Tampilkan komentar kronologis + nama + waktu                    | 🟠 Should Have | Bergantung pada FR-18; didahulukan setelah fitur komentar tersedia              |
| FR-20 | Tampilkan tombol konfirmasi Pelapor saat `Resolved`             | 🔴 Must Have   | Konfirmasi Pelapor adalah syarat sebelum Admin bisa menutup tiket               |
| FR-21 | Tiket hanya ditutup oleh Admin secara eksplisit                 | 🟠 Should Have | Business rule penting, namun implementasinya ikut FR-15 yang sudah Must Have    |
| FR-22 | Dashboard statistik tiket untuk Manajer Fasilitas               | 🟡 Could Have  | Bernilai tinggi untuk Manajer, namun tidak menghalangi operasional utama        |
| FR-23 | Daftar tiket read-only untuk Manajer Fasilitas                  | 🟡 Could Have  | Manajer masih bisa memantau via Administrator; ditambahkan setelah inti selesai |

---

## 3. Prioritas Non-Functional Requirements (NFR)

| ID     | Kategori     | Deskripsi Singkat                            | Prioritas      | Alasan                                                        |
| ------ | ------------ | -------------------------------------------- | -------------- | ------------------------------------------------------------- |
| NFR-01 | Keamanan     | Role-based access control per aktor          | 🔴 Must Have   | Tanpa kontrol akses, data tiket dapat diakses sembarangan     |
| NFR-02 | Keamanan     | Pelapor hanya melihat tiket miliknya         | 🔴 Must Have   | Privasi data pelapor adalah kebutuhan dasar                   |
| NFR-03 | Keamanan     | Teknisi hanya melihat tiket yang ditugaskan  | 🔴 Must Have   | Tanpa ini, Teknisi bisa mengakses data sensitif tiket lain    |
| NFR-04 | Ketersediaan | Sistem dapat diakses kapan saja via internet | 🔴 Must Have   | Sistem berbasis web harus dapat diakses oleh semua aktor      |
| NFR-05 | Kinerja      | Daftar tiket dimuat ≤ 3 detik                | 🟠 Should Have | Pengalaman pengguna penting, namun threshold bisa disesuaikan |
| NFR-06 | Kemudahan    | Pengguna baru bisa buat tiket ≤ 5 menit      | 🟠 Should Have | Bergantung pada desain UI; perlu divalidasi saat testing      |
| NFR-07 | Keterlacakan | Riwayat status permanen, tidak dapat dihapus | 🔴 Must Have   | Integritas data audit trail adalah kebutuhan bisnis utama     |
| NFR-08 | Skalabilitas | Mampu simpan 10.000 tiket tanpa degradasi    | 🟡 Could Have  | Relevan untuk jangka panjang; tidak kritis untuk MVP awal     |

---

## 4. Prioritas Business Rules (BR)

| ID    | Business Rule Singkat                                     | Prioritas      | Alasan                                                |
| ----- | --------------------------------------------------------- | -------------- | ----------------------------------------------------- |
| BR-01 | Hanya Pelapor yang dapat membuat tiket                    | 🔴 Must Have   | Kebijakan akses dasar sistem                          |
| BR-02 | Status tiket mengikuti alur yang ditetapkan               | 🔴 Must Have   | Alur workflow adalah inti dari sistem tikerting       |
| BR-03 | Hanya Admin yang menugaskan Teknisi                       | 🔴 Must Have   | Kontrol penugasan adalah tanggung jawab Administrator |
| BR-04 | Hanya Admin yang menutup tiket                            | 🔴 Must Have   | Penutupan resmi memerlukan persetujuan Administrator  |
| BR-05 | Teknisi hanya ubah status tiket yang ditugaskan kepadanya | 🔴 Must Have   | Mencegah konflik dan kesalahan penanganan             |
| BR-06 | Satu tiket hanya untuk satu Teknisi                       | 🔴 Must Have   | Kejelasan tanggung jawab penanganan per tiket         |
| BR-07 | Pelapor/Admin/Teknisi bisa komentar                       | 🟠 Should Have | Mendukung komunikasi; tidak kritis untuk alur utama   |
| BR-08 | Manajer Fasilitas read-only                               | 🟡 Could Have  | Bergantung pada implementasi dashboard (FR-22, FR-23) |
| BR-09 | Riwayat status permanen dan tidak dapat dihapus           | 🔴 Must Have   | Mendukung keterlacakan dan integritas data            |
| BR-10 | Upload foto/email notif/Google login di luar scope        | 🔴 Must Have   | Batas scope harus ditegakkan sejak awal pengembangan  |

---

## 5. Roadmap Pengembangan Berdasarkan Prioritas

### 🔴 Fase 1 — MVP (Minimum Viable Product)

_Target: Sistem tikerting dapat berjalan dari ujung ke ujung_

**Functional Requirements yang harus selesai:**

- FR-01, FR-02, FR-03, FR-04 — Pembuatan tiket
- FR-05, FR-06 — Tampilan daftar & detail tiket
- FR-09, FR-10, FR-11, FR-12 — Alur review & penugasan oleh Admin
- FR-13, FR-14 — Alur pengerjaan oleh Teknisi
- FR-15, FR-17 — Penutupan & log riwayat otomatis
- FR-20 — Konfirmasi oleh Pelapor

**NFR yang harus terpenuhi:** NFR-01, NFR-02, NFR-03, NFR-04, NFR-07

**BR yang harus ditegakkan:** BR-01, BR-02, BR-03, BR-04, BR-05, BR-06, BR-09, BR-10

---

### 🟠 Fase 2 — Enhancement

_Target: Meningkatkan efisiensi dan pengalaman pengguna_

**Functional Requirements:**

- FR-07 — Pencarian tiket
- FR-08 — Filter tiket
- FR-16 — Re-open tiket
- FR-18, FR-19 — Komentar & tampilan kronologis
- FR-21 — Penegasan penutupan hanya oleh Admin

**NFR:** NFR-05, NFR-06

**BR:** BR-07

---

### 🟡 Fase 3 — Monitoring & Reporting

_Target: Memberikan visibilitas data kepada Manajer Fasilitas_

**Functional Requirements:**

- FR-22 — Dashboard statistik
- FR-23 — Daftar tiket read-only Manajer

**NFR:** NFR-08

**BR:** BR-08

---

### ⚫ Won't Have (Fase Ini)

_Disepakati tidak dikerjakan pada versi pertama berdasarkan CASE.md:_

| Fitur                    | Alasan                       |
| ------------------------ | ---------------------------- |
| Upload foto              | Batasan infrastruktur gratis |
| Notifikasi email         | Di luar prioritas utama      |
| Login Google (OAuth)     | Di luar prioritas utama      |
| QR Code ruangan          | Di luar prioritas utama      |
| AI kategorisasi otomatis | Kompleksitas tinggi          |
| Inventaris suku cadang   | Kompleksitas tinggi          |
| Manajemen vendor         | Kompleksitas tinggi          |

---

## 6. Rekapitulasi Prioritas

| Kategori       | FR     | NFR   | BR     | Total  |
| -------------- | ------ | ----- | ------ | ------ |
| 🔴 Must Have   | 15     | 4     | 8      | **27** |
| 🟠 Should Have | 6      | 2     | 1      | **9**  |
| 🟡 Could Have  | 2      | 1     | 1      | **4**  |
| ⚫ Won't Have  | 0      | 0     | 0      | **0**  |
| **Total**      | **23** | **7** | **10** | **40** |

---

## 7. Quality Check

| Kriteria                                                   | Status                 |
| ---------------------------------------------------------- | ---------------------- |
| Semua 23 FR telah diberi prioritas                         | ✅                     |
| Semua 8 NFR telah diberi prioritas                         | ✅ (NFR-01 s/d NFR-08) |
| Semua 10 BR telah diberi prioritas                         | ✅                     |
| Tidak ada requirement yang terlewat                        | ✅                     |
| Setiap requirement hanya memiliki satu prioritas           | ✅                     |
| Prioritas berdasarkan kebutuhan bisnis, bukan teknis       | ✅                     |
| Isi requirement tidak diubah, hanya diberi label prioritas | ✅                     |
| Roadmap pengembangan terdokumentasi per fase               | ✅                     |

---

## 8. Human Review

> ⚠️ **Mohon diperiksa sebelum melanjutkan ke Skill 05 — Validation & Change:**
>
> - Apakah semua requirement **Must Have** sudah benar-benar wajib untuk versi pertama?
> - Apakah ada requirement **Should Have** yang perlu dipindahkan ke Must Have (atau sebaliknya)?
> - Apakah **Fase 1 MVP** realistis untuk dikerjakan dalam satu sprint/iterasi pengembangan?
> - Apakah fitur **Won't Have** sudah disetujui oleh seluruh stakeholder untuk ditunda?

---

_Dokumen ini dibuat menggunakan Skill `04-prioritization` berdasarkan `03-specification.md`._
_Lanjutkan ke **Skill 05 — Validation & Change** setelah dokumen ini disetujui._
