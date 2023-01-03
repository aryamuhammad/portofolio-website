/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "back-dark": "#111827",
        "back-white": "#FCFCFF",
        "primary-color-dark": "#e2e7e3",
        "sec-color-dark": "#0fd3d7",
        "primary-color-white": "#2d3748",
        "sec-color-white": "#2b6bb1",
        "body-text": "3C4048",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
