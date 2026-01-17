/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tr2n': ['Tr2n', 'sans-serif'],
      },
      colors: {
        // Light theme colors
        light: {
          bg: '#f5f5f5',
          text: '#1a1a1a',
          primary: '#06b6d4', // purple
          secondary: '#052bed', // cyan
          accent: '#5558F7',
        },
        // Dark theme colors
        dark: {
          bg: '#0a0a0a',
          text: '#e5e5e5',
          primary: '#FD9800', // lighter purple
          secondary: '#F8A814', // lighter cyan
          accent: '#F31414',
        }
      }
    },
  },
  plugins: [],
}

