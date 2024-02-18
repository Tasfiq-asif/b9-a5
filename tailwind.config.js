/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
          gridTemplateColumns: {
              '4': 'repeat(4, minmax(0, 140px))',
          }
      },
  },
  plugins: [],
}