# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# TransitBell
**Version:** 1.0  
**Status:** MVP Planning  
**Platform:** Progressive Web App (PWA)  
**Target Market:** KRL Commuter Line users in Jabodetabek  
**Business Model:** Free + Voluntary Donations

---

## 1. Product Overview

### 1.1 Product Description

TransitBell adalah aplikasi Progressive Web App yang membantu pengguna transportasi umum mengingat stasiun tujuan mereka melalui sistem destination alarm berbasis lokasi perangkat.

Pengguna dapat memilih stasiun keberangkatan dan tujuan, kemudian mengaktifkan sistem pengingat perjalanan.

TransitBell memanfaatkan browser APIs untuk mengakses lokasi, mengelola suara alarm, memberikan getaran, dan mempertahankan layar aktif selama perjalanan jika perangkat mendukungnya.

### 1.2 Product Vision

Menjadi teman perjalanan digital yang membantu pengguna transportasi umum mencapai tujuan tanpa khawatir melewatkan stasiun.

### 1.3 Product Mission

Menyediakan alat pengingat perjalanan yang:
- Gratis untuk semua pengguna.
- Mudah digunakan.
- Ringan dan cepat.
- Tidak mewajibkan registrasi.
- Tidak membutuhkan backend khusus.
- Dapat digunakan dengan koneksi internet terbatas setelah data aplikasi tersedia secara lokal.

### 1.4 Product Tagline

"Never Miss Your Stop."

Alternatif:
- Your Journey, Your Reminder.
- Stay Relaxed. We'll Remind You.
- Know When to Get Off.

---

## 2. Problem Statement

Pengguna KRL sering mengalami masalah berikut:

1. Tertidur selama perjalanan.
2. Terlalu fokus menggunakan smartphone.
3. Tidak memperhatikan pengumuman stasiun.
4. Tidak hafal urutan stasiun.
5. Khawatir melewatkan stasiun tujuan.

Aplikasi navigasi umum tidak selalu memberikan pengalaman alarm perjalanan yang sederhana dan berfokus pada kebutuhan tersebut.

TransitBell menyederhanakan proses pengingat tujuan dalam satu pengalaman mobile.

---

## 3. Target Users

### Primary Users
- Pekerja yang menggunakan KRL setiap hari.
- Mahasiswa yang melakukan perjalanan menggunakan KRL.
- Pengguna KRL yang belum familiar dengan jalur perjalanan.

### User Personas

**Persona A — Daily Commuter**

- Menggunakan KRL setiap hari.
- Sering menggunakan smartphone selama perjalanan.
- Membutuhkan alarm otomatis.
- Menginginkan pengalaman cepat tanpa banyak konfigurasi.

**Persona B — Occasional Passenger**

- Tidak selalu menggunakan KRL.
- Belum hafal urutan stasiun.
- Membutuhkan informasi perjalanan yang mudah dipahami.
- Menginginkan bantuan tanpa harus membuat akun.

---

## 4. Product Goals

### Primary Goals
- Membantu pengguna mengingat stasiun tujuan.
- Menyediakan pengaturan perjalanan yang cepat.
- Mengurangi risiko pengguna melewatkan stasiun.
- Menyediakan pengalaman offline untuk fungsi inti yang memungkinkan.

### Secondary Goals
- Membangun basis pengguna organik.
- Memperoleh dukungan finansial melalui donasi.
- Mengembangkan dukungan transportasi lainnya di masa depan.

### Non-Goals for MVP
- Real-time train tracking.
- Informasi keterlambatan kereta.
- Prediksi kedatangan kereta.
- Pembelian tiket.
- User authentication.
- Social features.
- Backend dan cloud database.
- Integrasi pembayaran di dalam aplikasi.

---

## 5. Core Features

### 5.1 Station Selection

Pengguna dapat memilih:
- Stasiun asal.
- Stasiun tujuan.
- Jalur perjalanan yang relevan.

Requirements:
- Searchable station list.
- Autocomplete.
- Informasi nama dan lokasi stasiun.
- Validasi asal dan tujuan tidak boleh sama.
- Validasi arah dan rute perjalanan.
- Menampilkan urutan stasiun yang akan dilewati.

### 5.2 Journey Overview

Setelah memilih stasiun, pengguna dapat melihat:
- Stasiun keberangkatan.
- Stasiun tujuan.
- Jumlah stasiun yang dilewati.
- Urutan stasiun.
- Pengaturan alarm.

### 5.3 Location Monitoring

Menggunakan Geolocation API.

