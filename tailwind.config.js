/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      brand: '#E0BEA2',
      white: '#FFFFFF', 
      dark: '#252525',
      bgColor: '#F9F9F9',    
    },
    screens: {
      xs: '100%',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl:'1200px',
    },
    extend: {},
  },
  plugins: [],
}
