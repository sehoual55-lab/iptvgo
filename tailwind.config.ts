import type { Config } from "tailwindcss";

/**
 * ============================================================================
 *  IPTVGO DESIGN SYSTEM — "Aurora"
 * ============================================================================
 *  Matte-black canvas, electric teal + violet accents, soft white text and
 *  subtle aurora gradients. A brand-new identity — no legacy palette.
 * ============================================================================
 */

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./i18n/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        // Matte-black canvas
        ink: {
          950: "#05060a",
          900: "#0a0b12",
          850: "#0d0f18",
          800: "#10121c",
          700: "#181b28",
          600: "#232838",
          500: "#333a50",
          400: "#5b6480",
        },
        // Electric teal
        teal: {
          200: "#a7fbef",
          300: "#6ff2e0",
          400: "#34e7cf",
          DEFAULT: "#19d9c0",
          500: "#12b6a2",
          600: "#0d8f80",
          700: "#0b6f64",
        },
        // Violet
        violet: {
          200: "#d6ccff",
          300: "#b7a4fd",
          400: "#9a7cfb",
          DEFAULT: "#8b5cf6",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
        },
        // Soft white / mist text
        mist: {
          DEFAULT: "#eef1f8",
          400: "#c3c9d8",
          500: "#9aa2b8",
          600: "#6b7590",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 60px -16px rgba(25, 217, 192, 0.55)",
        "glow-violet": "0 0 60px -16px rgba(139, 92, 246, 0.55)",
        aurora: "0 20px 70px -24px rgba(124, 58, 237, 0.5)",
        card: "0 16px 60px -24px rgba(0, 0, 0, 0.85)",
        "card-hover": "0 30px 80px -28px rgba(25, 217, 192, 0.28)",
      },
      backgroundImage: {
        "aurora": "linear-gradient(120deg, #19d9c0 0%, #6d28d9 55%, #8b5cf6 100%)",
        "aurora-soft": "linear-gradient(120deg, rgba(25,217,192,0.9) 0%, rgba(124,58,237,0.9) 100%)",
        "teal-gradient": "linear-gradient(135deg, #6ff2e0 0%, #19d9c0 50%, #0d8f80 100%)",
        "violet-gradient": "linear-gradient(135deg, #b7a4fd 0%, #8b5cf6 50%, #6d28d9 100%)",
        "text-aurora": "linear-gradient(100deg, #6ff2e0 0%, #a7fbef 30%, #b7a4fd 70%, #8b5cf6 100%)",
        "grid-fade": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "float-slow": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-24px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "aurora-shift": {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.7" },
          "50%": { transform: "translate(6%,-4%) scale(1.15)", opacity: "1" },
        },
        "aurora-shift-2": {
          "0%,100%": { transform: "translate(0,0) scale(1.1)", opacity: "0.6" },
          "50%": { transform: "translate(-6%,5%) scale(1)", opacity: "0.9" },
        },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "pulse-ring": { "0%": { transform: "scale(1)", opacity: "0.5" }, "80%,100%": { transform: "scale(2.4)", opacity: "0" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "aurora-shift": "aurora-shift 16s ease-in-out infinite",
        "aurora-shift-2": "aurora-shift-2 20s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0,0,0.2,1) infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
