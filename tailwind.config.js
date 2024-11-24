/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image":
          "url('./src/assets/header-image2.png')",
      },
      animation: {
        "fade-in": "fadeIn 2s forwards",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      gridTemplateColumns: {
        "auto-fill-240": "repeat(auto-fill, minmax(240px, 1fr))",
      },
    },
    plugins: [],
  },
};

