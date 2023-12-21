/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-backdrop":
          "linear-gradient(to top right, #36393C, #141727, #141727, #141727, #141727, #141727)",
      },
      colors: {
        "gradient-color":
          "linear-gradient(to left right, #6C82CF, #7682CD, #8182C9, #8B83C6, #8F83C4)",
      },
    },
  },
  plugins: [require("daisyui")],
}

