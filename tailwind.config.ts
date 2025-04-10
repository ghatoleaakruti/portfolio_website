import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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

        // Cream/beige colors
        cream: {
          "50": "#FFFCF8",
          "100": "#FAF5F0",
          "200": "#F5EFE6",
          "300": "#EFE5D7",
          "400": "#E8D8C4",
          "500": "#DCCAB0",
          "600": "#C9B393",
          "700": "#B69C76",
          "800": "#9A7F5A",
          "900": "#7D6547",
        },

        // Brown colors
        brown: {
          "50": "#F9F6F3",
          "100": "#F0EAE4",
          "200": "#E1D5C9",
          "300": "#D1BBAA",
          "400": "#BFA08A",
          "500": "#A98467",
          "600": "#8C6A51",
          "700": "#6F533F",
          "800": "#5B3C2A",
          "900": "#422B1D",
        },

        // Taupe colors (replacing rose)
        taupe: {
          "50": "#F8F7F5",
          "100": "#F0EDE9",
          "200": "#E2DCD4",
          "300": "#D3C9BE",
          "400": "#C4B6A7",
          "500": "#B5A391",
          "600": "#A6907A",
          "700": "#8E7A65",
          "800": "#76644F",
          "900": "#5E4E3A",
        },

        // Sand colors (replacing peach)
        sand: {
          "50": "#FDFCFA",
          "100": "#F9F6F1",
          "200": "#F2EAE0",
          "300": "#EBDECF",
          "400": "#E4D2BE",
          "500": "#DDC6AD",
          "600": "#D6BA9C",
          "700": "#C9A683",
          "800": "#BC926A",
          "900": "#A37E58",
        },

        // Sage colors (replacing mint)
        sage: {
          "50": "#F6F8F6",
          "100": "#EDF0ED",
          "200": "#DCE2DB",
          "300": "#CAD3C9",
          "400": "#B9C5B7",
          "500": "#A7B6A5",
          "600": "#96A793",
          "700": "#7E917B",
          "800": "#677A64",
          "900": "#50634D",
        },

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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
