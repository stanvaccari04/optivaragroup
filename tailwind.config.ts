import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: 'rgb(var(--color-burgundy) / <alpha-value>)',
          dark: 'rgb(var(--color-burgundy-dark) / <alpha-value>)',
          light: 'rgb(var(--color-burgundy-light) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--color-gold) / <alpha-value>)',
          light: 'rgb(var(--color-gold-light) / <alpha-value>)',
          dark: 'rgb(var(--color-gold-dark) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--color-cream) / <alpha-value>)',
          dark: 'rgb(var(--color-cream-dark) / <alpha-value>)',
        },
        blush: {
          DEFAULT: 'rgb(var(--color-blush) / <alpha-value>)',
          light: 'rgb(var(--color-blush-light) / <alpha-value>)',
          dark: 'rgb(var(--color-blush-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        heading: ['Georgia', '"Times New Roman"', 'serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      lineHeight: {
        prose: '1.7',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
