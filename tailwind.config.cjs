/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'mont':['Montserrat']
    },
    extend: {
      padding:{
        '1/3':'33.33333%',
        '2/3':'66.66667%'
      },
      aspectRatio: {
        'banner': '5/2',
        'bannerXs':'6/2'
      },
      colors:{
        'primary':'#0CAFAE',
        'secondary': '#0E316B',
        'mygray': '#3E3E3E'
      },
    },
  },
  plugins: [],
}
