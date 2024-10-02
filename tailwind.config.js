/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#1e3a8a', // dark blue
        'space-purple': '#4f46e5', // purple
        'space-black': '#000000', // black
      },
    },
  },
  plugins: [],
}