Requirements:
- Meminta izin lokasi secara kontekstual.
- Menampilkan status GPS.
- Membaca latitude dan longitude.
- Membaca accuracy.
- Menangani GPS error.
- Menghindari alarm palsu akibat GPS yang tidak stabil.

### 5.4 Destination Alarm

Alarm memiliki dua tingkat:

**Approaching Destination**
- Memberikan peringatan ketika pengguna diperkirakan mendekati tujuan.
- Menggunakan data urutan rute dan posisi GPS.

**Destination Alert**
- Memberikan alarm ketika pengguna diperkirakan sudah mendekati stasiun tujuan.

Alarm harus dapat:
- Menghasilkan suara.
- Mengaktifkan getaran jika didukung.
- Dihentikan secara manual.
- Memiliki pilihan suara.
- Mencegah pemicu alarm berulang.

### 5.5 Browser APIs

**Geolocation API**
- navigator.geolocation.watchPosition()
- High accuracy dapat diaktifkan selama perjalanan.
- Perhatikan konsumsi baterai.

**Web Audio API**
- Menghasilkan suara alarm.
- Memerlukan interaksi pengguna untuk menginisialisasi audio.
- Audio harus diuji pada berbagai browser.

**Vibration API**
- navigator.vibrate()
- Progressive enhancement.
- Tidak semua perangkat atau browser mendukungnya.

**Screen Wake Lock API**
- navigator.wakeLock.request('screen')
- Digunakan saat halaman perjalanan aktif.
- Release ketika perjalanan selesai atau halaman tidak lagi terlihat.
- Tampilkan informasi bahwa fitur ini membantu layar tetap menyala dan dapat meningkatkan konsumsi baterai.

**Service Worker**
- Cache application shell.
- Cache station data.
- Menyediakan pengalaman offline.
- Tidak digunakan sebagai continuous background GPS service.

### 5.6 Local Storage

Menggunakan IndexedDB.

Data yang disimpan:
- Favorite stations.
- Recent routes.
- User preferences.
- Alarm settings.
- Last selected journey.

Tidak memerlukan akun.

### 5.7 Donation

Menyediakan halaman dukungan developer.

Requirements:
- Link menuju Saweria.
- Tidak mengganggu perjalanan.
- Tidak mengunci fitur utama.
- Tidak menampilkan donasi secara agresif.

---

## 6. Information Architecture

Main navigation:

1. Home
2. Journey
3. Settings
4. About

### Screen 1 — Home

Purpose: Memulai perjalanan.

Components:
- Brand logo.
- Welcome message.
- Origin station selector.
- Destination station selector.
- Swap stations action.
- Recent journeys.
- Primary Start Journey button.
- Short privacy reassurance.

### Screen 2 — Journey

Purpose: Monitoring perjalanan.

Components:
- Journey progress.
- Origin and destination.
- Route timeline.
- Current estimated position.
- GPS status.
- Alarm status.
- Stop journey button.

### Screen 3 — Settings

Purpose: Mengelola preferensi.

Components:
- Alarm sound.
- Alarm volume where supported.
- Vibration toggle.
- Warning distance or station preference.
- Theme selection.
- Wake Lock preference.

### Screen 4 — About

Purpose: Informasi produk.

Components:
- Product identity.
- Product description.
- Version information.
- Privacy policy.
- Developer credits.
- Support via Saweria.

---

## 7. User Flow

### Main Journey Flow

1. User opens TransitBell.
2. User selects origin station.
3. User selects destination station.
4. System validates the selected route.
5. User previews journey.
6. User taps Start Journey.
7. App explains location permission.
8. User grants location access.
9. User confirms alarm activation.
10. System starts location monitoring.
11. System updates journey status.
12. Warning alarm is triggered when appropriate.
13. Destination alarm is triggered.
14. User stops alarm.
15. User completes journey.

### Permission Handling

Location permission must be requested only when necessary.

If permission is denied:
- Explain why location access is required.
- Provide instructions for enabling permission.
- Offer manual journey tracking as a fallback.

If Wake Lock is unavailable:
- Continue journey monitoring while the page remains active.
- Inform the user about the limitation.

---

## 8. Technical Requirements

### Frontend Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router
- Dexie.js
- vite-plugin-pwa
- Lucide React

### Architecture

Client-side only.

Data:
- Static JSON station dataset.
- Local IndexedDB storage.
- No mandatory external API.

Hosting:
- Cloudflare Pages Free.

### Proposed Project Structure

src/
- assets/
- components/
- features/
  - stations/
  - journey/
  - alarm/
  - settings/
- hooks/
- layouts/
- pages/
- services/
- stores/
- types/
- utils/

