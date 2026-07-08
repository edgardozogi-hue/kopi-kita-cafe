# 📝 Changelog — Kopi Kita Cafe Website

Semua perubahan signifikan akan dicatat di file ini.

Format berdasarkan [Keep a Changelog](https://keepachangelog.com/) dan [Semantic Versioning](https://semver.org/).


## [1.1.0] — 2026-07-08

### Fixed
- 🐛 **Mobile menu text cut-off** — .mobile-menu width diubah dari width: 384px menjadi width: 100%; max-width: 384px
- 🍔 **Hamburger → X animation** — CSS transform (	ranslateY + rotate) + .open toggle di JS
- 🔊 **Music toggle icons** — Dari music-note SVGs menjadi speaker-wave (on) / speaker-X (off) yang lebih intuitif
- 🔄 **Inverted music logic** — play → icon speaker-wave show, pause → speaker-X show
- 📱 **Auto-close menu on scroll** — Scroll listener otomatis nutup menu saat user scroll
- ⬆️ **Hamburger z-index stacking** — position:fixed; top:16px; right:24px; z-index:70 supaya selalu di atas
- 🗂️ **Mobile menu wrapper z-index** — !z-[55] agar menu overlay di atas konten
- 🌀 **Backdrop-filter removed from navbar** — Karena ackdrop-filter bikin new containing block untuk position:fixed, bikin hamburger gak bisa diklik setelah scroll
- 👻 **Ghost shadow eliminated** — shadow-2xl dipindah dari #mobileMenuWrapper ke #mobileMenu dalam, hilangin ghost shadow di 384-768px

### Added
- 🌐 **Vercel deployment** — Live di https://kopi-kita-cafe.vercel.app
- 🚀 **GitHub repo** — github.com/edgardozogi-hue/kopi-kita-cafe (branch: master)
- 📄 **vercel.json** — Clean URLs + cache headers untuk g-music.mp3 (1 year, immutable)
- 🎵 **bg-music.mp3** — Background music file (included in deployment)

### Changed
- 📝 **Dokumentasi diperbarui** — CHANGELOG, KNOWLEDGE-BASE, README fixes
---

## [1.0.0] — 2026-07-08

### Added
- 🚀 **Project initialization** dengan PROJEKTA framework
- 🎨 **Design system lengkap** di `docs/DESIGN-SYSTEM.md`
  - Color palette warm earth tone (brand-50 sampai brand-900)
  - Typography scale (Perfect Fourth — Playfair Display + Inter)
  - Component tokens (button, card, navbar, section)
  - Animation tokens (timing, easing, scroll reveal)
  - WCAG contrast verification (AAA ✅)
- 📐 **Layout strategy:** Z-Pattern landing page
- 🖌️ **CSS variables** di `design-system/tokens.css`
- ⚙️ **Tailwind configuration** di `design-system/tailwind-config.js`
- 📖 **Dokumentasi lengkap:**
  - `docs/README.md` — Overview project & pembelajaran
  - `docs/ARCHITECTURE.md` — Integrasi 4 skill desain
  - `docs/DESIGN-SYSTEM.md` — Source of truth desain
  - `docs/WORKFLOW.md` — Step-by-step workflow
  - `docs/CHANGELOG.md` — File ini
- 🌐 **Website index.html** dengan 8 section:
  - Navbar (fixed, transparan → scrolled)
  - Hero (full-screen, gradient + overlay, particles)
  - Story (grid 2 kolom, foto, statistik)
  - Menu (3 tab interaktif: Kopi/Pastry/Signature)
  - Gallery (masonry grid, 8 foto)
  - Testimonials (3 card, 5 bintang)
  - Contact (lokasi, jam, kontak)
  - Footer (4 kolom, dark)

### Technical
- Tailwind CSS via CDN (no build step)
- Google Fonts: Playfair Display + Inter
- Mobile-first responsive
- Vanilla JS scroll reveal animations
- WCAG AA/AAA contrast compliance

### Skills Used
- SUKAI (proses desain)
- UI/UX Pro Max (database + guidelines)
- MCP Design Assistant (tools instan)
- Design System (token architecture)
- PROJEKTA (dokumentasi project)

---

## [0.1.0] — 2026-07-08

### Added
- Initial concept & design system generation
- Color palette dari MCP suggest_palette
- Typography scale dari MCP generate_type_scale
- Layout recommendation dari MCP suggest_layout

