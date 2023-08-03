/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#E94057',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayishBlue: 'hsl(210, 10%, 33%)',
      grayishBlue: 'hsl(201, 11%, 66%)',
      whiteSmoke: '#F3F3F3',
      redAmaranth: '#E94057',
      labelColor: 'rgba(0, 0, 0, 0.40)',
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
    },
    fontSize: {
      sm: ['12px', '18px'],
      base: ['16px', '24px'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
