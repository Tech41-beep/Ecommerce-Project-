/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        epunda: ['Epunda Sans', 'sans-serif'],
        kantumruy: ['Kantumruy Pro', 'sans-serif'],
      },
      colors: {
        primary: '#FF6A3D',
        secondary: '#FFC300',
        accent: '#C70039',
        green:"#28A745",
      },
    },
  },
  plugins: [],
}
