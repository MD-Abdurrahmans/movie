/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors:{

        'primary':'#BE123C',
        'basic': '#FAF5FF',
        'grays': '#A1A1AA'
      }
    },
  },
  plugins: [require("daisyui")],
}

