module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js}', './components/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: require('tailwindcss-open-color'),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
