/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      colors: {
        brandPink: "#EB4D8A",      // button color from your UI
        brandGreen: "#1FB57B",     // price color
        brandDark: "#1F1F1F", 
         secondary: "#0E8CFF",     // heading text
      }
    }
  },
  plugins: [],
}

