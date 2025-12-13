/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'purple-accent': '#9333ea',
        'purple-light': '#a855f7',
        'purple-dark': '#7e22ce',
      },
    },
  },
  plugins: [],
}
