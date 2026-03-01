/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          800: '#7a1226',
          900: '#5c0a1a', 
        },
        gold: {
          400: '#e3c35b',
          500: '#d4af37', 
          600: '#b5952f',
        },
        ivory: {
          100: '#faf8f5', 
          200: '#f3eedf', 
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}