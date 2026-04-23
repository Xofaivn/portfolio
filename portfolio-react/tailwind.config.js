/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2dd4bf',   // teal-400 — aurora accent
        secondary: '#38bdf8', // sky-400 — space blue accent
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
};

