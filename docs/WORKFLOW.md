# 📋 Workflow — Cafe Website dari Awal sampai Jadi

Dokumen ini mencatat **setiap langkah** yang dilakukan untuk membuat website Kopi Kita.
Bisa dipakai sebagai panduan step-by-step untuk project berikutnya.

---

## Timeline

| Fase | Durasi | Skill yang Dipakai |
|------|--------|-------------------|
| FASE 1: Design System | 10 menit | MCP Design Assistant + UI/UX Pro Max |
| FASE 2: Build | 5 menit (AI) | developer-prime agent |
| FASE 3: Dokumentasi | 15 menit | PROJEKTA framework |

**Total:** ~30 menit dari 0 sampai website jadi + terdokumentasi.

---

## Step-by-Step Detail

### Langkah 1: Load Skills
```bash
skill("sukai")                  # Framework proses desain
skill("ui-ux-pro-max")          # Database desain (style, color, font)
skill("mcp-design-assistant")   # Tools instan
skill("design-system")          # Token architecture
skill("projekta")               # Dokumentasi project
```

### Langkah 2: Generate Design System
Gunakan MCP tools untuk generate komponen desain:

```bash
# 2a. Color Palette
mcp-design-assistant_suggest_palette(
  seed="#8B5E3C",
  scheme="analogous",
  outputFormat="css-vars"
)

# 2b. Typography Scale
mcp-design-assistant_generate_type_scale(
  scale="perfectFourth",
  baseSize=1,
  outputFormat="css"
)

# 2c. Layout Recommendation
mcp-design-assistant_suggest_layout(
  pageType="landing",
  contentDensity="low",
  primaryGoal="conversion"
)
```

**Output:** Color palette, type scale, layout strategy.

### Langkah 3: Verifikasi Aksesibilitas
```bash
mcp-design-assistant_check_contrast(foreground="#ffffff", background="#6b482e")
mcp-design-assistant_check_contrast(foreground="#24180f", background="#f7f2ed")
```

**Output:** WCAG AA/AAA verification ✅

### Langkah 4: Generate UI Copy
```bash
mcp-design-assistant_generate_ui_copy(
  context="cafe-restaurant",
  element="button",
  tone="friendly"
)
```

**Output:** Button text siap pakai.

### Langkah 5: Build Website
Kirim spec lengkap ke developer-prime agent dengan:
- Design system (warna, font, spacing)
- Struktur halaman (8 section)
- Teknis (Tailwind CDN, responsive, animations)
- Referensi gambar Unsplash

**Output:** `index.html` (~52KB) siap buka di browser.

### Langkah 6: Dokumentasi dengan PROJEKTA
Buat folder struktur:

```
project/
├── docs/
│   ├── README.md         → Overview project & pembelajaran
│   ├── ARCHITECTURE.md   → Arsitektur integrasi skill
│   ├── DESIGN-SYSTEM.md  → ★ Design system reusable (kunci!)
│   ├── WORKFLOW.md       → Step-by-step (file ini)
│   └── CHANGELOG.md      → Riwayat versi
├── design-system/
│   ├── tokens.css         → CSS Variables
│   ├── tailwind-config.js → Tailwind config
│   └── reference.md       → Cara reuse
└── .gitignore
```

---

## Lessons Learned

### Apa yang Berhasil ✅
1. **MCP tools sangat efektif** untuk generate design system — 10 menit dapat palette + type scale + layout
2. **developer-prime agent** mampu build website kompleks dari spec yang jelas
3. **PROJEKTA framework** membuat dokumentasi jadi terstruktur dan reusable
4. **Satu sumber kebenaran (DESIGN-SYSTEM.md)** mencegah inkonsistensi

### Yang Perlu Diimprove 🔄
1. **prefers-reduced-motion** — Belum diimplementasi, perlu ditambahkan
2. **Dark mode** — Belum ada, bisa ditambahkan sebagai toggle
3. **Loading state** — Untuk gambar besar, skeleton loader akan improved UX
4. **GSAP animations** — Untuk efek yang lebih kompleks

### Tips untuk Next Project 💡
1. **Simpan DESIGN-SYSTEM.md** sebagai template — tinggal edit value
2. **Contrast check SEBELUM coding** — lebih hemat waktu
3. **State coverage (loading/empty/error)** — jangan lupa dibuat sebelum build
4. **Gambar real** — Ganti Unsplash dengan foto asli cafe

---

## Command Cheat Sheet

```bash
# Design System
suggest_palette(seed="#...", scheme="analogous", outputFormat="css-vars")
generate_type_scale(scale="perfectFourth", baseSize=1, outputFormat="css")
suggest_layout(pageType="landing", contentDensity="low", primaryGoal="conversion")

# Verifikasi
check_contrast(foreground="#fff", background="#000")
analyze_accessibility(level="standard")
design_review_checklist(type="handoff")

# Build
task(description="Build website", subagent_type="developer-prime", prompt="...")

# Dokumentasi
Dokumentasi pake PROJEKTA structure (docs/ + design-system/)
```
