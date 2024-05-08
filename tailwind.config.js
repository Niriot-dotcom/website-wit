/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wit-blue": "#502064",
        "wit-blue": "#216583",
        "wit-green": "#3FA796",
        "wit-yellow": "#FFBD35",
        "wit-light": "#D4EBFA",
      },
    },
  },
  plugins: [Myclass],
};
