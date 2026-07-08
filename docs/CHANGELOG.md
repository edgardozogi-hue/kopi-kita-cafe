# 📝 Changelog — Kopi Kita Cafe Website

Semua perubahan signifikan akan dicatat di file ini.

Format berdasarkan [Keep a Changelog](https://keepachangelog.com/) dan [Semantic Versioning](https://semver.org/).

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
