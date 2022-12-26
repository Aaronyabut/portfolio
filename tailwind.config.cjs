/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purpleish': '#3d3244',
        'pinkish': '#ff79c6',
        'blueish': '#3c3e48',
        'whiteish': '#d2d3d0',
        'transparent': 'transparent'
      },
      spacing: {
        '50': '14rem',
        '120': '28rem',
        '124': '30rem',
        '126': '31rem',
        '128': '32rem',
        '140': '37rem',
        '150': '45rem',
        '160': '53rem',
      },
      zIndex: {
        '500': '500',
        '1000': '1000',
      },
      width: {
        '1000': '62.5rem',
        '1100': '68.75rem',
        '1200': '86rem',
        '500': '31.25rem',
        '992': '62rem',
      },
      height: {
        '500': '31.25rem',
        '600': '41.25rem',
        '700': '52rem',
        '800': '61.25rem',
        '900': '71.25rem',
        '1000': '83rem',
      },
      minHeight: {
        '500': '31.25rem',
      },
      backgroundImage: {
        'temp-img': "url(https://source.unsplash.com/collection/905011/1000x1000)",
        'RRR': "url(https://iso.500px.com/wp-content/uploads/2017/07/stock-photo-219973977-960x1000.jpg)",
        'RR': "url(https://user-images.githubusercontent.com/85593147/195161074-67c2a670-1921-49d8-b39b-9b177d456358.gif)",
        'SDC': "url('./SDC1.png')",
        'FEC': "url(https://user-images.githubusercontent.com/85593147/195180939-94924853-4102-4c5d-a78b-7f81322a840b.gif)",
      },
      boxShadow: {
        '3xl': '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
      },
      fontSize: {
        2.5: '2.7rem',
      },
      padding: {
        'desc': '0 24px 24px',
      },
    },
  },
  plugins: [],
}
