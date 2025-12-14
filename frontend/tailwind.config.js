/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Satoshi",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        "purple-accent": "#9333ea",
        "purple-light": "#a855f7",
        "purple-dark": "#7e22ce",
      },
      animation: {
        "glow-path": "glowMove 8s ease-in-out infinite",
        "glow-path-delayed": "glowMove 8s ease-in-out 4s infinite",
      },
      keyframes: {
        glowMove: {
          "0%": {
            strokeDashoffset: "2000",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            strokeDashoffset: "0",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
