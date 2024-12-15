import('tailwindcss').Config


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: [   
      "dark", 
      "retro",
      "halloween",
      "lofi",
      "dracula",
      "forest",
      "fantasy",
      "black",
      "acid",
      "winter"
     ],
  },
}