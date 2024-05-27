/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#0b0c10',
        'primary': '#66fcf1',
        'secondary': '#45a29e',
      },
      spacing: {
        '120': '30rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
}