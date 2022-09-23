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
      brightpurple: '#800080',
      lightblue: '#E6E6FA'
    },
    fontSize: {
      's': '8px',
      'm': '16px',
      'ml': '24px',
      'l': '28px',
      'lg': '32px',
      'xl': '40px',
      'xxl': '48px',
      '3xl': '56px',
      '4xl': '64px',
    },
    extend: {},
  },
  plugins: [],
}
