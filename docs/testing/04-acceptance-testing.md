# Acceptance Testing

## Project

Campus Service Request and Maintenance System

---

# Purpose

Dokumen ini digunakan untuk memverifikasi bahwa seluruh fitur aplikasi telah memenuhi kebutuhan stakeholder dan sesuai dengan Functional Requirement, User Story, serta Acceptance Criteria.

---

# Acceptance Testing Information

| Item        | Value                                         |
| ----------- | --------------------------------------------- |
| Project     | Campus Service Request and Maintenance System |
| Test Type   | User Acceptance Testing (UAT)                 |
| Tester      | Project Owner / Stakeholder / Reviewer        |
| Test Date   | **\*\*\*\***\_\_**\*\*\*\***                  |
| Test Date   | ********\_\_********                          |
| Version     | v1.0                                          |
| Environment | Development / Staging                         |

---

# Preconditions

Sebelum Acceptance Testing dilakukan, pastikan:

- [x] Semua Functional Requirement telah diimplementasikan.
- [x] Unit Test berhasil.
- [x] Integration Test berhasil.
- [x] Automated Testing Report tersedia.
- [x] Database telah disiapkan.
- [x] Data uji tersedia.

---

# Acceptance Test Scenarios

---

## AT-001 User Login

### Requirement

FR-01

### User Story

Sebagai pengguna, saya ingin login agar dapat menggunakan sistem.

### Test Steps

1. Buka halaman Login.
2. Masukkan email yang valid.
3. Masukkan password yang benar.
4. Klik **Login**.

### Expected Result

- Login berhasil.
- Dashboard ditampilkan.
- Nama pengguna muncul pada halaman utama.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-002 Submit Service Request

### Requirement

FR-02

### User Story

Sebagai pengguna, saya ingin mengirim laporan kerusakan agar fasilitas dapat diperbaiki.

### Test Steps

1. Login.
2. Pilih menu **New Request**.
3. Isi judul laporan.
4. Isi deskripsi.
5. Pilih kategori.
6. Upload foto (jika tersedia).
7. Klik **Submit**.

### Expected Result

- Laporan berhasil dibuat.
- Nomor tiket otomatis dibuat.
- Status awal **Pending**.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-003 View Service Requests

### Requirement

FR-03

### User Story

Sebagai pengguna, saya ingin melihat daftar laporan yang pernah dibuat.

### Test Steps

1. Login.
2. Buka menu **My Requests**.

### Expected Result

- Semua laporan tampil.
- Status setiap laporan terlihat.
- Informasi laporan sesuai dengan data yang disimpan.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-004 Update Request Status

### Requirement

FR-04

### User Story

Sebagai administrator, saya ingin memperbarui status laporan agar pengguna mengetahui progres penanganannya.

### Test Steps

1. Login sebagai Administrator.
2. Buka detail laporan.
3. Ubah status.
4. Simpan perubahan.

### Expected Result

- Status berhasil diperbarui.
- Perubahan langsung terlihat pada daftar laporan.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-005 View Request Detail

### Requirement

FR-05

### User Story

Sebagai pengguna, saya ingin melihat detail laporan yang telah dibuat.

### Test Steps

1. Login.
2. Buka daftar laporan.
3. Klik salah satu laporan.

### Expected Result

- Detail laporan tampil lengkap.
- Informasi sesuai dengan data yang tersimpan.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-006 Add Comment

### Requirement

FR-06

### User Story

Sebagai pengguna atau administrator, saya ingin menambahkan komentar pada laporan.

### Test Steps

1. Buka detail laporan.
2. Isi komentar.
3. Klik **Submit**.

### Expected Result

- Komentar berhasil ditambahkan.
- Komentar langsung muncul pada daftar komentar.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-007 Dashboard

### Requirement

FR-07

### User Story

Sebagai pengguna, saya ingin melihat ringkasan laporan melalui dashboard.

### Test Steps

1. Login.
2. Masuk ke Dashboard.

### Expected Result

- Dashboard menampilkan statistik laporan.
- Informasi sesuai dengan data yang ada.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-008 Manage Users

### Requirement

FR-08

### User Story

Sebagai administrator, saya ingin mengelola data pengguna.

### Test Steps

1. Login sebagai Administrator.
2. Tambah pengguna baru.
3. Edit pengguna.
4. Hapus pengguna.

### Expected Result

- Semua operasi berhasil dilakukan.
- Perubahan tersimpan di sistem.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-009 Review Request

### Requirement

FR-09

### User Story

Sebagai administrator, saya ingin meninjau laporan sebelum diproses.

### Test Steps

1. Login sebagai Administrator.
2. Buka laporan.
3. Lakukan review.
4. Setujui atau tolak laporan.

### Expected Result

- Status review diperbarui.
- Hasil review tersimpan.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

## AT-010 Upload Photo

### Requirement

FR-10

### User Story

Sebagai pengguna, saya ingin mengunggah foto kerusakan sebagai bukti.

### Test Steps

1. Login.
2. Buat laporan baru.
3. Pilih file gambar.
4. Upload.
5. Submit laporan.

### Expected Result

- Foto berhasil diunggah.
- Foto tampil pada detail laporan.

### Actual Result

---

### Status

- [ ] Passed
- [ ] Failed

---

# Acceptance Criteria Summary

| Requirement | Status            |
| ----------- | ----------------- |
| FR-01       | ☐ Passed ☐ Failed |
| FR-02       | ☐ Passed ☐ Failed |
| FR-03       | ☐ Passed ☐ Failed |
| FR-04       | ☐ Passed ☐ Failed |
| FR-05       | ☐ Passed ☐ Failed |
| FR-06       | ☐ Passed ☐ Failed |
| FR-07       | ☐ Passed ☐ Failed |
| FR-08       | ☐ Passed ☐ Failed |
| FR-09       | ☐ Passed ☐ Failed |
| FR-10       | ☐ Passed ☐ Failed |

---

# Issues Found

| No  | Requirement | Description | Severity | Status |
| --- | ----------- | ----------- | -------- | ------ |
| 1   | -           | -           | -        | -      |

---

# Overall Result

| Item                                | Status |
| ----------------------------------- | ------ |
| Semua skenario berhasil dijalankan  | ☐      |
| Semua Acceptance Criteria terpenuhi | ☐      |
| Tidak ada bug kritis                | ☐      |
| Siap digunakan oleh stakeholder     | ☐      |

---

# Reviewer Approval

| Role          | Name | Signature | Date |
| ------------- | ---- | --------- | ---- |
| Tester        |      |           |      |
| Project Owner |      |           |      |
| Reviewer      |      |           |      |

---

# Conclusion

Pilih salah satu hasil akhir:

- [ ] **Accepted** – Aplikasi memenuhi seluruh kebutuhan stakeholder dan siap digunakan.
- [ ] **Accepted with Minor Issues** – Aplikasi dapat digunakan, namun masih terdapat perbaikan kecil yang tidak memengaruhi fungsi utama.
- [ ] **Rejected** – Aplikasi belum memenuhi kebutuhan stakeholder dan memerlukan perbaikan sebelum dapat diterima.

---

# Notes

---

---

---
