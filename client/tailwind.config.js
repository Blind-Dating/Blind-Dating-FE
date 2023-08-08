/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      whiteSmoke: '#F3F3F3',
      redAmaranth: '#E94057',
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
      xs: ['0.75rem', '1rem'] /* 12px */,
      sm: ['0.875rem', '1.25rem'] /* 14px */,
      base: ['1rem', '1.5rem'] /* 16px */,
      lg: ['1.125rem', '1.75rem'] /* 18px */,
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
