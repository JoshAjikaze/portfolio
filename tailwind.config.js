/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/*.html"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        colorLight: "#a3648d",
        colorLighter: "#cbacc0",
        colorDark: "#5a0e40",
        colorDarker: "#360023",
      },
    },
  },
  plugins: [],
};
