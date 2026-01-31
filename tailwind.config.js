/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8dc2ff',
          foreground: '#111269',
        },
        secondary: {
          DEFAULT: '#ffffff',
          foreground: '#111269',
        },
        accent: {
          DEFAULT: '#111269',
          foreground: '#ffffff',
        },
        'brand-blue': {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#8dc2ff', // Principal
          300: '#89abe6', // Other color
          400: '#7599d4',
          500: '#5a7ca8',
          600: '#405e8c',
          700: '#2a4170',
          800: '#1a2754',
          900: '#111269', // Other color (Navy)
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}