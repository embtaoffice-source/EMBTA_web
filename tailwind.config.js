/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        embta: {
          navy: '#0A1628',
          'dark-blue': '#11203D',
          'medium-blue': '#1A2F5C',
          green: '#00C853',
          'green-glow': '#00E676',
          'green-dark': '#00A844',
          red: '#D32F2F',
          white: '#FFFFFF',
          'light-gray': '#E0E7EF',
          'medium-gray': '#90A4C8',
          'dark-gray': '#5C6E8C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [],
}