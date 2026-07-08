# ☕ Kopi Kita — Specialty Coffee & Artisan Pastry

**Proyek:** Website landing page satu halaman untuk cafe premium
**Tujuan Pembelajaran:** Integrasi 4 skill desain + frontend dalam workflow solo developer
**Status:** ✅ Selesai (v1.0.0)
**Lokasi:** C:\Users\M S I\Desktop\kopi-kita-cafe\

---

## 📸 Preview

Website cafe premium dengan 8 section lengkap:
Navbar → Hero → Story → Menu → Gallery → Testimonials → Contact → Footer

---

## 🎯 Apa yang Dipelajari

### 1. Integrasi 4 Skill Framework

| Skill | Peran | Yang Dilakukan |
|-------|-------|----------------|
| **SUKAI** | Proses & alur kerja | Double Diamond, visual hierarchy, Z-pattern layout, state coverage |
| **UI/UX Pro Max** | Database desain | 10 prinsip UX, accessibility, spacing scale, typography rules |
| **MCP Design Assistant** | Tools instan | Color palette, contrast check, type scale, layout rekomendasi |
| **Design System** | Token & implementasi | 3-layer color tokens, component states, Tailwind integration |

### 2. Design Process Lengkap
1. **FASE 1: Riset** — Cari referensi cafe, tentukan brand identity
2. **FASE 2: Design System** — Generate color palette, type scale, layout
3. **FASE 3: Build** — Implementasi HTML/Tailwind dengan state coverage
4. **FASE 4: Review** — Contrast check WCAG AA/AAA, responsive testing

### 3. Teknis
- Tailwind CSS via CDN (no build step)
- Google Fonts: Playfair Display + Inter
- Mobile-first responsive design
- Scroll reveal animations (vanilla JS)
- Interaktif tab menu (Kopi/Pastry/Signature)
- WCAG AA/AAA contrast compliance ✅

---

## 🚀 Cara Pakai

Buka file langsung:
`ash
C:\Users\M S I\Desktop\kopi-kita-cafe\index.html
`

Tidak perlu npm install, tidak perlu build. Semua via CDN.

---

## 📂 Struktur Folder

`
kopi-kita-cafe/
├── index.html                 # Website utama (52KB)
├── README.md                  # File ini
├── docs/
│   ├── README.md              # Overview proyek & pembelajaran
│   ├── ARCHITECTURE.md        # Arsitektur integrasi skill
│   ├── DESIGN-SYSTEM.md       # ★ Design system reusable (color, typography, tokens)
│   ├── WORKFLOW.md            # Step-by-step workflow dari awal sampai jadi
│   └── CHANGELOG.md           # Riwayat perubahan
├── design-system/
│   ├── tokens.css             # CSS Variables siap pakai
│   ├── tailwind-config.js     # Tailwind config untuk reuse
│   └── reference.md           # Cara reuse design system ini
├── scripts/
│   └── (folder untuk script automation ke depan)
└── .gitignore
`

---

## 🎨 Design System (Ringkasan)

### Color Palette
| Token | Value | Penggunaan |
|-------|-------|------------|
| rand-50 | #f7f2ed | Background section |
| rand-100 | #f0e4db | Icon background |
| rand-500 | #b3794d | Primary accent |
| rand-600 | #8f613d | Hover states |
| rand-700 | #6b482e | Secondary text |
| rand-900 | #24180f | Heading text |
| cream | #fbf8f5 | Page background |
| gold | #c2bc70 | Gold accent |

### Typography
| Level | Font | Weight | Size (clamp) |
|-------|------|--------|--------------|
| Heading | Playfair Display | 700 | clamp(4.21rem, 0.06vw + 3.98rem, 4.86rem) |
| Body | Inter | 400 | clamp(1rem, 0.01vw + 0.95rem, 1.15rem) |

> **Lihat docs/DESIGN-SYSTEM.md untuk versi lengkap + cara reuse.**

---

## 📊 Metrik Kualitas

| Aspek | Hasil |
|-------|-------|
| Contrast Ratio (white on brown) | **8.10:1** ✅ WCAG AAA |
| Contrast Ratio (dark on cream) | **15.57:1** ✅ WCAG AAA |
| Touch Targets | Min 44x44px ✅ |
| Responsive | Mobile → Desktop ✅ |
| Loading Speed | Zero dependencies ✅ |

---

## 🔗 Skill yang Digunakan

- **SUKAI** — C:\Users\M S I\.claude\skills\sukai
- **UI/UX Pro Max** — C:\Users\M S I\.agents\skills\ui-ux-pro-max
- **MCP Design Assistant** — C:\Users\M S I\.claude\skills\mcp-design-assistant
- **Design System** — C:\Users\M S I\.claude\skills\design-system
- **PROJEKTA** — C:\Users\M S I\.claude\skills\projekta (framework dokumentasi ini)

---

## 📝 Catatan untuk Next Project

1. **Mulai selalu dari design system** — Jangan langsung coding
2. **Contrast check SEBELUM implementasi** — Mencegah redesign
3. **Simpan DESIGN-SYSTEM.md sebagai template** — Bisa dipake ulang untuk project cafe/resto lain
4. **Gunakan multi-stage build** — Kalo pake framework, Docker multi-stage
5. **Satu sumber kebenaran** — Semua token di satu file, jangan hardcode
