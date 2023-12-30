/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '640px',
      'lg': '1280px',
      'xl': '1920px'
    },
  },
  plugins: [],
}

