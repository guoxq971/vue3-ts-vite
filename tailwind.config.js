module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        'blue-d': '#3b82f6',
        'bank-d': '#f0f2f5'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
