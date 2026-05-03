import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#09090B",
        charcoal: "#111113",
        cream: "#F6F0E8",
        sand: "#D8BE8F",
        gold: "#C9A96E",
        sage: "#A9B59F",
        wine: "#6F2E46"
      },
      boxShadow: {
        glow: "0 0 80px rgba(201, 169, 110, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
