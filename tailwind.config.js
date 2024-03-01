/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        corprimaria: "#1E3A8A",
        /* mais escura que a primária */
        corsecundaria: "#274cb4",
        /* mais clara que a primária */
        corterciaria: "#305edf",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
