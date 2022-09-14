/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: '#301934',
      grey: '#B2BEB5',
      lightpurple: '#D8BFD8',
    },
    fontSize: {
      's': '8',
      'm': '16',
      'l': '28',
      'lg': '32',
      'xl': '40',
      'xxl': '48',
      '3xl': '56',
      '4xl': '64',
    },
    extend: {},
  },
  plugins: [],
}
