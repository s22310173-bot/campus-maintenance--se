# 01 - Inception dan Stakeholder

**Sistem**: Campus Service Request and Maintenance System (Tikerting Laporan Fasilitas Kampus)
**Tanggal**: 2026-06-29
**Skill Digunakan**: `01-inception-dan-stakeholder`
**Status**: Draft — Menunggu Human Review

---

## 1. Latar Belakang & Pernyataan Masalah

Proses pelaporan kerusakan fasilitas kampus saat ini dilakukan secara manual melalui jalur informal (chat, email, atau tatap muka langsung ke staf sarpras). Kondisi ini menimbulkan sejumlah masalah mendasar:

| #   | Masalah                            | Dampak                                                |
| --- | ---------------------------------- | ----------------------------------------------------- |
| 1   | Tidak ada jalur pelaporan terpusat | Laporan sering hilang atau terlupakan                 |
| 2   | Tidak ada pelacakan status laporan | Pelapor tidak tahu progres perbaikan                  |
| 3   | Penugasan teknisi dilakukan manual | Proses lambat dan tidak terstruktur                   |
| 4   | Tidak ada data historis kerusakan  | Manajemen tidak bisa merencanakan perawatan preventif |

**Tujuan Sistem:**
Menyediakan sistem tikerting digital terpusat yang memungkinkan pelaporan, penugasan, pelacakan, dan penutupan laporan kerusakan fasilitas kampus secara transparan dan terstruktur.

---

## 2. Identifikasi Stakeholder

### 2.1 Stakeholder (Pihak Berkepentingan)

| Stakeholder                 | Kepentingan Utama                                             |
| --------------------------- | ------------------------------------------------------------- |
| Mahasiswa & Dosen           | Fasilitas berfungsi optimal untuk menunjang KBM               |
| Staf Sarana & Prasarana     | Pengelolaan teknisi dan laporan yang terorganisir             |
| Teknisi Lapangan            | Menerima detail tugas yang jelas dan mudah melaporkan progres |
| Rektorat / Manajemen Kampus | Data statistik untuk perencanaan anggaran dan efisiensi biaya |

### 2.2 Aktor Sistem (Pengguna Langsung Aplikasi)

| Aktor                 | Peran                                                  | Aksi Utama                                                                                   |
| --------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **Pelapor**           | Mahasiswa atau dosen yang melaporkan masalah fasilitas | Membuat laporan (tiket), melihat status, menambahkan komentar, mengonfirmasi hasil perbaikan |
| **Administrator**     | Staf sarpras yang mengelola laporan masuk              | Memeriksa laporan, menentukan kategori & prioritas, menugaskan teknisi, menutup laporan      |
| **Teknisi**           | Staf teknis yang mengerjakan perbaikan di lapangan     | Melihat daftar tugas, memperbarui status pengerjaan, menambahkan catatan teknis              |
| **Manajer Fasilitas** | Pimpinan sarpras atau manajemen kampus                 | Memantau dashboard ringkasan laporan dan statistik performa                                  |

---

## 3. Tujuan Sistem

Sistem tikerting laporan ini bertujuan untuk:

1. **Memusatkan pelaporan** — satu titik masuk untuk semua laporan kerusakan fasilitas.
2. **Meningkatkan transparansi** — setiap pelapor dapat memantau status tiket mereka secara real-time.
3. **Mempercepat penanganan** — penugasan teknisi dilakukan secara digital dan terlacak.
4. **Menyediakan data** — Manajer Fasilitas mendapatkan rekap statistik untuk pengambilan keputusan.

---

## 4. Ruang Lingkup Sistem

### 4.1 Fitur Wajib (In-Scope)

| #   | Fitur                                      | Aktor yang Terlibat             |
| --- | ------------------------------------------ | ------------------------------- |
| 1   | Membuat laporan (tiket) baru               | Pelapor                         |
| 2   | Melihat daftar laporan                     | Semua aktor (sesuai hak akses)  |
| 3   | Mencari dan menyaring laporan              | Semua aktor                     |
| 4   | Melihat detail laporan                     | Semua aktor                     |
| 5   | Memeriksa dan memvalidasi laporan          | Administrator                   |
| 6   | Menentukan prioritas (Low / Medium / High) | Administrator                   |
| 7   | Menugaskan teknisi ke laporan              | Administrator                   |
| 8   | Mengubah status pekerjaan                  | Teknisi                         |
| 9   | Menambahkan komentar atau catatan          | Pelapor, Administrator, Teknisi |
| 10  | Menyimpan riwayat perubahan status         | Sistem (otomatis)               |
| 11  | Menutup atau membuka kembali laporan       | Administrator                   |
| 12  | Menampilkan dashboard statistik ringkas    | Manajer Fasilitas               |

### 4.2 Fitur Opsional (Out-of-Scope — Fase Pertama)

