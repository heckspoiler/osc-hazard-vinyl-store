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
    "./src/Components/Body/ImageSlider/ImageSlider.js",
    "./src/Components/Body/NewsContainer/NewsContainer.js",
    "./src/Components/Body/NewsContainer/News/News.js",
    "./src/Components/Subpages/News/News.js",
    "./src/Components/Subpages/HeaderSubpages/HeaderSubpages.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        monoSpace: ["Space Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        buttonYellow: "rgba(255, 238, 87, 0.6)",
        buttonYellowHover: "rgba(255, 238, 87, 1)",
        buttonViolet: "#DC9FE7",
        violet: "violet",
        violetLowOpa: "rgba(238, 130, 238, 0.6)",
      },
      fontSize: {
        xxs: ".6rem",
        xs: ".75rem",

        sm: ".875rem",

        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",

        "3xl": "1.875rem",

        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",

        "7xl": "5rem",
      },
      borderRadius: {
        none: "0",

        sm: "0.125rem",

        "4xl": "2.5rem",

        DEFAULT: "4px",

        md: "0.375rem",

        lg: "0.5rem",

        full: "9999px",

        large: "12px",
      },
    },
  },
  plugins: [],
};
