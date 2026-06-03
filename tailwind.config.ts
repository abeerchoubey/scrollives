import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#3D4A3E',
          50:  '#EEF0EE',
          100: '#D5DAD5',
          200: '#ABB4AB',
          300: '#818F82',
          400: '#3D4A3E',
          500: '#2E3A2F',
          600: '#1F2920',
        },
        warm: {
          DEFAULT: '#BC6C5A',
          50:  '#F9EDEA',
          100: '#F2D9D3',
          200: '#E4B3A8',
          300: '#D08E7C',
          400: '#BC6C5A',
          500: '#9E5445',
          600: '#7E4136',
        },
        bone: '#FDFCFB',
        clay: '#F4EFEC',
      },
      fontFamily: {
        sans:  ['var(--font-dm-sans)',  'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'Georgia',   'serif'],
      },
      fontSize: {
        '5xl': ['3rem',    { lineHeight: '1.1'  }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem',  { lineHeight: '1.0'  }],
        '8xl': ['6rem',    { lineHeight: '0.95' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
      },
    },
  },
  plugins: [],
}

export default config
