import type { Config } from "tailwindcss";

/**
 * Designsysteem
 * -------------
 * Basiskleur:   "ink"   – diep antraciet/donkerblauw (betrouwbaar, professioneel)
 * Accentkleur:  "spark" – elektrisch geel/oranje voor CTA's en highlights
 * Steunkleur:   "volt"  – helder blauw voor secundaire accenten/links
 *
 * Typografie:   Inter (sans) via next/font, geladen in app/layout.tsx
 * Spacing:      Tailwind-standaard schaal + container-padding hieronder
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f1b2d",
          50: "#f3f5f8",
          100: "#e2e8f0",
          200: "#c3cedd",
          300: "#93a6c0",
          400: "#5d77a0",
          500: "#3c5680",
          600: "#2c4063",
          700: "#1f2f49",
          800: "#16223a",
          900: "#0f1b2d",
          950: "#08111e",
        },
        spark: {
          DEFAULT: "#ffb302",
          50: "#fff8e6",
          100: "#ffeab8",
          200: "#ffd970",
          300: "#ffc73a",
          400: "#ffb302",
          500: "#e09a00",
          600: "#b87b00",
          700: "#8f5e00",
          800: "#6b4600",
          900: "#4a3000",
        },
        volt: {
          DEFAULT: "#2f80ed",
          500: "#2f80ed",
          600: "#1f6fd6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 27, 45, 0.06), 0 8px 24px -8px rgba(15, 27, 45, 0.12)",
        "card-hover":
          "0 2px 6px rgba(15, 27, 45, 0.08), 0 16px 40px -12px rgba(15, 27, 45, 0.22)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
