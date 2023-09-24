/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'ink': '#040638',
      'main_dark': '#913D38',
      'main_light': '#8391B2',
      'paper': '#E5DBC0',
      'paper_dark' : '#DBCFB6',
    },
    fontFamily: {
      'cursive': 'Parisienne',
      'sans' : 'Nunito',
      'serif' : 'Lora',
    },
  },
  plugins: [],
}

