# Code Review

## Project

Campus Service Request and Maintenance System

## Purpose

Dokumen ini digunakan untuk mencatat hasil pemeriksaan kualitas kode sebelum Pull Request di-merge ke branch `main`.

---

# Review Checklist

## Requirement Review

- [ ] Functional Requirement sudah diimplementasikan.
- [ ] Tidak ada requirement yang diubah.
- [ ] Semua Acceptance Criteria telah terpenuhi.

Catatan:

....................................................................

---

## Code Quality

### Readability

- [ ] Nama variabel jelas.
- [ ] Nama function jelas.
- [ ] Struktur folder rapi.
- [ ] Tidak ada kode yang membingungkan.

Catatan:

....................................................................

---

### Coding Style

- [ ] Mengikuti standar TypeScript.
- [ ] Menggunakan formatting yang konsisten.
- [ ] Tidak ada kode yang tidak digunakan.
- [ ] Tidak ada import yang tidak dipakai.

Catatan:

....................................................................

---

### Reusability

- [ ] Tidak ada duplikasi kode.
- [ ] Function memiliki satu tanggung jawab.
- [ ] Komponen dapat digunakan kembali bila diperlukan.

Catatan:

....................................................................

---

## Error Handling

- [ ] Validasi input tersedia.
- [ ] Error ditangani dengan benar.
- [ ] Tidak ada crash yang terlihat.

Catatan:

....................................................................

---

## API Review

- [ ] Endpoint sesuai desain API.
- [ ] HTTP Status benar.
- [ ] Response JSON konsisten.
- [ ] Error Response sesuai standar.

Catatan:

....................................................................

---

## Database Review

- [ ] Query benar.
- [ ] Tidak ada query yang tidak diperlukan.
- [ ] Tidak ada data yang dapat menyebabkan inkonsistensi.

Catatan:

....................................................................

---

## Security Review

- [ ] Input divalidasi.
- [ ] Tidak ada hardcoded secret.
- [ ] Authorization sesuai requirement.
- [ ] Tidak ada kemungkinan SQL Injection.
- [ ] Tidak ada informasi sensitif pada response.

Catatan:

....................................................................

---

## Testing Review

- [ ] Unit Test berhasil.
- [ ] Integration Test berhasil.
- [ ] Acceptance Test berhasil.

Catatan:

....................................................................

---

## Potential Bugs

Tuliskan seluruh bug yang ditemukan.

| No  | Temuan | Severity | Status |
| --- | ------ | -------- | ------ |
| 1   | -      | -        | -      |

---

## Improvement Suggestion

Tuliskan saran peningkatan kualitas kode.

- ..................................................................
- ..................................................................
- ..................................................................

---

# Review Result

## Acceptance Criteria

| Acceptance Criteria         | Status |
| --------------------------- | ------ |
| Semua requirement terpenuhi | ☐      |
| Tidak ada bug kritis        | ☐      |
| Kode mudah dipahami         | ☐      |
| Coding style konsisten      | ☐      |
| Tidak ada duplikasi kode    | ☐      |
| Semua test berhasil         | ☐      |

---

# Final Decision

Pilih salah satu.

- [ ] Approve
- [ ] Request Changes

---

## Reviewer

Nama Reviewer :

Tanggal :

Pull Request :

GitHub Issue :

Branch :

Commit :

---

## Summary

Ringkasan hasil review.

....................................................................

....................................................................

....................................................................
