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
          700: "#6e3f3b",
          800: "#5a342f",
          900: "#3b221f"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(110, 63, 59, 0.35)"
      },
      borderRadius: {
        brand: "1.25rem"
      },
      fontFamily: {
        serifBrand: ["Georgia", "Times New Roman", "serif"],
        sansBrand: ["Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
