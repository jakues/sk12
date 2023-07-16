/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/component/*.{html,js}',
    './public/pages/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@catppuccin/tailwindcss'),
    require("daisyui")
  ],
  daisyui: {
    themes: ["dark", "pastel"]
  },
}