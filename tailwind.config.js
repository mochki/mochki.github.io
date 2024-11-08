/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["M-Bold", "Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        sans: ["C-Book", "Arial", "sans-serif"],
        light: ["M-Light", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
