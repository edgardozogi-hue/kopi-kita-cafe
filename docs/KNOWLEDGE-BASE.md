# ☕ Kopi Kita — Knowledge Base (Actual State)

> **Dokumen ini mencatat keadaan aktual website Kopi Kita.**
> Gunakan sebagai referensi utama saat melakukan perubahan — ini adalah *source of truth*.
> Berlaku per: 2026-07-08 | Versi: 1.1.0

---

## 📋 Project Overview

| Atribut | Nilai |
|---------|-------|
| **Nama** | Kopi Kita — Specialty Coffee & Artisan Pastry |
| **Tipe** | Landing page (single-file HTML) |
| **Live URL** | https://kopi-kita-cafe.vercel.app |
| **Repository** | https://github.com/edgardozogi-hue/kopi-kita-cafe |
| **Branch** | `master` |
| **Framework** | Tailwind CSS (CDN) — no build step |
| **Font** | Playfair Display (serif, headings) + Inter (sans-serif, body) — Google Fonts |
| **Images** | Unsplash (CDN, `?w=...&q=80` untuk responsive) |
| **Audio** | `bg-music.mp3` (local file, ~1.2MB) |

### File Structure (final)
```
kopi-kita-cafe/
├── index.html              # Main website (1050 lines, single-file)
├── bg-music.mp3            # Background music file
├── vercel.json             # Vercel config (cleanUrls + cache headers)
├── .gitignore
├── README.md               # Root overview
├── docs/
│   ├── README.md           # Dokumentasi pembelajaran
│   ├── ARCHITECTURE.md     # Skill integration architecture
│   ├── DESIGN-SYSTEM.md    # Design tokens & system
│   ├── WORKFLOW.md         # Step-by-step workflow
│   ├── CHANGELOG.md        # Version history
│   └── KNOWLEDGE-BASE.md   # ← File ini
└── design-system/
    ├── tokens.css
    ├── tailwind-config.js
    └── reference.md
```

---

## 🎨 Design Tokens (Tailwind CDN — used inline)

### Custom Colors
```
brand-50: #fbf8f5    (cream terang — bg utama)
brand-100: #f5eee7
brand-200: #ebdccf
brand-300: #d9bfa8
brand-400: #c2a084
brand-500: #a88165
brand-600: #8f613d
brand-700: #6b482e
brand-800: #47301f
brand-900: #24180f    (cokelat tua — teks utama)
gold: #c2bc70          (aksen emas)
cream: #fbf8f5         (alternate light)
```

### Typography Scale
| Element | Font | Size |
|---------|------|------|
| Hero headline | Playfair Display (serif) | `text-5xl md:text-7xl lg:text-8xl` |
| Section titles | Playfair Display (serif) | `text-4xl md:text-5xl lg:text-6xl` |
| Body text | Inter (sans-serif) | `text-base md:text-lg` |
| Nav links | Inter | `text-sm` |
| Badges/labels | Inter | `text-xs md:text-sm` tracking-widest uppercase |

### Key CSS (inline)
- Body bg: `#fbf8f5`
- Text color: `#24180f`
- Primary gradient: `linear-gradient(135deg, #8f613d, #6b482e)`
- Button radius: `9999px` (pill shapes)
- Transitions: `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

---

## 🧱 Sections (8 total)

| # | Section | ID | Key Content |
|---|---------|-----|-------------|
| 1 | **Hero** | `#hero` | Full-screen gradient (brand-900→800→700), overlay unsplash image, 20 floating particles, headline, CTAs, scroll indicator |
| 2 | **Story** | `#story` | 2-col grid, story text, 4 stats (20+/4/500+), photo grid with rotate effect |
| 3 | **Menu** | `#menu` | 3 interactive tabs (Kopi/Pastry/Signature), JS-rendered cards, hover lift effect |
| 4 | **Gallery** | `#gallery` | Masonry grid (4-col desktop, 2-col mobile), reveal animations |
| 5 | **Testimonials** | `#testimonials` | 3 cards, 5-star SVGs, customer reviews |
| 6 | **Contact** | `#contact` | Address, hours, Google Maps embed |
| 7 | **Footer** | `#footer` | 4-column dark footer, social icons, copyright |
| 8 | *(Navbar)* | `#navbar` | Fixed top, transparent→scrolled, desktop links + mobile hamburger |

---

## 🧠 JavaScript Behaviors (ACTUAL — source of truth)

### 1. Navbar Scroll Effect (lines 908-918)
```js
// Triggers at scrollY > 80
function handleNavScroll() {
  if (window.scrollY > 80) {
    navbar.classList.add(\"scrolled\");
    navbar.style.backgroundColor = \"rgba(255, 255, 255, 0.95)\";
  } else {
    navbar.classList.remove(\"scrolled\");
    navbar.style.backgroundColor = \"#fbf8f5\";
  }
}
window.addEventListener(\"scroll\", handleNavScroll, { passive: true });
```
- `.navbar.scrolled` CSS: `box-shadow: 0 1px 12px rgba(0,0,0,0.06)`
- **No `backdrop-filter`** — was removed because it creates new containing block for `position:fixed`

### 2. Mobile Menu (lines 919-941)
```js
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle(\"open\");
  mobileMenu.classList.toggle(\"mobile-menu-closed\");
  document.getElementById(\"mobileMenuWrapper\").classList.toggle(\"open\");
  hamburger.classList.toggle(\"open\");
}
hamburger.addEventListener(\"click\", toggleMenu);
```
- **Auto-close on link click**: setiap `.mobile-link` nutup menu
- **Auto-close on scroll**: window scroll listener calls `toggleMenu()` if open
- **CSS slide**: `translateX(100%)` → `translateX(0)` via `transform` transition

