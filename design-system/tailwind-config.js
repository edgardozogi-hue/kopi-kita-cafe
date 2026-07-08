/** 
 * 🎨 Kopi Kita — Tailwind Configuration
 * Versi: 1.0.0
 * 
 * Copy-paste ini ke tailwind.config atau ke inline script di HTML
 */

// ====== UNTUK CDN (inline di HTML) ======
/*
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
*/

// ====== UNTUK PROYEK DENGAN BUILD STEP (postcss) ======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
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
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
