/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto",
      },
      screens: {
        custom: "1800px",
      },
      gridTemplateRows: {
        0: "0fr",
        1: "1fr",
      },
    },
  },
  plugins: [],
};