### 3. Hamburger → X Animation (CSS, lines 316-324)
```css
#hamburger.open .hamburger-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
#hamburger.open .hamburger-line:nth-child(2) { opacity: 0; }
#hamburger.open .hamburger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
```

### 4. Background Music (lines 997-1047)
```js
const savedState = localStorage.getItem(\"kopikita-music\");
function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    iconOn.classList.add(\"hidden\");      // hide speaker-wave
    iconOff.classList.remove(\"hidden\");  // show speaker-X
  } else {
    audio.play().then(() => {
      iconOn.classList.remove(\"hidden\"); // show speaker-wave
      iconOff.classList.add(\"hidden\");   // hide speaker-X
    });
  }
  isPlaying = !isPlaying;
}
```
- **Icons**: `#music-icon-on` = speaker-wave SVG, `#music-icon-off` = speaker-X SVG
- **State persists**: via `localStorage` key `\"kopikita-music\"`
- **Autoplay fallback**: jika sebelumnya \"playing\", mulai pada first user interaction (click/touch/scroll)
- **Position**: fixed bottom-right, safe-area-aware

### 5. Hero Particles (lines 945-960)
- 20 divs, random size (4-16px), random position, animate upward via CSS `@keyframes float-particle`
- Color: `rgba(194, 188, 112, 0.18)` (gold translucent)

### 6. Scroll Reveal (lines 964-980)
- IntersectionObserver, threshold 0.15, rootMargin `-40px`
- Classes: `.reveal` (fade-up), `.reveal-left`, `.reveal-right`
- Active adds: `opacity: 1; transform: translate(0,0)`

---

## 📱 Critical Z-Index Stack

| Element | Z-index | Notes |
|---------|---------|-------|
| Music toggle | `z-[9999]` | Always on top, bottom-right |
| Hamburger button | `z-[70]` | `position:fixed` — always clickable |
| Mobile menu wrapper | `!z-[55]` | Over navbar content |
| Navbar | `z-50` | Standard fixed navbar |
| Hero content | `z-10` | Above particles |
| Particles | `z-0` | Behind content |

---

## 📱 Mobile Layout Critical Details

### Hamburger Button (line 352)
```
position: fixed; top: 16px; right: 24px; z-index: 70;
```
- Visible only on `<768px` (class `md:hidden`)
- Background: `rgba(71,48,31,0.06)` with hover/active states
- 3 lines `.hamburger-line`: each `w-6 h-0.5 rounded`

### Mobile Menu Panel (lines 359-367)
```
Wrapper:  width: 384px; max-width: 100vw; pointer-events: none; overflow: hidden;
Menu:    width: 100%; max-width: 384px; bg-brand-900; pt-24; shadow-2xl
```
- **`shadow-2xl` is on inner `#mobileMenu`**, NOT on wrapper — prevents ghost shadow bleed
- Menu slides via `transform: translateX` (not `right` positioning)
- Wrapper `overflow: hidden` clips the sliding menu
- **Auto-closes on scroll**

---

## 🚀 Deployment (Vercel)

### vercel.json
```json
{ \"version\": 2, \"cleanUrls\": true,
  \"headers\": [{
    \"source\": \"/bg-music.mp3\",
    \"headers\": [{ \"key\": \"Cache-Control\", \"value\": \"public, max-age=31536000, immutable\" }]
  }]
}
```

### Deploy command: `vercel --prod` from project root
- Static site, no build step
- mp3 cached 1 year (immutable)

---

## 🐛 Fixed Issues — DO NOT REINTRODUCE

| Issue | Root Cause | Applied Fix |
|-------|-----------|-------------|
| Mobile menu text truncated on left | `width: 384px` absolute (no responsiveness) | `width: 100%; max-width: 384px` |
| Hamburger unclickable after scroll | `backdrop-filter` on navbar creates new containing block for `position:fixed` | Removed `backdrop-filter` from all navbar ancestors |
| Ghost shadow left side (384-768px) | `shadow-2xl` on wrapper with `overflow:hidden` | Moved `shadow-2xl` to inner `#mobileMenu` |
| Hamburger hidden behind content | Insufficient z-index | `position:fixed; z-index:70` |
| Music icons confusing | Music-note icon not clear for on/off state | Speaker-wave (on) / speaker-X (off) SVGs |
| Music toggle inverted | Logic: play hid icon, pause showed it | Play → speaker-wave visible, Pause → speaker-X visible |

---

## ⚠️ Development Rules (must follow)

1. **Jangan gunakan shell string-replace** (`sed`, `.Replace()`) untuk edit HTML/CSS/JS — selalu pakai file editor
2. **Jangan scope creep** — edit hanya apa yang diminta user
3. **Shared CSS selectors?** Buat class baru, jangan edit class yang dipakai banyak elemen
4. **Verifikasi setelah edit**: cek `{`/`}` balance, tag completeness, no duplicate block
5. **Jangan re-introduce `backdrop-filter`** di navbar atau ancestor-nya — itu break `position:fixed` hamburger
6. **Jangan pindah `shadow-2xl`** balik ke wrapper — itu bikin ghost shadow
7. **Setiap change harus di-verify visual** di browser (hard refresh / Ctrl+F5)

---

## 🔗 Quick Reference

| Action | Command / URL |
|--------|--------------|
| Deploy to Vercel | `vercel --prod` |
| Live site | https://kopi-kita-cafe.vercel.app |
| Repository | https://github.com/edgardozogi-hue/kopi-kita-cafe |
| Push changes | `git push origin master` |
| Music file | `./bg-music.mp3` (must be included in deploy) |
| Git log last 5 | `git log --oneline -5` |
