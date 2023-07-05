/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#2D2E32",
        blue: "#147efb",
        bgColor: "#F9F9F9",
      },
      transitionDuration: {
        '10000': '10000ms'
      }
    },
  },
  plugins: [],
};

