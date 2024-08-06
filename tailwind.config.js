/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        customYellow: '#e2a400',
        customBlack: '#21243d',
      },
      borderColor: {
        customYellow: '#e2a400',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
