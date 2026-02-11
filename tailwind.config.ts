import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        sans: ['var(--font-open-sans)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        // Sam Beard Brand Colors: Black, Gold, White
        sb: {
          black: '#000000',
          gold: '#D4AF37',
          'gold-light': '#E8C547',
          'gold-dark': '#B8962E',
          white: '#FFFFFF',
          charcoal: '#1C1C1C',
          gray: '#2A2A2A',
        },
        // Legacy mappings for compatibility
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C547',
          dark: '#B8962E',
          glow: '#F5D76E',
          400: '#E8C547',
          500: '#D4AF37',
          600: '#B8962E',
        },
        // Background colors
        slate: {
          900: '#0A0A0A',
          800: '#1C1C1C',
          700: '#2A2A2A',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'aurora': 'aurora 15s ease-in-out infinite',
        'float': 'float 20s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(5%, -5%) rotate(5deg) scale(1.1)' },
          '66%': { transform: 'translate(-5%, 5%) rotate(-5deg) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, -50px) scale(1.05)' },
          '50%': { transform: 'translate(-30px, 30px) scale(0.95)' },
          '75%': { transform: 'translate(30px, 50px) scale(1.02)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
