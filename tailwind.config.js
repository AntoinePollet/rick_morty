module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    }

  },
  variants: {
    extend: {
      backgroundColor: ['even'],
      opacity: ['hover',  'disabled'],
      hover: ['disabled'],
      ringColor: ['hover'],
      fontWeight: ['hover']
    },
  },
  plugins: [],
}
