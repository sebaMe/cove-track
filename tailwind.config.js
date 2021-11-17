module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        light: '#BADFE7',
        DEFAULT: '#6FB3B8',
        dark: '#388087',
      },
      secondary: {
        DEFAULT: '#C2EDCE',
      },
      light: {
        light: '#FFFFFF',
        DEFAULT: '#F6F6F2',
      },
      dark: {
        DEFAULT: '#000000',
      },
      info: '#0099CC',
      success: '#007E33',
      warning: '#FF8800',
      danger: '#CC0000',
    },
    extend: {
      fontFamily: {
        sans: ['roboto'],
        serif: ['lato'],
        headline: ['roboto-bold'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
