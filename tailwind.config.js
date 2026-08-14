/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this line to enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Portfolio palette
        'cream-light': '#EAEFEF',
        'cream-lighter': '#EAEFEF',
        white: '#ffffff',
        'orange-primary': '#FF9B51',
        black: '#25343F',
        
        // Dark mode colors
        'dark-bg': '#25343F',
        'dark-card': '#30434F',
        'dark-text': '#EAEFEF',
        'dark-primary': '#FF9B51',
        'dark-secondary': '#BFC9D1',
        
        primary: '#FF9B51',
        secondary: '#BFC9D1',
        dark: '#25343F',
        brown: '#BFC9D1',
        gray: {
          50: '#F6F8F8',
          100: '#EAEFEF',
          200: '#DCE3E6',
          300: '#BFC9D1',
          400: '#98A7B2',
          500: '#748590',
          600: '#566874',
          700: '#3F505B',
          800: '#30414B',
          900: '#25343F',
          950: '#1B2730',
        },
        slate: {
          950: '#25343F',
        },
        orange: {
          50: '#FFF6EF',
          100: '#FFE9D8',
          200: '#FFD1AF',
          300: '#FFB77F',
          400: '#FF9B51',
          500: '#FF9B51',
          600: '#E87F35',
          700: '#C96329',
          800: '#A65027',
          900: '#874423',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'main': '#EAEFEF',
        'secondary': '#BFC9D1',
        'dark-main': '#25343F',
        'dark-secondary': '#30434F',
      },
      textColor: {
        'primary': '#FF9B51',
        'secondary': '#25343F',
        'dark-primary': '#FF9B51',
        'dark-secondary': '#EAEFEF',
      },
    },
  },
  plugins: [],
}
