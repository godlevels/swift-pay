/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Manrope',
    },
    container: {
      padding: {
        DEFAULT: '1rem', 
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1110px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#012063',
          hover: '#021f2C',
        },
        blue: '#EAF1FF',
        sublue: '#189cab',
        orange: {
          DEFAULT: '#ed5c01',
          hover: '#e45a03',
        },
        gray: '#333333',
        graye: '#6D6E6E',
        whyte: '#ffffff'
      },
      backgroundImage: {
        test: "url('/img/testimony/bgs.svg')",
      },
    },
  },
  plugins: [],
};
