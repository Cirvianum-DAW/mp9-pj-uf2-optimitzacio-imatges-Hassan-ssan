/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'principal': '#E9EDC9',
      'secondary': '#292929',
      'highlight': {
        500: '#D4A373',
        800: '#c98541',
      },
    },
  },
  plugins: [],
};


