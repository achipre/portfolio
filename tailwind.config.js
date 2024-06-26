/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bowlby": ["Bowlby One", "sans-serif"],
        "paytone": ["Paytone One", "sans-serif"],
        "bebas": ["Bebas Neue", "sans-serif"],
        "amatic": ["Amatic SC", "sans-serif"]
      },
      colors: {
        "primary": "#f87664",
        "secondary": "#f5eadd"
      },
      screens: {
        "xs": {'min': '375px', 'max': '639px'},
        "md": {'min': '1024px'}
      },

    },
  },
  plugins: [],
};
