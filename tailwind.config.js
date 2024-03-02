/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
      grape: ["Grape Nut"],
      cute: ["Cute Font"],
    },

    extend: {
      colors: {
        DARKBG: "#000000c9",
        LIGHTBG: "#ffffff85",
        LIGHTC: "#ffffffe1",
        DARKC: "#180d0dc5",
      },
    },

    fontSize: {
      sm: "0.5rem",
      base: "0.8rem",
      basesm: "1rem",
      xl: "1rem",
      xlsm: "1.2rem",
      "2xl": "1.3rem",
      "2xlsm": "1.5rem",
      "3xl": "1.6rem",
      "4xl": "1.9rem",
      "5xl": "2.5rem",
      "5xlsm": "3rem",
    },

    /*
      vanilla css file/tailwind conversion:
    --FS-S: base
    --FS: xl
    --FS-L: 2xl
    --FS-XL: 5xl */

    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
