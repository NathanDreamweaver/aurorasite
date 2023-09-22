/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'display': ['Comic Sans MS', 'Arial', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

