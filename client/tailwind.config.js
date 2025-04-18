/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      roboto: ['Roboto', 'sans-serif']
    },
    boxShadow: {
      'custom': '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    },
  },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}