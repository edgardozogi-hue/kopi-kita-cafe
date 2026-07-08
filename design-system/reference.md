# 📦 Design System — Cara Reuse

Folder ini berisi design system reusable untuk project cafe/coffee shop/F&B.

## Isi Folder

| File | Fungsi |
|------|--------|
| `tokens.css` | CSS Variables — semua warna, font, spacing sebagai token |
| `tailwind-config.js` | Tailwind config — bisa di-copy ke proyek baru |

## Cara Reuse untuk Project Baru

### 1. Copy folder ini
```
copy kopi-kita-cafe/design-system/ project-baru/design-system/
```

### 2. Ganti palette warna
Buka `docs/DESIGN-SYSTEM.md`, edit bagian Color System.
Generate palette baru pake MCP:
```
mcp:suggest_palette(seed="#...", scheme="...", outputFormat="css-vars")
```

### 3. Verifikasi kontras
```
mcp:check_contrast(foreground="#...", background="#...")
```
Pastikan semua kombinasi teks ≥ 4.5:1.

### 4. Update tokens.css
Ganti nilai warna di `tokens.css` sesuai palette baru.

### 5. Update tailwind-config.js
Ganti nilai warna di `colors.brand` sesuai palette baru.

### 6. Selesai!
Design system siap digunakan. Tinggal implementasi komponen.

## Rekomendasi untuk Project F&B Lain

| Jenis Cafe | Palette Seed | Font Heading |
|------------|-------------|--------------|
| Kopi tradisional | #8B5E3C (brown) | Playfair Display |
| Cafe modern/minimal | #2D3436 (dark gray) | Inter |
| Cafe tropis | #2ECC71 (green) | DM Serif Display |
| Bakery/patisserie | #E8A87C (peach) | Cormorant Garamond |
| Cafe vintage | #8E44AD (purple) | Lora |
