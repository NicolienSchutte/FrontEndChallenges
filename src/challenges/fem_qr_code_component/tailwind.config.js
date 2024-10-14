/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cDarkBlue': 'hsl(218, 44%, 22%)',
        'cLightGray': 'hsl(212, 45%, 89%)',
        'cGrayishBlue': 'hsl(220, 15%, 55%)'
      },
      fontFamily: {
        outfit: ['Outfit']
      },
    },
  },
  plugins: [],
};