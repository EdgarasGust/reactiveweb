/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "'Work Sans', sans-serif",
      // sans: "Roboto Mono, monospace",
      // sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
