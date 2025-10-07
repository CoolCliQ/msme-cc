// import type { Config } from 'tailwindcss';
// import TailwindAnimate from 'tailwindcss-animate';

// export default {
//   darkMode: 'class',
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//   ],
//   prefix: '',
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         '2xl': '1400px',
//       },
//     },
//     extend: {
//       colors: {
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         yellow: {
//           DEFAULT: 'hsl(var(--yellow))',
//           muted: 'hsl(var(--yellow-muted))',
//           dark: 'hsl(var(--yellow-dark))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         sidebar: {
//           DEFAULT: 'hsl(var(--sidebar-background))',
//           foreground: 'hsl(var(--sidebar-foreground))',
//           primary: 'hsl(var(--sidebar-primary))',
//           'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
//           accent: 'hsl(var(--sidebar-accent))',
//           'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
//           border: 'hsl(var(--sidebar-border))',
//           ring: 'hsl(var(--sidebar-ring))',
//         },
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       keyframes: {
//         'accordion-down': {
//           from: {
//             height: '0',
//           },
//           to: {
//             height: 'var(--radix-accordion-content-height)',
//           },
//         },
//         'accordion-up': {
//           from: {
//             height: 'var(--radix-accordion-content-height)',
//           },
//           to: {
//             height: '0',
//           },
//         },
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },
//     },
//   },
//   plugins: [TailwindAnimate],
// } satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Your colors here (same as above)
        "premium-bg": "oklch(21% 0.034 264.665)",

        // Text Colors
        "premium-title": "oklch(95% 0.02 280)",
        "premium-description": "oklch(75% 0.025 270)",

        // Card Colors
        "premium-card": {
          primary: "oklch(28% 0.04 265)",
          secondary: "oklch(32% 0.045 260)",
          accent: "oklch(35% 0.05 255)",
        },

        // Card Text
        "premium-card-title": "oklch(92% 0.03 275)",
        "premium-card-text": "oklch(70% 0.03 270)",

        // Interactive Elements
        "premium-link": {
          DEFAULT: "oklch(70% 0.15 285)",
          hover: "oklch(80% 0.18 290)",
        },

        "premium-button": {
          primary: "oklch(65% 0.18 280)",
          "primary-hover": "oklch(75% 0.20 285)",
          secondary: "oklch(40% 0.08 265)",
        },

        // Accent Colors
        "premium-border": "oklch(35% 0.06 265)",
        "premium-highlight": "oklch(85% 0.12 285)",
      },
    },
  },
  plugins: [],
};

export default config;
