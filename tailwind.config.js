/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const Myclass = plugin(function({addUtilities }){
  addUtilities({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  })
}) 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "acmw-purple": "#2D1A43",
        "acmw-light": "#D4EBFA",
        "acmw-blue": "#6DD0F7",
        "acmw-gray": "#E0E0E0",
        "acmw-pink": "#CB94DB",
      },
    },
  },
  plugins: [Myclass],
};

