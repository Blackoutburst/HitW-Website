/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-[#69ff00]',
    'to-[#beff00]',
    'from-[#dfff00]',
    'to-[#ffca00]',
    'from-[#e6bf22]',
    'to-[#e67e22]',
    'from-[#ff5500]',
    'to-[#ff0000]',
    'from-[#ff00b7]',
    'to-[#f200ff]',
    'from-[#8a3687]',
    'to-[#71368a]',
    'from-[#0004ff]',
    'to-[#0059ff]',
    'from-[#005eff]',
    'to-[#00b3ff]',
    'from-[#00ffd1]',
    'to-[#00ff7c]',
    'from-[#0eff00]',
    'to-[#63ff00]',
    'from-white',
    'to-gray-200'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
