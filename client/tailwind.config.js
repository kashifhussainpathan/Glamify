/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#6366f1",
      },
      boxShadow: {
        small: "0px 4px 8px rgba(35, 38, 59, 0.25)",
        medium: "0px 8px 16px rgba(35, 38, 59, 0.25)",
        large: "0px 12px 32px rgba(35, 38, 59, 0.25)",
      },
    },
  },
  plugins: [],
};
