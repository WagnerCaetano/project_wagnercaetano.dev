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

        // Custom colors
        fuchsia: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
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
    'bg-fuchsia-800',
  ],
  plugins: [require('@tailwindcss/typography')],
};
