/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to ensure Tailwind processes your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}

