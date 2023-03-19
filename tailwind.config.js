/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'main-color' : "#FFA3FD",
        'number_button-color': '#191825',
        'cal_color': '#865DFF',
        'result-color': '#865DFF'
      },
      height:{
          'cal_h': '600px',
          'button_h': '440px',
      },
      width:{
          'cal_w': '400px',
      }
    },
  },
  plugins: [],
}
