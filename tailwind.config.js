/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'pink': {
        '50': '#fdf2fa',
        '100': '#fce7f7',
        '200': '#fbcff0',
        '300': '#f8a9e3',
        '400': '#f373ce',
        '500': '#eb49b7',
        '600': '#dd3da2',
        '700': '#bd197c',
        '800': '#9c1866',
        '900': '#821957',
        '950': '#4f0831',
    },    
    'black':'#000000',
    'white':'#ffffff',
    'lime': {
      '50': '#fbfde8',
      '100': '#f5f9ce',
      '200': '#e9f3a3',
      '300': '#d6e865',
      '400': '#c3db40',
      '500': '#a7c121',
      '600': '#819a16',
      '700': '#627516',
      '800': '#4e5d17',
      '900': '#434f18',
      '950': '#222b08',
  },
  
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        typewriter: "typewriter 2s steps(22) forwards",
        caret: 'typewriter 2s steps(22) forwards, blink 1s steps(22) infinite 2s',

      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },

      }

      
    },
  },
  plugins: [],
};

