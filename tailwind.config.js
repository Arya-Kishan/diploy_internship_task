/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "Irish": ["Irish Grover", "system-ui"],
        "Roboto": ["Roboto", "sans-serif"],
      },
      "colors": {
        "btnColor1": "#75F94C",
        "btnColor2": "#6aec42",
        "txtColor0": "#17262B",
        "txtColor1": "#75F94C",
        "txtColor2": "#485256",
        "txtColor3": "#C4C7C8",
        "txtColor4": "#1F6B45",
        "brdrColor1": "#C2C2C2",
        "bgColor1": "#F7F7F7",
      },
      screens: {
        "tablet": "1000px"
      }
    },
  },
  plugins: [],
}