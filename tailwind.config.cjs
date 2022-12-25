/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        mainBackground: "url('/src/assets/main-castle.jpeg')"
      }),

      fontFamily:{
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}