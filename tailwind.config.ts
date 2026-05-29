import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d8efff",
          500: "#1497e8",
          600: "#087bd0",
          700: "#075fa8",
        },
        ink: "#172033",
        mint: "#17b890",
        coral: "#ff6f61",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(20, 151, 232, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
