/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: '#E94D89',
        'sakura-light': '#F5939E',
        'sakura-dark': '#C23858',
        'light-bg': '#FFFFFF',
        'light-card': '#F9FAFB',
        'light-lighter': '#F3F4F6',
        'text-dark': '#1F2937',
        'text-muted': '#6B7280',
        'gold': '#D4A574',
      },
      fontFamily: {
        'jp': ['Kdam Thmor Pro', 'Noto Sans JP', 'sans-serif'],
        'serif-jp': ['Playfair Display', 'Noto Serif JP', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in-top': 'slideInTop 0.6s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
