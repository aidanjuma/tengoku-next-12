/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      lightBlue: "#b4d9ef",
      grayedOut: "#181818b3",
    },
  },
  plugins: [],
};
