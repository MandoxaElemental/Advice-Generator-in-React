const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'serif']
      }
    },
  },
  plugins: [flowbite.plugin()],
}