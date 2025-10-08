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
          DEFAULT: '#272d64',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#5979ad',
          foreground: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}