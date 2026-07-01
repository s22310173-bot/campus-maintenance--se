# 01 - Issue Planning

**Sistem** : Campus Service Request and Maintenance System (Sistem Tiketing Laporan Fasilitas Kampus)

**Tanggal** : 2026-07-01

**Skill Digunakan** : `09-issue-planning`

**Input**

- CASE.md
- docs/requirements/
- docs/design/

**Output**

- GitHub Issues
- Branch Strategy
- Milestone
- Implementation Plan

**Versi** : 1.0

**Status** : Draft — Menunggu Human Review

---

# 1. Tujuan

Dokumen ini menjelaskan rencana implementasi proyek berdasarkan Functional Requirement (FR) yang telah didefinisikan pada tahap Requirements Engineering.

Seluruh pekerjaan akan dibagi menjadi beberapa GitHub Issue sehingga proses pengembangan dapat dilakukan secara bertahap, terstruktur, dan mudah ditelusuri.

---

# 2. Pendekatan Implementasi

Pengembangan menggunakan pendekatan **Vertical Slice**.

Setiap GitHub Issue mencakup:

- Requirement
- Frontend
- Backend
- Database (jika diperlukan)
- Testing
- Dokumentasi

Satu Issue harus selesai sepenuhnya sebelum melanjutkan ke Issue berikutnya.

---

# 3. Pemetaan Functional Requirement ke GitHub Issue

| GitHub Issue | Functional Requirement            | Prioritas |
| ------------ | --------------------------------- | --------- |
| Issue #1     | Setup Project                     | High      |
| Issue #2     | FR-01 Membuat Laporan             | High      |
| Issue #3     | FR-05 Melihat Daftar Laporan      | High      |
| Issue #4     | FR-06 Melihat Detail Laporan      | High      |
| Issue #5     | FR-09 Review Laporan              | Medium    |
| Issue #6     | FR-10 Menentukan Kategori         | Medium    |
| Issue #7     | FR-11 Menentukan Prioritas        | Medium    |
| Issue #8     | FR-12 Menugaskan Teknisi          | High      |
| Issue #9     | FR-13, FR-14, FR-15 Update Status | High      |
| Issue #10    | FR-18, FR-19 Komentar             | Medium    |
| Issue #11    | FR-22, FR-23 Dashboard            | Medium    |
| Issue #12    | Testing dan Deployment            | High      |

---

# 4. Urutan Implementasi

```
Setup Project
        ↓
Create Service Request
        ↓
List Service Requests
        ↓
Request Detail
        ↓
Review Request
        ↓
Assign Category
        ↓
Assign Priority
        ↓
Assign Technician
        ↓
Update Status
        ↓
Comment
        ↓
Dashboard
        ↓
Testing
        ↓
Deployment
```

---

# 5. Dependency Antar Issue

| Issue     | Bergantung Pada |
| --------- | --------------- |
| Issue #2  | Issue #1        |
| Issue #3  | Issue #2        |
| Issue #4  | Issue #3        |
| Issue #5  | Issue #4        |
| Issue #6  | Issue #5        |
| Issue #7  | Issue #6        |
| Issue #8  | Issue #7        |
| Issue #9  | Issue #8        |
| Issue #10 | Issue #9        |
| Issue #11 | Issue #10       |
| Issue #12 | Issue #11       |

---

# 6. Estimasi Pengerjaan

| Issue                  | Estimasi |
| ---------------------- | -------- |
| Setup Project          | 1 Hari   |
| Create Service Request | 1 Hari   |
| List Service Requests  | 1 Hari   |
| Request Detail         | 1 Hari   |
| Review Request         | 1 Hari   |
| Assign Category        | 1 Hari   |
| Assign Priority        | 1 Hari   |
| Assign Technician      | 1 Hari   |
| Update Status          | 2 Hari   |
| Comment                | 1 Hari   |
| Dashboard              | 2 Hari   |
| Testing & Deployment   | 2 Hari   |

---

# 7. Definition of Done

Sebuah GitHub Issue dinyatakan selesai apabila:

- Functional Requirement telah diimplementasikan.
- Acceptance Criteria terpenuhi.
- Frontend selesai.
- Backend selesai.
- Database diperbarui bila diperlukan.
- Unit Test berhasil dijalankan.
- Dokumentasi diperbarui.
- Pull Request telah di-merge ke branch `main`.

---

# 8. Risiko

| Risiko                | Mitigasi                               |
| --------------------- | -------------------------------------- |
| Perubahan Requirement | Menggunakan Change Request             |
| Konflik Branch        | Melakukan update branch secara berkala |
| Bug Implementasi      | Menambahkan Unit Test                  |
| Perubahan Database    | Membuat migration baru                 |

---

# 9. Quality Check

| Pemeriksaan                        | Status |
| ---------------------------------- | ------ |
| Semua FR dipetakan ke GitHub Issue | ✅     |
| Urutan implementasi jelas          | ✅     |
| Dependency terdokumentasi          | ✅     |
| Estimasi tersedia                  | ✅     |
| Definition of Done tersedia        | ✅     |

---

# 10. Human Review

Reviewer perlu memastikan bahwa:

- Seluruh Functional Requirement telah memiliki GitHub Issue.
- Tidak ada pekerjaan di luar ruang lingkup proyek.
- Urutan implementasi realistis.
- Estimasi pengerjaan masuk akal.
- Dependency antar Issue sudah benar.

---

# 11. Kesimpulan

Dokumen Issue Planning mengubah seluruh Functional Requirement menjadi pekerjaan implementasi yang dapat dikelola menggunakan GitHub Issues. Dengan pendekatan ini, proses pengembangan dapat dilakukan secara bertahap, mudah ditelusuri, dan sesuai dengan workflow Software Engineering.
