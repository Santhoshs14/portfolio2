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
        primary: "#ffeedd", // Light peach
        secondary: "#e1bee7", // Soft lilac
        accent: "#13adc7", // teal
        dark: "#232946",      // Cassie dark bg
      },
      fontFamily: {
        script: ['Pacifico', 'cursive'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
}

