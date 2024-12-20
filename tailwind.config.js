/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["C-Book", "Arial", "sans-serif"], // default
    },
    extend: {
      fontFamily: {
        display: ["M-Bold", "Arial", "sans-serif"],
        light: ["M-Light", "Arial", "sans-serif"],
        japanese: ["Darts", "sans-serif"],
      },
    },
  },
  plugins: [],
};
