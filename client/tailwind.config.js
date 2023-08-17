/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      whiteSmoke: '#F3F3F3' /* */,
      whiteLilac: '#E8E6EA' /* input border */,
      redAmaranth: '#E94057',
      graySlate: '#505965' /* tag text */,
      labelColor: 'rgba(0, 0, 0, 0.40)',
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
      Lobster: ['Lobster', 'sans-serif'],
      NotoSans: ['Noto Sans', 'sans-serif'],
      Lora: ['Lora Variable', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.625rem', '1rem'] /* 10px */,
      s: ['0.75rem', '1rem'] /* 12px */,
      sm: ['0.875rem', '1.25rem'] /* 14px */,
      base: ['1rem', '1.5rem'] /* 16px */,
      lg: ['1.125rem', '1.75rem'] /* 18px */,
      '2xl': ['2.125rem', '3.125rem'] /* 32px*/,
      '8xl': ['6rem', '1'],
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
