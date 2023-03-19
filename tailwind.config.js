/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'main-color' : "#FFA3FD",
        'number_button-color': '#191825',
        'operator_button_color': '#865DFF',
        'result-color': '#865DFF'
      },
      height:{
          'cal_h': '500px',
          'button_h': '340px',
      },
      width:{
          'cal_w': '300px',
      }
    },
  },
  plugins: [],
}
