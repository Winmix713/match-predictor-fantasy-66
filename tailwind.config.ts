
import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Football UI specific colors
        team: {
          red: "#ff3d41",
          blue: "#2196f3",
          yellow: "#FFD700",
          green: "#4caf50",
          purple: "#9C27B0"
        },
        league: {
          epl: "#37003C",
          laliga: "#133772",
          bundesliga: "#d20515",
          seriea: "#008fd7",
          ligue1: "#091c3e"
        },
        chart: {
          blue: "#2196f3",
          red: "#ff3d41",
          green: "#4caf50",
          yellow: "#FFD700",
          purple: "#9c27b0",
          teal: "#20c997",
          indigo: "#6610f2"
        },
        // Once UI specific colors
        'brand-primary': 'var(--color-brand-primary)',
        'brand-primary-light': 'var(--color-brand-primary-light)',
        'brand-primary-dark': 'var(--color-brand-primary-dark)',
        neutral: {
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        }
      },
      spacing: {
        'once-xs': 'var(--spacing-xs)',
        'once-sm': 'var(--spacing-sm)',
        'once-md': 'var(--spacing-md)',
        'once-lg': 'var(--spacing-lg)',
        'once-xl': 'var(--spacing-xl)',
        'once-2xl': 'var(--spacing-2xl)',
        'once-3xl': 'var(--spacing-3xl)',
      },
      fontSize: {
        'once-xs': 'var(--font-size-xs)',
        'once-sm': 'var(--font-size-sm)',
        'once-md': 'var(--font-size-md)',
        'once-lg': 'var(--font-size-lg)',
        'once-xl': 'var(--font-size-xl)',
        'once-2xl': 'var(--font-size-2xl)',
        'once-3xl': 'var(--font-size-3xl)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'once-sm': 'var(--radius-sm)',
        'once-md': 'var(--radius-md)',
        'once-lg': 'var(--radius-lg)',
        'once-xl': 'var(--radius-xl)',
        'once-full': 'var(--radius-full)',
      },
      boxShadow: {
        'once-sm': 'var(--shadow-sm)',
        'once-md': 'var(--shadow-md)',
        'once-lg': 'var(--shadow-lg)',
        'once-xl': 'var(--shadow-xl)',
        'once-2xl': 'var(--shadow-2xl)',
        'once-inner': 'var(--shadow-inner)',
      },
      fontFamily: {
        'once-primary': 'var(--font-family-primary)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "line-growth": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "line-growth": "line-growth 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
