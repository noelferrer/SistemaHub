import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './base/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: 'rgb(var(--color-brand-dark) / <alpha-value>)',
          teal: 'rgb(var(--color-brand-teal) / <alpha-value>)',
          blue: 'rgb(var(--color-brand-blue) / <alpha-value>)',
        },
        n: {
          900: '#0B1437',
          700: '#2C3E6B',
          500: '#4A5E8A',
          400: '#7B8DB0',
          200: '#D1D9E6',
          100: '#EFF2F7',
          50:  '#F8FAFF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, rgb(var(--color-brand-blue)) 0%, rgb(var(--color-brand-teal)) 100%)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
      },
    },
  },
  plugins: [],
}

export default config
