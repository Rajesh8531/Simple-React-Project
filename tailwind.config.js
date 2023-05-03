/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend:{
      backgroundImage: {
      'pattern': "url('https://www.transparenttextures.com/patterns/cream-pixels.png')",
      'diamond-pattern' : "url('https://www.transparenttextures.com/patterns/cubes.png')",
      'pattern-two' : "url('https://www.transparenttextures.com/patterns/escheresque.png')"
    },colors: {
      'regal-blue': '#00238c',
    },
  },
  },
  plugins: [],
}

