/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  safelist:[
    'bg-green-300',
    'bg-red-300',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
