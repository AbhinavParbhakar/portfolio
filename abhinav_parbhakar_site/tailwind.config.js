/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        '10view':'10vw',
        '20view':'20vw',
        '30view':'30vw',
        '40view':'40vw',
        '50view':'50vw',
        '60view':'60vw',
        '70view':'70vw',
        '80view':'80vw',
        '90view':'90vw',
        '100view':'100vw',
      }
    },
  },
  plugins: [],
}
