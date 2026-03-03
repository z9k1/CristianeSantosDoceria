import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#fff4f3",
          100: "#ffe9e7",
          200: "#f7cfc8",
          300: "#f1afa5",
          400: "#eb8f82",
          500: "#e47a6d"
        },
        cocoa: {
          600: "#7b493f",
          700: "#6e3f3b",
          800: "#5a342f",
          900: "#3b221f"
        },
        sand: {
          100: "#fdfbf9",
          200: "#f7f1eb",
          300: "#f1e7df",
          400: "#e9dccf",
          500: "#e0d1c0"
        }
      },
      boxShadow: {
        soft: "0 25px 45px -25px rgba(33, 21, 16, 0.4)",
        panel: "0 20px 40px -30px rgba(33, 21, 16, 0.35)"
      },
      borderRadius: {
        brand: "1.25rem",
        soft: "1rem"
      },
      fontFamily: {
        serifBrand: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        serifDisplay: ["Cormorant Garamond", "Georgia", "serif"],
        sansBrand: ["Inter", "Segoe UI", "Helvetica", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
