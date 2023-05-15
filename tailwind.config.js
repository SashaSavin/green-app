/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
      serif: ['Montserrat', 'serif']
    },
    extend: {
      content: {
        userImg: "url('/src/assets/user.svg')",
        lockImg: "url('/src/assets/lock.svg')"
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [],
  mode: 'jit'
};
