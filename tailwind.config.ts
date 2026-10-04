import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2A5C",
          dark: "#071B3D",
          light: "#12377A"
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E3C565",
          dark: "#9C7D1A"
        }
      }
    }
  },
  plugins: []
};
export default config;
