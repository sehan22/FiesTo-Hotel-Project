/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.ts'
    ],

    theme: {
        screens: {
            xs: '300px',
            lmd: '425px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            ['2xl']: '1536px',
        },
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
                bannertopic: '60px',
                topic: '40px',
                topictwo: '20px',
                subtopic: '25px',
                topicDescription: '16px',
                normal: '14px',
                smaller: '12px',
                loginpagetopic: '18px',
            }
        },
    },
    plugins: [require('flowbite/plugin')],
}

