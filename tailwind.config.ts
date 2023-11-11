/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "400px",
        md: "640px",
        lg: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontSize: {
        xs: "0.75rem", // example size for extra small
        sm: "0.875rem", // example size for small
        base: "1rem", // example base size
        lg: "1.125rem", // example size for large
        xl: "1.25rem",
        "2xl": "1.5rem", // example size for extra large
      },
      lineHeight: {
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "34px",
        "10": "48px",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        gray: {
          100: "#0F1629",
          200:"#3E424A",
          300:"#768396",
        },
        blue: "#0052FE",
        white: {
          100: "#FFFFFF",
          200: "#DEDFE2",
          300: "#EFF2F5",
          400:"rgba(255, 255, 255, 0.65);"
        },
        lightBlue: "#EDF2FF",
        orange: "#FFB800",
        black: "#000000",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};
