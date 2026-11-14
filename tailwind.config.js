/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A2D91",
        secondary: "#7C4DFF",
        light: "#ECE6F7",
        text: "#1F2937",
      },
    },
  },
  plugins: [],
};
