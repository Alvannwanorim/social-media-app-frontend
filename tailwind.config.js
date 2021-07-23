module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      theme: {
        colors: {},
      },
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
