/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        remainderbar: "rgba(199, 178, 143, 1)",
        remainderbarOffer: "rgba(196, 158, 99, 1)",
        remainderbarDiscount: "rgba(187, 123, 130, 1)",
        headerQuickStart: "rgba(187, 196, 201, 1)",
      },
    },
  },
  plugins: [],
};
