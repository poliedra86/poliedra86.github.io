/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Custom colors matching your existing palette
        "brand-pink": "#f0a4a5",
        "brand-lightpink": "#F5E3E5",
        "brand-yellow": "#dcc742",
        "brand-teal": "#9fbfbc",
        "brand-coral": "#f0866c",
        "brand-beige": "#d8bea8",
        "brand-grey": "#707070",
        "brand-grey-2": "#7d7d7d",
        "brand-bordeaux": "#5c0220",
      },
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        "source-serif": ['"Source Serif 4"', "serif"],
      },
      fontSize: {
        10: "10rem",
        6: "6rem",
        4.5: "4.5rem",
        3.5: "3.5rem",
        2.8: "2.8rem",
        2.5: "2.5rem",
        2.2: "2.2rem",
        1.8: "1.8rem",
        1.7: "1.7rem",
        1.6: "1.6rem",
        1.4: "1.4rem",
      },
    },
  },
  plugins: [],
};
