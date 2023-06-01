/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'af-pattern': "url('/img/footer-texture.png')",
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}

