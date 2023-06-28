/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg" : 'url(../../src/assets/background.jpg)'
      },
      fontFamily : {
        one: ['Quicksand', 'sans-serif'],
        section: ['Caprasimo', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}

