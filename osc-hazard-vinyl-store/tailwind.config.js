/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/Header/NavBar/NavBar.js",
    "./public/index.html",
    "./src/Components/Header/Header.js",
    "./src/Components/Header/SearchBar/SearchBar.js",
    "./src/Components/Header/LoginSection/LoginSection.js",
  ],
  theme: {
    extend: {
      colors: {
        buttonYellow: "#FFEE57",
      },
    },
  },
  plugins: [],
};
