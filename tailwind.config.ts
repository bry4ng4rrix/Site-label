import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand:   "var(--brand)",
        "brand-lt": "var(--brand-lt)",
        ink:     "var(--ink)",
        paper:   "var(--paper)",
        coral:   "var(--coral)",
        gold:    "var(--gold)",
        mid:     "var(--mid)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        hero: "clamp(48px, 7vw, 96px)",
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "8px",
      },
      animation: {
        fadeup: "fadeUp 0.6s ease-out forwards",
        "fadeup-delay-1": "fadeUp 0.6s 0.1s ease-out forwards",
        "fadeup-delay-2": "fadeUp 0.6s 0.2s ease-out forwards",
        "fadeup-delay-3": "fadeUp 0.6s 0.35s ease-out forwards",
        "fadeup-delay-5": "fadeUp 0.6s 0.55s ease-out forwards",
        ticker: "ticker 28s linear infinite",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
