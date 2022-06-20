/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        badgeTxt: "#1d1d1d",
        headerBg: "#252424",
        cartBg: "#313131",
        itemBg: "#575757",
        buttonHoverBg: "#4b4b4b",
        cian: "#1ad1b9",
        itemTxt: "#3a3a3a",
        productButtonTx: "#1a8ed1",
        productButtonHover: "#1ac5d1",
      },
    },
    plugins: [],
  },
};
