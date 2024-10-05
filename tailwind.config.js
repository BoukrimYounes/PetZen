/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary:'#fbbc05',
        second:'#323232',
        greybackground:'#ede8e8',
      },
    },
    fontFamily: {
      paytone: ["Paytone One", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [],
}

