/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        mainBackground: "url('/src/assets/main-castle.jpeg')",
        charactersBackground: "url('/src/assets/grand-hall.png')",
        spellsBackground: "url('/src/assets/castle-night.jpeg')"
      }),

      fontFamily:{
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}