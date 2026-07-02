/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '"Inter Tight"',
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "sans-serif",
                ],
                serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
                mono: [
                    '"JetBrains Mono"',
                    "ui-monospace",
                    "SFMono-Regular",
                    "monospace",
                ],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                oas: {
                    bg: "hsl(var(--oas-bg))",
                    surface: "hsl(var(--oas-surface))",
                    section: "hsl(var(--oas-section))",
                    ink: "hsl(var(--oas-ink))",
                    "ink-soft": "hsl(var(--oas-ink-soft))",
                    border: "hsl(var(--oas-border))",
                    accent: "hsl(var(--oas-accent))",
                    "accent-ink": "hsl(var(--oas-accent-ink))",
                },
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
                "oas-pulse": {
                    "0%, 100%": { opacity: "0.55" },
                    "50%": { opacity: "1" },
                },
                "oas-flow": {
                    "0%": { strokeDashoffset: "12" },
                    "100%": { strokeDashoffset: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "oas-pulse": "oas-pulse 2.6s ease-in-out infinite",
                "oas-flow": "oas-flow 1.6s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
