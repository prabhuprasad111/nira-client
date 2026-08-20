/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F3FA',
          100: '#DCE4F5',
          200: '#B5C5EB',
          700: '#1C2956',
          800: '#162044',
          900: '#111936', // Primary deep navy
          950: '#0B1024',
        },
        teal: {
          50: '#EDF9FA',
          100: '#D4F1F4',
          200: '#A9E3E8',
          400: '#23B2BF',
          500: '#0C8F98',
          600: '#078C99', // Primary teal
          700: '#06717B',
          800: '#05565E',
          900: '#044047',
        },
        skybg: {
          light: '#F7FAFD', // Very light background
          soft: '#EAF4FC',  // Light blue
          card: '#FFFFFF',
          border: '#D9E8F5',
        },
        brandBlue: {
          DEFAULT: '#4D83E8',
          hover: '#3B6FD3',
          subtle: '#EDF3FC'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
        accent: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(17, 25, 54, 0.05)',
        'card': '0 10px 30px -4px rgba(17, 25, 54, 0.07)',
        'card-hover': '0 20px 40px -6px rgba(7, 140, 153, 0.12)',
        'teal-glow': '0 8px 25px -4px rgba(7, 140, 153, 0.35)',
        'navy-glow': '0 12px 30px -4px rgba(17, 25, 54, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
