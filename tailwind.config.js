import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(215 100% 35%)", // Deeper blue for better contrast
          foreground: "hsl(210 40% 98%)",
          light: "hsl(215 100% 45%)", // Lighter shade
          lighter: "hsl(215 100% 55%)", // Even lighter
          lightest: "hsl(215 100% 95%)", // Very light background tint
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215 100% 35%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(215 20% 95%)",
          foreground: "hsl(215 25% 35%)",
        },
        accent: {
          DEFAULT: "hsl(215 20% 92%)",
          foreground: "hsl(215 100% 35%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(215 25% 35%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(215 25% 35%)",
        },
        // Brand colors for logos and accents
        brand: {
          blue: {
            DEFAULT: "hsl(215 100% 35%)", // Primary blue
            light: "hsl(215 100% 45%)",
            dark: "hsl(215 100% 25%)",
          },
          gold: {
            DEFAULT: "hsl(45 100% 50%)", // Metallic gold
            light: "hsl(45 100% 60%)",
            dark: "hsl(45 100% 40%)",
          },
          silver: {
            DEFAULT: "hsl(210 20% 90%)", // Metallic silver
            light: "hsl(210 20% 95%)",
            dark: "hsl(210 20% 85%)",
          }
        }
      },
      fontSize: {
        // Improved responsive heading sizes with better mobile scaling
        'h1': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700', 
          '@screen xs': { fontSize: '2rem' },
          '@screen sm': { fontSize: '2.5rem' },
          '@screen md': { fontSize: '3rem' },
          '@screen lg': { fontSize: '3.75rem' }
        }],
        'h2': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700',
          '@screen xs': { fontSize: '1.75rem' },
          '@screen sm': { fontSize: '2rem' },
          '@screen md': { fontSize: '2.5rem' }
        }],
        'h3': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600',
          '@screen xs': { fontSize: '1.375rem' },
          '@screen sm': { fontSize: '1.5rem' },
          '@screen md': { fontSize: '1.75rem' }
        }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '600',
          '@screen xs': { fontSize: '1.25rem' },
          '@screen sm': { fontSize: '1.375rem' }
        }],
        // Improved body text sizes with better mobile scaling
        'body-lg': ['1rem', { lineHeight: '1.7',
          '@screen xs': { fontSize: '1.125rem' },
          '@screen md': { fontSize: '1.25rem' }
        }],
        'body': ['0.9375rem', { lineHeight: '1.7',
          '@screen xs': { fontSize: '1rem' }
        }],
        'body-sm': ['0.8125rem', { lineHeight: '1.6',
          '@screen xs': { fontSize: '0.875rem' }
        }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--foreground)',
            lineHeight: '1.7',
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}