| #   | Fitur                                  | Alasan Ditunda               |
| --- | -------------------------------------- | ---------------------------- |
| 1   | Upload foto bukti kerusakan            | Batasan infrastruktur gratis |
| 2   | Notifikasi email otomatis              | Di luar prioritas utama      |
| 3   | Login menggunakan akun Google (OAuth)  | Di luar prioritas utama      |
| 4   | QR Code ruangan untuk pelaporan        | Di luar prioritas utama      |
| 5   | AI otomatis untuk kategorisasi masalah | Di luar prioritas utama      |
| 6   | Sistem inventaris suku cadang          | Kompleksitas tinggi          |
| 7   | Manajemen vendor eksternal             | Kompleksitas tinggi          |

### 4.3 Alur Status Tiket

```
Submitted → Under Review → Assigned → In Progress → Resolved → Closed
```

| Status           | Deskripsi                              | Aktor             |
| ---------------- | -------------------------------------- | ----------------- |
| **Submitted**    | Tiket dibuat oleh Pelapor              | Pelapor           |
| **Under Review** | Tiket sedang ditinjau Administrator    | Administrator     |
| **Assigned**     | Teknisi telah ditunjuk                 | Administrator     |
| **In Progress**  | Perbaikan sedang dikerjakan            | Teknisi           |
| **Resolved**     | Perbaikan selesai, menunggu konfirmasi | Teknisi / Pelapor |
| **Closed**       | Laporan ditutup secara resmi           | Administrator     |

---

## 5. Asumsi dan Batasan

| Label       | Pernyataan                                                                     |
| ----------- | ------------------------------------------------------------------------------ |
| `[ASUMSI]`  | Sistem berjalan di infrastruktur gratis (Cloudflare Pages + Workers + D1)      |
| `[ASUMSI]`  | Autentikasi disimulasikan dengan form switch user (login Google di luar scope) |
| `[ASUMSI]`  | Semua aktor memiliki perangkat dan koneksi internet aktif                      |
| `[ASUMSI]`  | Data pengguna sistem bersifat simulasi untuk keperluan demonstrasi             |
| `[BATASAN]` | Tidak ada upload file/gambar ke object storage                                 |
| `[BATASAN]` | Kapasitas database dibatasi oleh kuota gratis platform yang digunakan          |

---

## 6. Pertanyaan Terbuka (untuk Fase Elisitasi)

Pertanyaan berikut belum terjawab dan perlu diklarifikasi pada Skill 02 — Elicitation:

1. **Format nomor tiket**: Apakah nomor tiket memerlukan format khusus, misalnya `TKT-2026-0001`, atau cukup ID numerik otomatis?
2. **Kategori kerusakan**: Apa saja kategori standar yang harus tersedia? (contoh: IT & Jaringan, Kelistrikan, AC, Mebel, Kebersihan, Infrastruktur)
3. **SLA penanganan**: Apakah ada batas waktu penanganan untuk setiap level prioritas (Low, Medium, High)?
4. **Hak berkomentar**: Apakah Pelapor boleh menambahkan komentar saat status tiket sudah `In Progress` atau `Resolved`?
5. **Re-open tiket**: Jika Pelapor menolak konfirmasi hasil perbaikan, status tiket kembali ke `Assigned` atau `In Progress`?
6. **Hak akses Teknisi**: Apakah Teknisi hanya bisa melihat tiket yang ditugaskan kepadanya, atau semua tiket yang ada?
7. **Notifikasi in-app**: Apakah diperlukan notifikasi di dalam aplikasi (bukan email) saat status tiket berubah?

---

## 7. Quality Check

| Kriteria                                                          | Status |
| ----------------------------------------------------------------- | ------ |
| Semua stakeholder telah diidentifikasi                            | ✅     |
| Tujuan sistem jelas dan terukur                                   | ✅     |
| Fitur in-scope dan out-of-scope tidak bertentangan                | ✅     |
| Semua asumsi telah ditandai dengan label `[ASUMSI]` / `[BATASAN]` | ✅     |
| Pertanyaan terbuka cukup spesifik untuk memandu elisitasi         | ✅     |

---

## 8. Human Review

> ⚠️ **Mohon diperiksa sebelum melanjutkan ke fase berikutnya:**
>
> - Apakah **4 aktor sistem** (Pelapor, Administrator, Teknisi, Manajer Fasilitas) sudah sesuai dengan struktur organisasi kampus yang sebenarnya?
> - Apakah **12 fitur wajib** sudah mencakup semua kebutuhan minimum sistem tikerting laporan?
> - Apakah **batasan scope** (misalnya tidak ada upload foto) sudah disetujui oleh seluruh stakeholder?
> - Apakah ada pertanyaan terbuka yang sudah bisa dijawab dan perlu ditambahkan ke dokumen ini?

---

_Dokumen ini dibuat menggunakan Skill `01-inception-dan-stakeholder` berdasarkan `CASE.md`._
_Lanjutkan ke **Skill 02 — Elicitation** setelah dokumen ini disetujui._
