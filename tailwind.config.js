/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'lg': '1100px',
      },
      colors: {
        'iris-green': '#015C2D',
        'iris-green-darker': '#014021', // TODO: Fix
        'iris-green-darkest': '#002347', // TODO: Fix
        'iris-blue': '#002347',
        'iris-orange': '#FF5C00',
        'iris-orange-darker': '#CC4A00',
        'iris-orange-darkest': '#A33E05',
        'iris-supply-green': '#015C2D',
        'gray': '#344054',
        'light-gray': '#D0D5DD',
        'body-gray': '#475467',
        'icon-gray': '#F9F5FF',
        'lightest-gray': '#F9FAFB',
        'placeholder-gray': '#667085',
        'label-gray': '#101828',
      },
      fontFamily: {
        'schibsted': ['Schibsted Grotesk', 'sans-serif'],
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

