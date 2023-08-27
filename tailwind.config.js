/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         backgroundImage: {
            main: "url('./assets/blankbackground.jpg')",
         },
         fontFamily: {
            futura: ['Futura', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
