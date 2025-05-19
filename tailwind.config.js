/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#7F56D9",       // use with bg-purple
          dark: "#6e48c4",          // optional hover color
          light: "#F9F5FF",         // optional background on click (white with tint)
        },
      },
    },
  },
  plugins: [],
};
