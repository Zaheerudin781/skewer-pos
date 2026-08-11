/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF', // Light mode bg
        surface: '#F8FAFC', // Off-white surface
        primary: '#0F172A', // Deep slate grey text
        accentStart: '#4facfe',
        accentEnd: '#00f2fe',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
