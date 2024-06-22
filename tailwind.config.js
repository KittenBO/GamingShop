/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:  {
      primary:"#C99FDC",
      back:"#F4EBF8",
      secondary: "#828282",
      white:"#FFFFFF",
      grayChat:"#797979",
      grayBack:"#F7F7F7",
      btnHover:"#D9C3E3",
      backgroundPages:"#E1E1E1",
    },
    fontFamily: {
      'serif': ['Playfair Display', 'serif'],
    }
  },
  plugins: [],
}

