/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./src/Components/Header/NavBar/NavBar.js",
    "./public/index.html",
    "./src/Components/Header/Header.js",
    "./src/Components/Header/SearchBar/SearchBar.js",
    "./src/Components/Header/LoginSection/LoginSection.js",
    "./src/Components/Header/LoginSection/LoginButton/LoginButton.js",
    "./src/Components/Header/LoginSection/SignupButton/SignupButton.js",
  ],
  theme: {
    extend: {
      colors: {
        buttonYellow: "rgba(255, 238, 87, 0.6)",
        buttonYellowHover: "rgba(255, 238, 87, 1)",
      },
    },
  },
  plugins: [],
};
