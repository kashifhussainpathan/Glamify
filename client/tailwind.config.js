const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
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
      transitionDuration: {
        DEFAULT: "300ms",
        2000: "2000ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      strokeWidth: {
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
