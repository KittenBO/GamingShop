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
    },
    fontFamily: {
      'serif': ['Playfair Display', 'serif'],
    }
  },
  plugins: [],
}

