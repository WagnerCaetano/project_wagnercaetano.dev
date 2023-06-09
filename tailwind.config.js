/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500",
        secondary: "#1A1205",
        backgroundSecundary: "#071421",
        backgroundDark: "#050F1A",
        text: "#C3BFBF",
        darkerText: "#807D7D",
      },
    },
    fontFamily: {
      sans: ["Inter var", "Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "ui-monospace", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
