/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vollkorn: " 'Vollkorn', serif",
        playfair: "'Playfair Display', serif",
        "work-sans": "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
