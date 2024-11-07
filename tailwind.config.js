/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["C-Book", "Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        display: ["M-Bold", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