public/
- data/
- icons/
- sounds/

### Performance Requirements

- Lightweight application bundle.
- Lazy-load non-critical pages.
- Avoid unnecessary re-renders.
- Cache static assets.
- Minimize external dependencies.
- Optimize mobile rendering.

### Accessibility Requirements

- Minimum comfortable touch target of 44x44 CSS pixels.
- Readable font sizes.
- Strong color contrast.
- Visible focus indicators.
- Screen reader labels.
- Do not rely only on color to communicate status.
- Support reduced motion preferences.

---

## 9. UX/UI Design Requirements

### Visual Identity

Design direction:
Modern, minimalist, premium, friendly, functional.

Color palette:

Primary background (light): #F8FAFC  
Primary background (dark): #111827  
Surface light: #FFFFFF  
Surface dark: #1F2937  
Primary accent: #B7F34A  
Primary text light: #172033  
Primary text dark: #F9FAFB  
Secondary text: #64748B  
Error: #EF4444  
Warning: #F59E0B  
Success: #22C55E

Typography:
Inter.

Iconography:
Lucide icons.

Design principles:
- Mobile-first.
- Clear hierarchy.
- Consistent spacing.
- Generous whitespace.
- Minimal decoration.
- Functional animation only.
- No unnecessary cards.
- No excessive gradients.
- No excessive glassmorphism.
- No generic AI-generated dashboard appearance.

### Home UI

Hero:
"Where are you heading?"

Supporting text:
"Set your destination. We'll remind you when it's time to get off."

Station selector:
- From
- To
- Swap button

Primary CTA:
"Set Destination Alarm"

Secondary:
Recent journeys.

### Journey UI

Show:
- Current route.
- Destination station.
- Remaining station count.
- Progress indicator.
- GPS connection status.
- Alarm state.

Primary action:
"End Journey"

The journey screen must prioritize legibility and one-handed operation.

### Settings UI

Use simple grouped settings rather than complex dashboard cards.

### Interaction Design

- Smooth transitions.
- Clear loading indicators.
- Helpful empty states.
- Confirmation before ending a journey.
- Clear error states.
- No intrusive popups.
- Avoid excessive animations.

---

## 10. Privacy & Security

- No user registration.
- No location data sent to a personal backend.
- Location permission only when needed.
- Location processing occurs locally.
- Do not collect precise location history remotely.
- Provide a clear privacy policy.
- Provide a way to clear locally stored data.

---

## 11. Monetization

Primary model: Voluntary donation.

Platform:
Saweria.

Donation placements:
- About page.
- Settings page.
- Optional post-journey appreciation prompt.

All core features remain free.

Future monetization possibilities:
- Voluntary sponsorship.
- Community partnerships.
- Optional supporter contributions.

No intrusive advertisements in MVP.

---

## 12. MVP Acceptance Criteria

The MVP is ready for beta when:

- Users can select valid origin and destination stations.
- Correct station sequence is displayed.
- Location permission is handled correctly.
- GPS errors are communicated clearly.
- Alarm sound works after user interaction.
- Vibration works on supported devices.
- Wake Lock works on supported devices.
- Alarm does not repeatedly trigger.
- Journey can be manually stopped.
- Station data is available offline after caching.
- PWA can be installed on supported devices.
- Application works on mobile viewport sizes.
- Donation link works.
- Privacy information is accessible.

Important: Successful foreground operation does not establish reliable background operation. The PWA must explicitly communicate this limitation.

---

## 13. Product Roadmap

Phase 1: Foundation
- UI/UX.
- Station dataset.
- Station selection.
- Route validation.

Phase 2: Core Journey
- GPS monitoring.
- Alarm engine.
- Audio and vibration.
- Wake Lock.

Phase 3: PWA
- Service Worker.
- Offline cache.
- IndexedDB.
- Installation support.

Phase 4: Beta
- Device testing.
- Real-world journey testing.
- Bug fixing.
- Donation integration.
- Public release.

Phase 5: Expansion
- MRT.
- LRT.
- TransJakarta.

---

## 14. Success Metrics

Initial targets:
- 50 beta users.
- 100 tested journeys.
- 20 feedback submissions.
- 95% successful foreground alarm tests.
- First 5 voluntary donors.

Primary success metric:
Reliable destination reminders during real-world journeys.

---

## 15. Product Principles

1. Free core functionality.
2. No forced registration.
3. Privacy-first.
4. Mobile-first.
5. Reliability before feature quantity.
6. Accessibility before decoration.
7. Honest communication about browser limitations.

**TransitBell exists to make everyday commuting less stressful, one journey at a time.**