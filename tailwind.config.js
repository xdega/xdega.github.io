module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '5': '5 5 0%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
