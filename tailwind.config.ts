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
        sage: {
          DEFAULT: '#8FA68F',
          50:  '#F2F5F2',
          100: '#DCE5DC',
          200: '#B8CDB8',
          300: '#8FA68F',
          400: '#6B8A6B',
          500: '#526E52',
        },
        sand: {
          DEFAULT: '#D4C4A8',
          50:  '#FAF8F5',
          100: '#F0EBE0',
          200: '#E0D6BF',
          300: '#D4C4A8',
          400: '#B8A580',
          500: '#9A8560',
        },
        terracotta: {
          DEFAULT: '#C4785A',
          50:  '#FBF2EE',
          100: '#F5DDD4',
          200: '#E8B9A5',
          300: '#D49478',
          400: '#C4785A',
          500: '#A86044',
        },
        moss: {
          DEFAULT: '#6B7F5E',
          50:  '#F0F2EE',
          100: '#D9DDD4',
          200: '#B3BBA9',
          300: '#8D9A7E',
          400: '#6B7F5E',
          500: '#556649',
        },
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
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 8s ease-in-out infinite',
        'float-delay':  'float 7s ease-in-out 2s infinite',
        'fade-in-up':   'fadeInUp 0.8s ease-out forwards',
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'scale-in':     'scaleIn 0.7s ease-out forwards',
        'slide-in-left':  'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'pulse-soft':   'pulseSoft 3s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          '0%':  { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':  { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':  { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%':  { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':  { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'soft':    '0 2px 16px rgba(61, 74, 62, 0.06)',
        'medium':  '0 4px 24px rgba(61, 74, 62, 0.08)',
        'card':    '0 1px 3px rgba(61, 74, 62, 0.04), 0 4px 12px rgba(61, 74, 62, 0.06)',
        'card-hover': '0 4px 16px rgba(61, 74, 62, 0.1), 0 8px 32px rgba(61, 74, 62, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config
