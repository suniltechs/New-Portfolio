/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color palette based on reference site
        'cream-light': '#fff4eb',  // Light cream background
        'cream-lighter': '#fff5ef', // Even lighter cream
        white: '#ffffff',          // Pure white
        'orange-primary': '#ff6b00', // Vibrant orange
        black: '#000000',          // Pure black
        
        // You can keep these as additional colors or remove them
        primary: '#ff6b00',        // Matching orange as primary
        secondary: '#fff4eb',      // Cream as secondary
        dark: '#000000',           // Black as dark
        brown: '#652A00',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'main': '#fff4eb',         // Main background color
        'secondary': '#fff5ef',    // Secondary background
      },
      textColor: {
        'primary': '#ff6b00',      // Orange text
        'secondary': '#000000',     // Black text
      },
    },
  },
  plugins: [],
}