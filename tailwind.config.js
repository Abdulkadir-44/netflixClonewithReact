/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins, sans-serif'
      },
      colors:{
        'netfixColor':'#E50914',
        'selectItemColor':'#0F1111',
      },
      borderWidth:{
        '1':'1px',
      }
    },
  },
  plugins: [],
}