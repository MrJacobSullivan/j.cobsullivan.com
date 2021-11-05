const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,mdx}',
    './components/**/*.{js,mdx}',
    './theme/**/*.{js,mdx}',
    './content/**/*.{js,mdx}',
    './**/*.{mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: require('tailwindcss-open-color'),
    extend: {
      fontFamily: {
        system: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
}
