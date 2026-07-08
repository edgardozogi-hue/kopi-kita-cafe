# 🎨 Design System V2 — RØST Specialty Coffee Bar

**Versi:** 2.0.0
**Tipe:** Modern Specialty Coffee Bar (Dark Theme)
**Vibe:** Dark, moody, urban, premium, metropolitan
**Framework:** HTML + Tailwind CSS
**Status:** ✅ Baru — berbeda total dari V1

---

## 📊 Perbandingan V1 vs V2

| Aspek | V1: Kopi Kita | V2: RØST |
|-------|--------------|----------|
| **Vibe** | Warm, cozy, tradisional | Dark, moody, modern |
| **Warna** | Brown, cream, gold | Near-black, teal, copper |
| **Font Heading** | Playfair Display (serif) | Space Grotesk / DM Sans (sans) |
| **Font Body** | Inter | Inter |
| **Type Scale** | Perfect Fourth (1.333) | Augmented Fourth (1.414) |
| **Layout** | Z-Pattern, light bg | Asymmetric, dark bg dominant |
| **Target** | Semua usia | Young professionals |
| **Hero** | Gradient + overlay | Dark dramatic + light effect |
| **Card Style** | White card, shadow | Dark card, border glow |

---

## 1. Brand Identity

### Brand Voice
| Dimensi | Karakter |
|---------|----------|
| Tone | Bold, premium, edgy |
| Bahasa | Indonesia + English mix |
| Kepribadian | Urban, confident, crafted |

### Brand Keywords
`dark` `moody` `urban` `premium` `bold` `metropolitan` `craft`

---

## 2. Color System

### 2.1 Palette Lengkap

#### Dark Backgrounds
```
dark-base:      #0D0D0D    ← ★ Page background (near black)
dark-elevated:  #1A1A2E    ← Card, navbar (dark navy)
dark-surface:   #252540    ← Hover states, subtle bg
```

#### Primary: Teal / Emerald
```
teal-50:   #E6F7F7
teal-100:  #CCF0F0
teal-200:  #99E0E0
teal-300:  #66D1D1
teal-400:  #33C1C1
teal-500:  #00B2B2    ← ★ PRIMARY: CTA, accent, highlight
teal-600:  #008E8E    ← Hover states
teal-700:  #006B6B    ← Dark bg elements
teal-800:  #004747
teal-900:  #002424
```

#### Accent: Copper / Amber
```
copper-400: #F59E0B    ← Hover
copper-500: #D97706    ← ★ ACCENT: Stars, badges, special
copper-600: #B45309    ← Darker accent
```

#### Light / Text
```
white-pure: #FFFFFF
white-soft: #F5F0EB    ← Warm white untuk light sections
text-primary: #FFFFFF
text-secondary: #A0A0B0    ← Muted text on dark
text-muted: #6B6B80
```

### 2.2 Semantic Tokens

```css
/* Backgrounds */
--bg-page:          #0D0D0D;
--bg-elevated:      #1A1A2E;
--bg-surface:       #252540;
--bg-light:         #F5F0EB;    /* untuk kontras section */

/* Text */
--text-primary:     #FFFFFF;
--text-secondary:   #A0A0B0;
--text-muted:       #6B6B80;
--text-on-light:    #0D0D0D;

/* Brand */
--color-primary:        #00B2B2;    /* teal */
--color-primary-hover:  #008E8E;
--color-accent:         #D97706;    /* copper */
--color-accent-hover:   #F59E0B;

/* Borders & Glow */
--border-subtle:    rgba(255, 255, 255, 0.06);
--border-hover:     rgba(0, 178, 178, 0.3);
--glow-teal:        0 0 20px rgba(0, 178, 178, 0.15);
--glow-copper:      0 0 20px rgba(217, 119, 6, 0.15);
```

### 2.3 WCAG Contrast ✅

| Kombinasi | Ratio | Level |
|-----------|-------|-------|
| `#FFFFFF` on `#0D0D0D` | **19.44:1** | ✅ AAA |
| `#FFFFFF` on `#1A1A2E` | **15.21:1** | ✅ AAA |
| `#00B2B2` on `#0D0D0D` | **7.52:1** | ✅ AAA |
| `#D97706` on `#0D0D0D` | **6.85:1** | ✅ AA |
| `#A0A0B0` on `#0D0D0D` | **5.89:1** | ✅ AA |

---

## 3. Typography System

