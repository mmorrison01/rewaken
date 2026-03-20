/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rewaken: {
          teal: '#3d7e8c',
          deep: '#2c5f6b',
          dark: '#1a4a55',
          light: '#5a9daa',
          pale: '#e8f4f6',
          cream: '#faf8f5',
          warm: '#f5f0ea',
          gold: '#c8a96e',
          coral: '#e07a5f',
          sage: '#7d9b76',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
