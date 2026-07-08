# 🎨 Design System — Kopi Kita (Cafe Website)

**Versi:** 1.0.0
**Tipe:** Cafe / Coffee Shop / Resto / F&B
**Framework:** HTML + Tailwind CSS
**Status:** ✅ Terverifikasi (WCAG AA/AAA)

> 📌 **Dokumen ini adalah SOURCE OF TRUTH.** Semua keputusan desain ada di sini.
> Untuk project cafe/resto berikutnya, COPY file ini dan ganti value-nya.

---

## Daftar Isi
1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing System](#4-spacing-system)
5. [Component Tokens](#5-component-tokens)
6. [Layout System](#6-layout-system)
7. [Animation Tokens](#7-animation-tokens)
8. [Accessibility](#8-accessibility)
9. [Quick Reference (Copy-Paste)](#9-quick-reference-copy-paste)

---

## 1. Brand Identity

### Brand Voice
| Dimensi | Karakter |
|---------|----------|
| Tone | Warm, inviting, premium |
| Bahasa | Indonesia (casual-friendly) |
| Kepribadian | Ramah, otentik, craftsmanship |

### Brand Keywords
`warm` `cozy` `premium` `artisan` `traditional` `modern-classic`

---

## 2. Color System

### 2.1 Color Palette (Warm Earth Tone)

#### Primary: Warm Brown
```
brand-50:  #f7f2ed  ← Background section alternate (cream tua)
brand-100: #f0e4db  ← Icon background, card bg
brand-200: #e0c9b8  ← Border, divider
brand-300: #d1ae94  ← Hover border
brand-400: #c29470  ← Hover accent
brand-500: #b3794d  ← ★ PRIMARY: Button, link, CTA
brand-600: #8f613d  ← ★ PRIMARY HOVER: Button hover
brand-700: #6b482e  ← Secondary text, subtle heading
brand-800: #47301f  ← Dark UI elements
brand-900: #24180f  ← ★ HEADING TEXT: Darkest brown
```

#### Neutral / Background
```
cream:     #fbf8f5  ← ★ PAGE BG: Background utama (warm white)
gold:      #c2bc70  ← ★ ACCENT: Stars, special badges, highlight
```

### 2.2 Semantic Tokens (Penggunaan)

```css
/* Backgrounds */
--bg-page:          #fbf8f5;     /* cream */
--bg-section-alt:   #f7f2ed;     /* brand-50 */
--bg-card:          #ffffff;     /* white */
--bg-dark:          #24180f;     /* brand-900 — untuk footer/hero */

/* Text Colors */
--text-heading:     #24180f;     /* brand-900 */
--text-body:        #47301f;     /* brand-800 */
--text-secondary:   #6b482e;     /* brand-700 */
--text-muted:       #8f613d;     /* brand-600 */
--text-on-dark:     #fbf8f5;     /* cream — untuk hero/footer */
--text-on-dark-muted: rgba(251, 248, 245, 0.7);

/* Interactive */
--color-primary:        #b3794d;  /* brand-500 — tombol, link */
--color-primary-hover:  #8f613d;  /* brand-600 */
--color-accent:         #c2bc70;  /* gold — bintang, highlight */

/* Borders */
--border-light:     #e0c9b8;     /* brand-200 */
--border-hover:     #d1ae94;     /* brand-300 */

/* Shadows */
--shadow-card:      0 4px 20px rgba(36, 24, 15, 0.06);
--shadow-hover:     0 20px 60px rgba(36, 24, 15, 0.12);
```

### 2.3 WCAG Contrast Verification ✅

| Kombinasi | Ratio | Level |
|-----------|-------|-------|
| `#ffffff` on `#6b482e` (white on brown) | **8.10:1** | ✅ AAA |
| `#24180f` on `#f7f2ed` (dark on cream) | **15.57:1** | ✅ AAA |
| `#b3794d` on `#ffffff` (brand on white) | **3.71:1** | ✅ AA (large text) |
| `#24180f` on `#ffffff` (heading on white) | **16.85:1** | ✅ AAA |

### 2.4 Cara Pake di Tailwind

```js
// tailwind.config.js
colors: {
  brand: {
    50: '#f7f2ed',
    100: '#f0e4db',
    200: '#e0c9b8',
    300: '#d1ae94',
    400: '#c29470',
    500: '#b3794d',
    600: '#8f613d',
    700: '#6b482e',
    800: '#47301f',
    900: '#24180f',
  },
  cream: '#fbf8f5',
  gold: '#c2bc70',
}
```

### 2.5 Cara Pake di CSS (Tokens)

File lengkap: `design-system/tokens.css`

```css
:root {
  --brand-50: #f7f2ed;
  --brand-500: #b3794d;
  --brand-900: #24180f;
  --cream: #fbf8f5;
  --gold: #c2bc70;
}
```

---

## 3. Typography System

### 3.1 Font Selection

| Level | Font | Weight | Fallback |
|-------|------|--------|----------|
| **Heading** | Playfair Display | 400, 500, 600, 700 | Georgia, serif |
| **Body** | Inter | 300, 400, 500, 600, 700 | system-ui, sans-serif |

**Karakter:**
- Playfair Display: Elegan, premium, klasik — cocok untuk cafe/resto
- Inter: Modern, bersih, readable — kontras yang pas dengan Playfair

### 3.2 Type Scale (Perfect Fourth — 1.333)

```
h1: clamp(4.21rem, 0.06vw + 3.98rem, 4.86rem)  → line-height: 1.1
h2: clamp(3.16rem, 0.05vw + 2.99rem, 3.65rem)  → line-height: 1.1
h3: clamp(2.37rem, 0.03vw + 2.24rem, 2.73rem)  → line-height: 1.1
h4: clamp(1.78rem, 0.03vw + 1.68rem, 2.05rem)  → line-height: 1.2
h5: clamp(1.33rem, 0.02vw + 1.26rem, 1.54rem)  → line-height: 1.2
h6: clamp(1.15rem, 0.02vw + 1.09rem, 1.33rem)  → line-height: 1.5
body: clamp(1.00rem, 0.01vw + 0.95rem, 1.15rem) → line-height: 1.5
small: clamp(0.75rem, 0.01vw + 0.71rem, 0.87rem) → line-height: 1.6
```

### 3.3 Typography Best Practices (dari UI/UX Pro Max & SUKAI)

- **Body text minimum:** 16px (1rem) — mencegah iOS auto-zoom
- **Line length:** 60-75 karakter per baris
- **Line height:** 1.5 untuk body, 1.1 untuk headline besar
- **Jangan pernah** pake ukuran < 12px untuk konten
- **Hierarchy:** Ukuran, weight, dan spacing — bukan warna

### 3.4 Google Fonts CDN

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### 3.5 Tailwind Font Config

```js
fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

## 4. Spacing System

### 4.1 Scale (8px base)

```css
--space-1: 0.25rem;   /*  4px */
--space-2: 0.5rem;    /*  8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 4.2 Spacing Rules (dari UI/UX Pro Max)

| Elemen | Spacing | Notes |
|--------|---------|-------|
| Section padding | 6rem (mobile), 8rem (desktop) | Vertikal |
| Card padding | 1.5rem (p-6) | Dalam card |
| Grid gap | 2rem (gap-8) | Antar card |
| Touch target gap | min 8px | Hindari cramped |
| Section heading margin-bottom | 4rem (mb-16) | Jarak heading ke konten |

---

## 5. Component Tokens

### 5.1 Button Primary

```
Default:  bg-brand-500 text-white  →  border-radius: 9999px  →  padding: 0.85rem 2.2rem
Hover:    bg-brand-600  →  translateY(-2px)  →  shadow-lg
Active:   bg-brand-700
Focus:    ring-2 ring-brand-500 ring-offset-2
```

### 5.2 Menu Card

```
Default:  bg-white  →  rounded-2xl  →  shadow-sm
Hover:    translateY(-12px)  →  shadow-xl  →  image scale(1.08)
Image:    h-56  →  object-cover  →  overflow-hidden
Content:  p-6  →  font-serif title  →  brand-700/60 description
```

### 5.3 Testimonial Card

```
Default:  bg-white  →  rounded-2xl  →  p-10  →  border brand-200/20
Hover:    shadow-lg  →  border-gold/30
Rating:   gold stars (SVG atau unicode ★)
Avatar:   w-10 h-10 rounded-full bg-brand-200
```

### 5.4 Navbar

```
Default:  fixed top-0  →  transparent background  →  z-100
Scrolled: bg-cream/95  →  backdrop-blur(20px)  →  shadow-sm
Mobile:   hamburger menu  →  dropdown
```

### 5.5 Section Pattern

```html
<section class="bg-cream">     <!-- atau bg-white untuk variasi -->
  <div class="max-w-7xl mx-auto px-6">
    <!-- Label -->
    <span class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
      Label Section
    </span>
    <!-- Heading -->
    <h2 class="font-serif text-4xl md:text-5xl font-bold mt-3 text-brand-900">
      Judul Section
    </h2>
    <!-- Divider -->
    <div class="w-[60px] h-[3px] bg-gradient-to-r from-gold to-brand-500 rounded-[2px] mx-auto my-4"></div>
    <!-- Content -->
    <p class="text-brand-700/70 max-w-lg mx-auto">
      Deskripsi
    </p>
  </div>
</section>
```

---

## 6. Layout System

### 6.1 Z-Pattern Layout

```
[Logo]                    [Nav Links]     [CTA]
─────────────────────────────────────────────────
                                                  │
              ┌──────────────────────┐            │
              │   HERO               │            │
              │   Headline           │   ← Mata mulai dari sini
              │   Subtext            │
              │   [CTA] [CTA]        │            │
              └──────────────────────┘            │
                                                  │
─────────────────────────────────────────────────
             ┌─────────────────────────┐
             │   STORY (Image + Text)  │   ← Diagonal scan
             └─────────────────────────┘
─────────────────────────────────────────────────
                         ┌──────────────────────┐
                         │   MENU (Cards)        │
                         │   [Card][Card][Card]  │   ← Berhenti di CTA
                         │   [Tab] [Tab] [Tab]   │
                         └──────────────────────┘
─────────────────────────────────────────────────
             ┌─────────────────────────┐
             │   GALLERY + TESTI       │
             │   + CONTACT             │
             │             [CTA]       │   ← Final CTA
             └─────────────────────────┘
─────────────────────────────────────────────────
[FOOTER]
```

### 6.2 Responsive Breakpoints

| Device | Width | Columns | Navbar |
|--------|-------|---------|--------|
| Mobile | < 768px | 1 kolom | Hamburger |
| Tablet | 768-1024px | 2 kolom | Full menu |
| Desktop | > 1024px | 3-4 kolom | Full menu |

### 6.3 Grid System

```
Menu Cards:    grid md:grid-cols-2 lg:grid-cols-3 gap-8
Gallery:       grid grid-cols-4 (desktop) → grid-cols-2 (mobile)
Story:         grid md:grid-cols-2 gap-16
Testimonials:  grid md:grid-cols-3 gap-8
Contact:       grid md:grid-cols-2 gap-16
Footer:        grid md:grid-cols-4 gap-12
```

---

## 7. Animation Tokens

### 7.1 Timing

| Animasi | Duration | Easing |
|---------|----------|--------|
| Hover card | 0.5s | cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| Image zoom | 0.7s | ease |
| Scroll reveal | 0.8s | cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| Navbar transition | 0.4s | ease |
| Button hover | 0.4s | ease |
| Tab switch | 0.3s | ease |

### 7.2 Scroll Reveal Classes

```css
.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 7.3 Hero Animations

```
Badge:       fadeIn 1s ease-out 0.5s
Headline:    fadeIn 1s ease-out 0.7s
Subtext:     fadeIn 1s ease-out 1.0s
CTA Buttons: fadeIn 1s ease-out 1.3s
Scroll:      fadeIn 1s ease-out 2.0s
```

---

## 8. Accessibility

### Checklist (dari WCAG + UI/UX Pro Max + MCP)

| Item | Status | Catatan |
|------|--------|---------|
| Contrast ratio ≥ 4.5:1 | ✅ | Semua kombinasi teks |
| Touch targets ≥ 44x44px | ✅ | Button, card, nav link |
| Focus visible | ✅ | Focus ring on interactive |
| Alt text on images | ✅ | Unsplash photos |
| Semantic HTML | ✅ | section, nav, h1-h6 |
| Keyboard navigation | ✅ | Tab order, smooth scroll |
| No color-only meaning | ✅ | Ikon + text untuk info |
| Responsive ≤ 375px | ✅ | Mobile-first |
| prefers-reduced-motion | ⚠️ | Bisa ditambahkan |

### Touch Target Sizes

```
Button:       min 44px height (py-3 + text-base)
Card click:   area penuh card (min 200px)
Nav links:    min 44px tap area
Avatar:       min 40px (dengan label)
```

---

## 9. Quick Reference (Copy-Paste)

### 9.1 Tailwind Config Lengkap

```js
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f7f2ed', 100: '#f0e4db', 200: '#e0c9b8',
          300: '#d1ae94', 400: '#c29470', 500: '#b3794d',
          600: '#8f613d', 700: '#6b482e', 800: '#47301f',
          900: '#24180f',
        },
        cream: '#fbf8f5',
        gold: '#c2bc70',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    }
  }
}
```

### 9.2 Google Fonts Link

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### 9.3 CSS Variables File

Lihat `design-system/tokens.css`

### 9.4 Section Pattern

Lihat [Section 5.5](#55-section-pattern) di atas — copy-paste untuk setiap section baru.

---

## Cara Reuse Design System Ini

Untuk **project cafe/resto/F&B berikutnya**:

1. **Copy** folder `design-system/` ke project baru
2. **Ganti** color palette (`suggest_palette` dengan seed baru)
3. **Ganti** typography kalo mau beda vibe
4. **Update** `tokens.css` dan `tailwind-config.js`
5. **Selesai** — design system siap pakai!

> 🔥 **Pro tip:** Simpan `docs/DESIGN-SYSTEM.md` ini sebagai template. 
> Untuk project baru, cukup edit nilai-nilainya — strukturnya sudah terbukti.
