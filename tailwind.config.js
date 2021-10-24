const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js}', './components/**/*.{js}', './theme/**/*.{js}'],
  darkMode: 'class',
  theme: {
    colors: require('tailwindcss-open-color'),
    extend: {
      fontFamily: {
        system: [...defaultTheme.fontFamily.sans],
      },
    },
  },
}
