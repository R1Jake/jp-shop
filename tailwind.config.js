/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        primary: "#a855f7",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"]
      }
    },
  },
  plugins: [],
};