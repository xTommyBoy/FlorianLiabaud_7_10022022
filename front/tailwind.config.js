const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      raw1: '870px',
      // => @media (min-width: 870px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      raw2: '1450px',
      // => @media (min-width: 1450px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      raw3: '1590px',
      // => @media (min-width: 1590px) { ... }

      raw4: '1750px',
      // => @media (min-width: 1750px) { ... }

      raw5: '1900px',
      // => @media (min-width: 1900px) { ... }

      hiddenWidget: '2000px',
      // => @media (min-width: 2000px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
