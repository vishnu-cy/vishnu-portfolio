import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030712",
          panel: "#0F172A",
          soft: "#1E293B",
          cyan: "#2DD4BF",
          green: "#A3E635",
          purple: "#A78BFA",
          amber: "#F59E0B",
          text: "#E5E7EB",
          muted: "#94A3B8"
        }
      },
      boxShadow: {
        glow: "0 0 55px rgba(45, 212, 191, 0.18)",
        purpleglow: "0 0 55px rgba(167, 139, 250, 0.14)"
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
};
export default config;
