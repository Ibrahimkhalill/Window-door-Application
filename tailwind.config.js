/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/screen/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#bbb9b9', // Corrected color key
      },
     
    },
  },
  plugins: [],
};
