/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        error: {
          900: "#BC2522",
          800: "#CB302E",
          700: "#D93635",
          600: "#EB403C",
          500: "#F9493C",
          400: "#F45956",
          300: "#E97878",
          200: "#F29D9E",
          100: "#FFCFD4",
          50: "#FFECEF",
        },
        success: {
          900: "#005A35",
          800: "#007A4A",
          700: "#018B56",
          600: "#0B9D63",
          500: "#14AC6E",
          400: "#47B883",
          300: "#6BC598",
          200: "#97D4B5",
          100: "#C0E5D1",
          50: "#E5F5ED",
        },
        info: {
          900: "#3040A9",
          800: "#3560C9",
          700: "#3771DC",
          600: "#3984F0",
          500: "#3992FF",
          400: "#4DA2FF",
          300: "#69B3FF",
          200: "#93C8FF",
          100: "#BDDDFF",
          50: "#E4F2FF",
        },
        gray: {
          900: "#0F1218",
          800: "#2F3238",
          700: "#4D5056",
          600: "#606369",
          500: "#878A91",
          400: "#A8ABB2",
          300: "#CCD0D7",
          200: "#DFE2EA",
          100: "#EBEEF6",
          50: "#F4F7FF",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
