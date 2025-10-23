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
        // Light mode colors
        'cream-light': '#fff4eb',
        'cream-lighter': '#fff5ef',
        white: '#ffffff',
        'orange-primary': '#ff6b00',
        black: '#000000',
        
        // Dark mode colors
        'dark-bg': '#0f172a',         // Dark blue-gray background
        'dark-card': '#1e293b',       // Slightly lighter cards
        'dark-text': '#e2e8f0',       // Light gray text
        'dark-primary': '#f97316',    // Slightly softer orange
        'dark-secondary': '#334155',  // For borders and accents
        
        // Additional colors
        primary: '#ff6b00',
        secondary: '#fff4eb',
        dark: '#000000',
        brown: '#652A00',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'main': '#fff4eb',
        'secondary': '#fff5ef',
        'dark-main': '#0f172a',
        'dark-secondary': '#1e293b',
      },
      textColor: {
        'primary': '#ff6b00',
        'secondary': '#000000',
        'dark-primary': '#f97316',
        'dark-secondary': '#e2e8f0',
      },
    },
  },
  plugins: [],
}
