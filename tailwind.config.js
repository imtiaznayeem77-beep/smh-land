/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1F4D32',
          50: '#f0f5f1',
          100: '#dce8e0',
          200: '#b9d0c1',
          300: '#8fb39d',
          400: '#6E8F62',
          500: '#5a7d4f',
          600: '#456640',
          700: '#374f35',
          800: '#2a3d29',
          900: '#1F4D32',
          950: '#123524',
        },
        charcoal: {
          DEFAULT: '#171B18',
          50: '#f5f6f5',
          100: '#e8eae8',
          200: '#cdd1cd',
          300: '#a8b0a8',
          400: '#7d877d',
          500: '#5d685d',
          600: '#455045',
          700: '#2f3a2f',
          800: '#1d261d',
          900: '#171B18',
          950: '#0B0F0C',
        },
        silver: {
          DEFAULT: '#C9CDD0',
          50: '#fbfcfc',
          100: '#f0f2f3',
          200: '#e0e4e6',
          300: '#C9CDD0',
          400: '#a8aeb2',
          500: '#878d92',
          600: '#6c7278',
          700: '#565b60',
          800: '#3f4347',
          900: '#2a2d30',
        },
        natural: {
          light: '#F5F5F0',
          warm: '#E9E5DA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'premium': '0 20px 60px -15px rgba(11, 15, 12, 0.25)',
        'card': '0 8px 30px -12px rgba(11, 15, 12, 0.15)',
        'card-hover': '0 20px 50px -15px rgba(11, 15, 12, 0.25)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