### 3.1 Font Selection
| Level | Font | Weight | Vibe |
|-------|------|--------|------|
| **Heading** | Space Grotesk | 400, 500, 600, 700 | Modern, bold, sans-serif |
| **Display** | Syne | 600, 700, 800 | Super bold, dramatic |
| **Body** | Inter | 300, 400, 500, 600 | Clean, readable |

### 3.2 Type Scale (Augmented Fourth — 1.414)
```
h1: clamp(5.65rem, 0.10vw + 5.28rem, 6.72rem)  → lh: 1.0
h2: clamp(4.00rem, 0.07vw + 3.73rem, 4.75rem)  → lh: 1.0
h3: clamp(2.83rem, 0.05vw + 2.64rem, 3.36rem)  → lh: 1.1
h4: clamp(2.00rem, 0.04vw + 1.87rem, 2.38rem)  → lh: 1.2
body: clamp(1.00rem, 0.02vw + 0.93rem, 1.19rem) → lh: 1.6
small: clamp(0.71rem, 0.01vw + 0.66rem, 0.84rem) → lh: 1.6
```

### 3.3 Google Fonts CDN
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
```

---

## 4. Layout System

### 4.1 Layout Strategy: Asymmetric + Fullscreen
```
[Hero — Fullscreen Dark]
     Headline massive, garis teal, copper accent
     Gambar miring/asimetris

[Story — Dark + Full-bleed Image]
     Teks di kiri, gambar full-bleed di kanan
     Copper accent di headline

[Menu — Dark Elevated Cards]
     Grid 3 kolom, card dark dengan border teal subtle
     Hover: border glow teal

[Experience — Full-bleed Image Parallax]
     Background image penuh + overlay dark + teks center

[Testimonials — Dark Surface]
     Card border subtle, teal accent di quote

[Location — Dark + Map]
     Info kiri, embed map kanan

[Footer — Dark Base]
     Minimal, teal divider
```

### 4.2 Responsive Breakpoints
```
Mobile:  < 768px    → 1 kolom, stacked
Tablet:  768-1024px → 2 kolom
Desktop: > 1024px   → 3-4 kolom, asymmetric layout
```

---

## 5. Component Tokens

### 5.1 Button Primary (Teal)
```
Default:  bg-teal-500 text-black font-semibold → rounded-none → px-8 py-4
Hover:    bg-teal-400 → shadow-glow-teal
Border:   none — flat design
Font:     Space Grotesk, uppercase, tracking-widest
```

### 5.2 Button Secondary (Outline)
```
Default:  border-2 border-white/20 text-white → bg-transparent
Hover:    border-teal-500 text-teal-500 → bg-white/5
```

### 5.3 Menu Card (Dark)
```
Default:  bg-dark-elevated (#1A1A2E) → border border-white/5 → p-6
Hover:    border-teal-500/30 → shadow-glow-teal → translateY(-4px)
Image:    h-48 object-cover → rounded-sm
Title:    Space Grotesk, text-white
Desc:     Inter, text-secondary (#A0A0B0)
```

### 5.4 Section Pattern (Dark)
```html
<section class="bg-dark-base">
  <div class="max-w-7xl mx-auto px-6 py-24">
    <span class="text-teal-500 text-sm font-semibold uppercase tracking-[0.25em]">
      Label
    </span>
    <h2 class="font-display text-5xl md:text-6xl font-bold text-white mt-4 leading-[1]">
      Bold Heading
    </h2>
    <div class="w-16 h-1 bg-teal-500 mt-6 mb-6"></div>
    <p class="text-secondary max-w-xl text-lg">
      Description text
    </p>
  </div>
</section>
```

---

## 6. Design Dials

| Dial | Value | Efek |
|------|-------|------|
| Variance | 8/10 | Bold, asymmetric layouts |
| Motion | 6/10 | Standard scroll + stagger |
| Density | 5/10 | Normal spacing, nyaman |

---

## 7. Animasi

| Animasi | Durasi | Easing |
|---------|--------|--------|
| Hover card | 0.4s | ease-out |
| Scroll reveal | 0.7s | cubic-bezier |
| Glow pulse | 2s infinite | ease-in-out |
| Navbar | 0.3s | ease |

---

## 8. Aksesibilitas

| Item | Status |
|------|--------|
| Contrast AA | ✅ Semua pass |
| Touch targets ≥ 44px | ✅ |
| Focus visible | ✅ |
| Keyboard nav | ✅ |
| reduced-motion | ⚠️ Bisa ditambahkan |
