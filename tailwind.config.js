/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0f1729',
        'pastel-blue': '#bfdbfe',
        'cream': '#fefdf8',
      },
      fontFamily: {
        'serif': ['EB Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}