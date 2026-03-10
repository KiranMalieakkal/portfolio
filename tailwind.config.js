/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        background: 'var(--color-background)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        card: 'var(--color-card)',
      },
      boxShadow: {
        'accent': '0 0 40px -10px var(--color-accent)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
