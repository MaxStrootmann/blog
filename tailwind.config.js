/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        xl: [
          '1.25rem',
          {
            lineHeight: '2rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
