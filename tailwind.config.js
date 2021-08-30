module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class", // or 'media' or 'class' or false
  theme: {
    fontFamily: { mono: ["Space Mono", "monospace"] },
    extend: {
      colors: {
        "dark-blue": "#4b6a9b",
        "light-blue": "#0079ff",
        "hover-blue": "#60ABFF",
        "dark-gray": "#697c9a",
        "light-gray": "#f6f8ff",
        "light-black": "#2b3442",
        "dark-black": "#141d2f",
        "fainting-light": "#1E2A47",
      },
      boxShadow: {
        "3xl": "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
