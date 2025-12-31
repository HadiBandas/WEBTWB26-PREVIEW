/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D5F4C',
          dark: '#1F4A38',
          green: '#2D6A4F',
        },
        terracotta: '#C87E5B',
        gold: '#C8A95B',
        'sand-light': '#F7F3E9',
        whatsapp: '#25D366',
        success: '#008A05',
        error: '#C13515',
        gray: {
          50: '#F7F7F7',
          100: '#EBEBEB',
          400: '#B0B0B0',
          600: '#717171',
          900: '#222222',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.08)',
        'md': '0 2px 8px rgba(0,0,0,0.12)',
        'lg': '0 6px 20px rgba(0,0,0,0.15)',
        'xl': '0 12px 40px rgba(0,0,0,0.18)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
      spacing: {
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        slowZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
