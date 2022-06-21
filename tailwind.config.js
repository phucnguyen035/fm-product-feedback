/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: {
      black: '#000000',
      pink: '#AD1FEA',
      blue: '#4661E6',
      sky: '#62BCFA',
      white: '#FFFFFF',
      orange: '#F49F85',
      red: '#D73737',
      navy: {
        light: '#3A4374',
        DEFAULT: '#373F68',
      },
      gray: {
        light: '#F7F8FD',
        DEFAULT: '#F2F4FF',
        dark: '#647196',
      },
    },
    extend: {
      fontSize: {
        h1: ['24px', { lineHeight: '35px', letterSpacing: '-0.33px' }],
        h2: ['20px', { lineHeight: '29px', letterSpacing: '-0.25px' }],
        h3: ['18px', { lineHeight: '26px', letterSpacing: '-0.25px' }],
        h4: ['14px', { lineHeight: '20px', letterSpacing: '0.2px' }],
        body1: ['16px', '23px'],
        body2: ['15px', '22px'],
        body3: ['13px', '19px'],
      },
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
