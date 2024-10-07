/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        stars: 'stars 50s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        stars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-2000px 1000px' },
        },
      },
    },
  },
  plugins: [],
}