/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{nunito:['Nunito'], grape:['Grape Nut'], cute:['Cute Font']},

    extend: {
colors: {
    DARKBG: '#000000c9',
    LIGHTBG: '#ffffff85',
    LIGHTC: '#ffffffe1',
    DARKC: '#180d0dc5',
},
    },

     fontSize: {
       sm: '0.5rem',
      base: '0.8rem',
      xl: '1rem',
      '2xl': '1.3rem',
      '3xl': '1.6rem',
      '4xl': '1.9rem',
      '5xl': '2.5rem',
     },
  },
  plugins: [],
}

