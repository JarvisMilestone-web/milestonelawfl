import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060d1a",
          900: "#081527",
          800: "#0b1a2e",
          700: "#12253f",
          600: "#1a2d4a",
          500: "#24395c",
          DEFAULT: "#0b1a2e",
          light: "#1a2d4a",
        },
        gold: {
          600: "#8f701f",
          500: "#b8942e",
          400: "#c9a83e",
          300: "#d4b85a",
          200: "#e6d391",
          DEFAULT: "#b8942e",
          light: "#d4b85a",
        },
        ivory: {
          50: "#fcfaf6",
          100: "#faf8f4",
          200: "#f0ebe2",
          300: "#e5ddce",
        },
        cream: {
          DEFAULT: "#faf8f4",
          warm: "#f0ebe2",
        },
        ink: {
          900: "#131c2b",
          700: "#2b3648",
          500: "#55617a",
          400: "#74809a",
          DEFAULT: "#1a1a2e",
        },
        coastal: {
          600: "#2c5f7c",
          500: "#3d7ea6",
          100: "#e8f1f6",
        },
        success: { 600: "#1f7a4d", 100: "#e6f4ec" },
        danger: { 600: "#b3352c", 100: "#fbeae8" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(8 21 39 / 0.05), 0 8px 24px -12px rgb(8 21 39 / 0.18)",
        "card-hover": "0 2px 4px rgb(8 21 39 / 0.06), 0 16px 40px -12px rgb(8 21 39 / 0.28)",
        header: "0 1px 0 rgb(8 21 39 / 0.06), 0 8px 24px -16px rgb(8 21 39 / 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
