/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3f3f3", // Light peach
        secondary: "#e1bee7", // Soft lilac
        accent: "#13adc7", // teal
        dark: "#000000",      // Cassie dark bg
      },
      fontFamily: {
        script: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
}

