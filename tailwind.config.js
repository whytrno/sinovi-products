/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03338D",
        secondary: "#4154F1",
        title: "#192A48",
        paragraph: "#444444"
      },
    },
    plugins: [],
  }
}
