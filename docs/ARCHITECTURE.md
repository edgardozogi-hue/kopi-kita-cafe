# 🏗️ Arsitektur Integrasi Skill

**Arsitektur bagaimana 4 skill desain bekerja bersama dalam workflow solo developer.**

---

## 1. Filosofi Integrasi

```
┌──────────────────────────────────────────────────────────────┐
│                   SUKAI (PROCESS)                             │
│         Framework desain: KAPAN & KENAPA melangkah            │
│         Double Diamond, Visual Hierarchy, HCI Laws            │
├──────────────────────────────────────────────────────────────┤
│         ↓ membagi workflow ke fase-fase ↓                     │
├──────────────────┬──────────────────┬───────────────────────┤
│  UI/UX PRO MAX   │ MCP DESIGN AST.  │   DESIGN SYSTEM        │
│  (Database)      │ (Tools/Eksekusi) │   (Implementasi)       │
│  50+ styles      │ Palette gen      │   3-layer tokens       │
│  161 palettes    │ Contrast check   │   Component specs      │
│  57 font pairs   │ Type scale       │   Tailwind config      │
│  99 UX rules     │ Layout rekomend  │   Slide system         │
│  25 chart types  │ UI copy gen      │   CSS variables        │
│  CLI search      │ Aksesibilitas    │                        │
└──────────────────┴──────────────────┴───────────────────────┘
```

## 2. Alur Kerja Lengkap (dari Cafe Project)

```
FASE 1: RISET & BRAINSTORMING
├── SUKAI Section 1.1  → SCAMPER, HMW, Worst Possible Idea
├── SUKAI Section 1.2  → Double Diamond, JTBD, Kano Model
├── MCP Design Ast.    → search_references (cari inspirasi cafe)
└── Output: Problem statement, referensi visual

FASE 2: INFORMATION ARCHITECTURE
├── SUKAI Section 3.2  → Sitemap, User Flow
├── SUKAI Section 2.3  → Visual Hierarchy
├── MCP Design Ast.    → suggest_layout (Z-Pattern)
└── Output: Layout strategy, navigation structure

FASE 3: DESIGN SYSTEM
├── MCP Design Ast.    → suggest_palette (color palette)
├── MCP Design Ast.    → generate_type_scale (typography)
├── MCP Design Ast.    → check_contrast (WCAG verification)
├── Design System      → 3-layer tokens (primitive → semantic → component)
├── UI/UX Pro Max      → domain style, domain color (data lookup)
└── Output: DESIGN-SYSTEM.md lengkap dengan tokens

FASE 4: HIGH-FIDELITY DESIGN
├── SUKAI Section 3.3  → Wireframing structure
├── UI/UX Pro Max      → Quick Reference Section 1-10 (semua rule)
├── MCP Design Ast.    → generate_ui_copy (button text, error msg)
└── Output: Desain final siap coding

FASE 5: BUILD
├── HTML + Tailwind    → Implementasi berdasarkan design system
├── SUKAI Section 4.2  → State coverage (loading, empty, error, success)
├── Design System      → Tailwind integration
└── Output: index.html siap pakai

FASE 6: REVIEW & ITERASI
├── MCP Design Ast.    → analyze_accessibility (a11y audit)
├── MCP Design Ast.    → design_review_checklist (handoff check)
├── UI/UX Pro Max      → Pre-Delivery Checklist
└── Output: Final sign-off
```

## 3. Command Flow (Yang Dieksekusi)

```
# Step 1: Design System Generation
mcp:suggest_palette(seed="#8B5E3C", scheme="analogous", outputFormat="css-vars")
mcp:generate_type_scale(scale="perfectFourth", baseSize=1, outputFormat="css")
mcp:suggest_layout(pageType="landing", contentDensity="low", primaryGoal="conversion")
mcp:search_references(query="cafe coffee shop website", maxResults=3)

# Step 2: Kontras & Aksesibilitas
mcp:check_contrast(foreground="#ffffff", background="#6b482e")
mcp:check_contrast(foreground="#24180f", background="#f7f2ed")

# Step 3: UI Copy
mcp:generate_ui_copy(context="cafe-restaurant", element="button", tone="friendly")

# Step 4: Build dengan Task Agent
developer-prime → Build complete website dari spec

# Step 5: Dokumentasi dengan PROJEKTA
Dokumentasi lengkap di docs/ folder
```

## 4. Kapan Pake Skill Apa?

| Situasi | Skill Utama | Skill Pendukung |
|---------|-------------|-----------------|
| Brainstorm ide | SUKAI SCAMPER | — |
| Nentuin problem | SUKAI Double Diamond | — |
| Pilih style produk | UI/UX Pro Max domain style | MCP search_references |
| Generate palette | MCP suggest_palette | UI/UX Pro Max domain color |
| Cek kontras | MCP check_contrast | UI/UX Pro Max Section 1 |
| Type scale | MCP generate_type_scale | Design System token |
| Layout pages | MCP suggest_layout | SUKAI Visual Hierarchy |
| Component specs | Design System | UI/UX Pro Max Quick Ref |
| UX copywriting | MCP generate_ui_copy | SUKAI UX Writing |
| Design review | MCP design_review_checklist | SUKAI Heuristic Eval |
| Build website | developer-prime / developer-fast | — |
| Dokumentasi | PROJEKTA | — |

## 5. Pola yang Bisa Diulang

### Pattern: Generate > Verify > Implement
```
1. GENERATE: MCP tools → output desain
2. VERIFY: Contrast check, accessibility audit
3. IMPLEMENT: Build dengan design system sebagai source of truth
```

### Pattern: Satu Sumber Kebenaran
```
docs/DESIGN-SYSTEM.md  ← SEMUA token dan keputusan desain
       ↓
design-system/tokens.css  ← CSS variables otomatis dari DS
design-system/tailwind-config.js  ← Tailwind config dari DS
index.html  ← Pake token dari DS (no hardcode!)
```

## 6. Dependency Graph

```
DESIGN-SYSTEM.md
├── Color Palette     (dari MCP suggest_palette)
├── Typography Scale  (dari MCP generate_type_scale)
├── Layout Strategy   (dari MCP suggest_layout + SUKAI)
├── Component Tokens  (dari Design System Skill)
├── WCAG Verification (dari MCP check_contrast)
└── UI Copy           (dari MCP generate_ui_copy)
       ↓
tokens.css + tailwind-config.js
       ↓
index.html (implementasi)
       ↓
docs/ (dokumentasi PROJEKTA)
```
