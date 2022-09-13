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
      zenmaru: ["Zen Maru Gothic", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      offwhite: "#a9b6c3",
      background: "#1c2128",
      onBackground: "#2d333b",
      lightBlue: "#b4e5ef",
      pastelRed: "#ff6961b3",
      grayedOut: "#181818b3",
    },
  },
  plugins: [],
};
