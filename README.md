# ☕ Kopi Kita — Specialty Coffee & Artisan Pastry

**Website landing page premium untuk cafe.** Dibangun dengan integrasi 4 skill desain + frontend.

🌐 **Live:** https://kopi-kita-cafe.vercel.app
📦 **Repo:** https://github.com/edgardozogi-hue/kopi-kita-cafe

## 📁 Struktur

```
kopi-kita-cafe/
├── index.html              # Website utama (1050 baris, single-file)
├── bg-music.mp3            # Background music
├── vercel.json             # Vercel deployment config
├── docs/
│   ├── README.md           # Overview & pembelajaran
│   ├── ARCHITECTURE.md     # Arsitektur integrasi skill
│   ├── DESIGN-SYSTEM.md    # Design system reusable
│   ├── WORKFLOW.md         # Step-by-step workflow
│   ├── CHANGELOG.md        # Riwayat versi
│   └── KNOWLEDGE-BASE.md   # ★ Aktual state (referensi utama agent)
├── design-system/
│   ├── tokens.css          # CSS variables siap pakai
│   ├── tailwind-config.js  # Tailwind config untuk reuse
│   └── reference.md        # Cara reuse DS ini
└── .gitignore
```

## 🚀 Cara Jalanin

- **Local:** Buka `index.html` di browser (no build step)
- **Production:** https://kopi-kita-cafe.vercel.app

## 🛠️ Stack

- Tailwind CSS (CDN) — no build step
- Playfair Display + Inter (Google Fonts)
- Vanilla JavaScript
- Unsplash Images (CDN)
- Vercel (deployment)

## 📚 Dokumentasi

| File | Isi |
|------|-----|
| `docs/KNOWLEDGE-BASE.md` | **★ Actual state** — source of truth untuk OpenCode agent |
| `docs/README.md` | Overview project & pembelajaran |
| `docs/ARCHITECTURE.md` | Arsitektur integrasi 4 skill desain |
| `docs/DESIGN-SYSTEM.md` | Color palette, typography, tokens lengkap |
| `docs/WORKFLOW.md` | Step-by-step workflow pembuatan |
| `docs/CHANGELOG.md` | Riwayat versi & changelog |

## 🎨 Design System

Lihat `docs/DESIGN-SYSTEM.md` untuk color palette, typography, tokens lengkap.

## 📦 Quick Reference

```bash
# Deploy ke Vercel
vercel --prod

# Push ke GitHub
git push origin master

# Cek log
git log --oneline -5
```
