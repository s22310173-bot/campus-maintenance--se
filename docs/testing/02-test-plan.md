# Test Plan

## Project

Campus Service Request and Maintenance System

---

# Purpose

Dokumen ini berisi rencana pengujian seluruh Functional Requirement untuk memastikan sistem bekerja sesuai spesifikasi sebelum dilakukan automated testing dan deployment.

---

# Test Scope

Pengujian mencakup:

- Functional Testing
- API Testing
- Database Testing
- Validation Testing
- Integration Testing
- Acceptance Testing

---

# Test Environment

| Item              | Value                    |
| ----------------- | ------------------------ |
| Frontend          | React + Vite             |
| Backend           | Cloudflare Workers       |
| Database          | Cloudflare D1 (SQLite)   |
| Browser           | Google Chrome (Latest)   |
| API Client        | Postman / Thunder Client |
| Testing Framework | Vitest                   |
| Operating System  | Windows 11               |

---

# Requirement Traceability Matrix

| Requirement | Feature                | Test Case |
| ----------- | ---------------------- | --------- |
| FR-01       | Login                  | TC-001    |
| FR-02       | Submit Service Request | TC-002    |
| FR-03       | View Service Requests  | TC-003    |
| FR-04       | Update Request Status  | TC-004    |
| FR-05       | View Request Detail    | TC-005    |
| FR-06       | Add Comment            | TC-006    |
| FR-07       | Dashboard              | TC-007    |
| FR-08       | Manage Users           | TC-008    |
| FR-09       | Review Request         | TC-009    |
| FR-10       | Upload Photo           | TC-010    |

---

# Test Cases

---

## TC-001 Login

### Requirement

FR-01

### Objective

Memastikan pengguna dapat login menggunakan akun yang valid.

### Preconditions

- Pengguna sudah terdaftar.

### Test Steps

1. Buka halaman Login.
2. Masukkan email.
3. Masukkan password.
4. Klik Login.

### Expected Result

- Login berhasil.
- Dashboard ditampilkan.

---

## TC-002 Submit Service Request

### Requirement

FR-02

### Objective

Memastikan pengguna dapat membuat laporan kerusakan.

### Preconditions

- Pengguna telah login.

### Test Steps

1. Klik "New Request".
2. Isi judul.
3. Isi deskripsi.
4. Pilih kategori.
5. Klik Submit.

### Expected Result

- Data tersimpan.
- Nomor tiket dibuat.
- Status awal "Pending".

---

## TC-003 View Service Requests

### Requirement

FR-03

### Objective

Memastikan daftar laporan dapat ditampilkan.

### Preconditions

- Data laporan tersedia.

### Test Steps

1. Buka halaman Requests.

### Expected Result

- Semua laporan tampil.
- Informasi status terlihat.

---

## TC-004 Update Request Status

### Requirement

FR-04

### Objective

Memastikan administrator dapat mengubah status laporan.

### Preconditions

- Login sebagai Administrator.
- Laporan tersedia.

### Test Steps

1. Buka detail laporan.
2. Pilih status baru.
3. Simpan perubahan.

### Expected Result

- Status berhasil diperbarui.

---

## TC-005 View Request Detail

### Requirement

FR-05

### Objective

Memastikan detail laporan dapat ditampilkan.

### Preconditions

- Data tersedia.

### Test Steps

1. Klik salah satu laporan.

### Expected Result

- Detail laporan tampil lengkap.

---

## TC-006 Add Comment

### Requirement

FR-06

### Objective

Memastikan komentar dapat ditambahkan.

### Preconditions

- Login.
- Detail laporan terbuka.

### Test Steps

1. Isi komentar.
2. Klik Submit.

### Expected Result

- Komentar tampil pada daftar komentar.

---

## TC-007 Dashboard

### Requirement

FR-07

### Objective

Memastikan dashboard menampilkan ringkasan data.

### Preconditions

- Pengguna login.

### Test Steps

1. Buka Dashboard.

### Expected Result

- Total tiket tampil.
- Statistik status tampil.

---

## TC-008 Manage Users

### Requirement

FR-08

### Objective

Memastikan administrator dapat mengelola pengguna.

### Preconditions

- Login sebagai Administrator.

### Test Steps

1. Tambah pengguna.
2. Edit pengguna.
3. Hapus pengguna.

### Expected Result

- Semua operasi berhasil.

---

## TC-009 Review Request

### Requirement

FR-09

### Objective

Memastikan administrator dapat meninjau laporan.

### Preconditions

- Login sebagai Administrator.

### Test Steps

1. Buka laporan.
2. Review isi laporan.
3. Setujui atau tolak.

### Expected Result

- Status review diperbarui.

---

## TC-010 Upload Photo

### Requirement

FR-10

### Objective

Memastikan pengguna dapat mengunggah foto kerusakan.

### Preconditions

- Pengguna login.

### Test Steps

1. Pilih gambar.
2. Upload.
3. Submit laporan.

### Expected Result

- Foto berhasil tersimpan.
- Foto muncul pada detail laporan.

---

# Test Types

| Test Type        | Description                                               |
| ---------------- | --------------------------------------------------------- |
| Unit Test        | Menguji fungsi atau komponen secara individual.           |
| Integration Test | Menguji interaksi antara frontend, backend, dan database. |
| API Test         | Memastikan endpoint REST API bekerja sesuai spesifikasi.  |
| Validation Test  | Menguji validasi input pengguna.                          |
| Acceptance Test  | Memastikan fitur memenuhi Acceptance Criteria.            |

---

# Entry Criteria

- Semua Functional Requirement telah diimplementasikan.
- Build berhasil.
- Database siap digunakan.
- API dapat diakses.

---

# Exit Criteria

- Semua Test Case berhasil dijalankan.
- Tidak ada bug dengan tingkat Critical.
- Semua Acceptance Criteria terpenuhi.

---

# Test Deliverables

- Test Plan
- Test Case
- Test Result
- Bug Report
- Code Review Report

---

# Approval

| Role          | Name | Status |
| ------------- | ---- | ------ |
| Developer     |      | ☐      |
| Reviewer      |      | ☐      |
| Project Owner |      | ☐      |

---

# Summary

Total Functional Requirement : **10**

Total Test Case : **10**

Status :

- ☐ Draft
- ☐ In Review
- ☐ Approved
