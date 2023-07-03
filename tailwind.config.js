const { defaultHead } = require("next/head");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      mulish: 'var(--font-mulish)',
      lora: 'var(--font-lora) var(--font-sumana) var(--font-serif)',
    },
    extend: {
      colors: {
        primary: '#FFA500',
        secondary: '#1A1205',
        backgroundSecundary: '#071421',
        backgroundDark: '#050F1A',
        text: '#C3BFBF',
        darkerText: '#807D7D',
      },
    },
  },
  safelist: [
    'bg-emerald-800',
    'bg-lime-800',
    'bg-teal-800',
    'bg-pink-800',
    'bg-purple-800',
    'bg-orange-800',
    'bg-red-800',
    'bg-stone-800',
    'bg-yellow-800',
    'bg-blue-800',
    'bg-cyan-800',
  ],
  plugins: [require('@tailwindcss/typography')],
};
