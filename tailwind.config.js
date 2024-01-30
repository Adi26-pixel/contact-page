/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        strongPurple: "#4036A9",
        darkPurple: "#111729",
        lightGray: "#CDD5E0",
        offWhite: "#F8FAFC",
        transparentWhite: "#ffffff3f",
      },
      backgroundImage: {
        "bg-image": "url('/images/bg-image.svg')",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
