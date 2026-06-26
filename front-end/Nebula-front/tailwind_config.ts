/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C2C2A",
        secondary: "#F5F5EA",
        infobg: "#E6F1FB",
        infotext: "#0C447C",
        bgsecondary: "#F1EF8",
      },
    },
  },
  plugins: [],
}
