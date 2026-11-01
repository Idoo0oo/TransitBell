---
name: karpathy-guidelines
description: Behavioral guidelines to reduce common LLM coding mistakes (Karpathy Principles). Use when planning, writing, reviewing, or refactoring code to ensure simplicity, surgical changes, clear assumptions, and verifiable success criteria.
---

# Karpathy Guidelines

Behavioral guidelines to reduce common LLM coding mistakes, derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876) on AI coding pitfalls.
*Panduan perilaku agentic coding untuk meminimalkan kesalahan umum AI.*

> Referensi lengkap dan kutipan asli Karpathy dapat dilihat di: [README.md](./references/README.md)

**Tradeoff:** Guidelines ini mengutamakan kehati-hatian daripada kecepatan (*caution over speed*).

---

## 1. Think Before Coding (Pikirkan Sebelum Menulis Kode)

**Don't assume. Don't hide confusion. Surface tradeoffs.**
- Nyatakan asumsi secara gamblang. Jika ada ketidakpastian atau multi-tafsir, tanyakan ke user terlebih dahulu.
- Sajikan opsi trade-off jika ada lebih dari satu cara implementasi.
- Jika ada solusi yang jauh lebih sederhana, sarankan ke user sebelum memulai.

## 2. Simplicity First (Utamakan Kesederhanaan)

**Minimum code that solves the problem. Nothing speculative.**
- Jangan menambahkan fitur spekulatif yang tidak diminta.
- Hindari abstraksi dini atau configurability berlebih untuk kode yang hanya dipakai sekali.
- Tulis kode seringkas dan sejelas mungkin (jika bisa 50 baris, jangan buat 200 baris).

## 3. Surgical Changes (Perubahan Presisi / Bedah)

**Touch only what you must. Clean up only your own mess.**
- Jangan mengedit atau merapikan kode/komentar di sekitarnya yang tidak relevan dengan tugas.
- Jangan refactor kode yang sudah berjalan baik.
- Bersihkan hanya orphan/variabel yang tidak terpakai akibat perubahan yang Anda buat sendiri.
- Setiap baris pada diff harus berhubungan langsung dengan permintaan user.

## 4. Goal-Driven Execution (Eksekusi Berbasis Sasaran)

**Define success criteria. Loop until verified.**
- Definisikan kriteria sukses yang terukur sebelum mengeksekusi perubahan.
- Buat rencana langkah demi langkah singkat:
  ```
  1. [Step] → verify: [check]
  2. [Step] → verify: [check]
  ```
- Verifikasi hasil akhir secara konsisten sebelum menyelesaikan pekerjaan.

