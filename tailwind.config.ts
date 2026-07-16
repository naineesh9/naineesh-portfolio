import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6F8",
        panel: "#FFFFFF",
        ink: "#14161A",
        muted: "#6B7280",
        line: "#E3E5EA",
        accent: "#2F5AF5",
        accentDim: "#EDF1FE",
        signal: "#2BB673",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};
export default config;
