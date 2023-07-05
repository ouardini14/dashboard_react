/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C989DD',
        secondary:'#6DC0F9',
        neutral:'#F48888'
    },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
            },
},
  },
  plugins: [

  ],
}