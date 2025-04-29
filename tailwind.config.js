/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': 'var(--color-navy)',
        'navy-light': 'var(--color-navy-light)',
        'teal': 'var(--color-teal)',
      },
    },
  },
  plugins: [],
}