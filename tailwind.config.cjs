/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        budarkblue: '#404168',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
