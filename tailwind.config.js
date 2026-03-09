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
          DEFAULT: '#1a2744',
          dark: '#0f1729',
          light: '#2d3a52',
        },
        'off-white': '#fafaf8',
        'muted': '#6b7280',
        'accent': '#22c55e',
        'accent-muted': '#86efac',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
