/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather"],
        oswald: ["Oswald"],
        libre: ["Libre Caslon Text", 'serif'],
        facultyglyphic: ["Faculty Glyphic"],
        italianno: ["Italianno"],
        haviland: ["Mr De Haviland"]
      },
      colors: {
        custom: {
          primary: "#740938",
          secondary: "#AF1740",
          tertiary: "#CC2B52",
          quaternary: "#DE7C7D",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

