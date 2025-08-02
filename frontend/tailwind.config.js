/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        loader:["loader"],
        nav:["nav"],
        hero:["hero"],
        subhead:["subhead"],
        logo:["logo"]
      }
    },
  },
  plugins: [],
}

