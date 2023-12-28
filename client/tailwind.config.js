/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Milonga: ['Milonga', 'cursive'],
      },
      colors: {
        primary: '#072227', //for div background
        secondary: '#35858B', //main
        tertiary: '#4FBDBA', // second maximum usage
        quaternary: '#AEFEFF', //minimum usage
        quinary: '#4E4E50', //normal topic
        senary: '#686868', //normal para
        septenary: '#C1C1C1', //dark mode para
        octonary: '#A9A9A9', //About Us Para
        nonary: '#F8F8F8', //background colour
        white: '#FFFFFF',
      },
      fontSize: {
        topic: '40px',
        topicDescription: '20px',
        normal: '14px',
      }
    },
  },
  plugins: [],
}

