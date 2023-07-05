/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#20265D',
        'yellow': '#E59D11',
        'text-secondary': '#2F3BA6',
        'blue-dark': '#131840',

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}