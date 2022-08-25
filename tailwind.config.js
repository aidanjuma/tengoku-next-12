/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Tentative...
    colors: {
      white: "#ffffff",
      darkGray: "#2d333b",
    },
  },
  plugins: [],
};
