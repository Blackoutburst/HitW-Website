/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'from-[#dfff80]', 
        'to-[#beff00]',
        'from-[#ffe580]', 
        'to-[#ffca00]',
        'from-[#f2be90]', 
        'to-[#e67e22]',
        'from-[#ff8080]', 
        'to-[#ff0000]',
        'from-[#f880ff]', 
        'to-[#f200ff]',
        'from-[#be8dd2]', 
        'to-[#71368a]',
        'from-[#80acff]', 
        'to-[#0059ff]',
        'from-[#80d9ff]', 
        'to-[#00b3ff]',
        'from-[#80ffbe]', 
        'to-[#00ff7c]',
        'from-[#b1ff80]', 
        'to-[#63ff00]',
        'from-white',
        'to-gray-200'
    ],
    theme: {
        extend: {},
        fontFamily: {
            'coda' : ['Coda']
        },
    },
    plugins: [],
}