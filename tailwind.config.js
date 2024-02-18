/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['grid-rows-1', 'grid-rows-2', 'grid-rows-3'],
  theme: {
    container: {
      center: true,
      // screens: {
      //   sm: '540px',
      //   md: '720px',
      //   lg: '952px',
      //   xl: '1240px',
      //   '2xl': '1440px',
      // },
    },
    extend: {},
  },
  plugins: [],
};
