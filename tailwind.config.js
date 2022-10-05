/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'acmw-purple': "#2D1A43",
        'acmw-light': "#D4EBFA",
        'acmw-blue': "#6DD0F7",
        'acmw-gray': "#E0E0E0",
        'acmw-pink': "#CB94DB",
      },
    },
  },
  plugins: [],
};
