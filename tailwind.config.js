/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["C-Book", "Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        display: ["M-Bold", "Arial", "sans-serif"],
        light: ["M-Light", "Arial", "sans-serif"],
        japanese: ["Darts", "sans-serif"],
      },
      gridTemplateRows: {
        // Current project count
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
