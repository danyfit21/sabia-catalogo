/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta oficial SaBïa — muestreada del logo y empaques
        vino: {
          DEFAULT: '#6E2251',
          50: '#F6EAF1',
          100: '#E9CCDD',
          400: '#9A3C76',
          600: '#6E2251',
          700: '#591A41',
          900: '#3B1130',
        },
        marigold: {
          DEFAULT: '#F4A11E',
          400: '#F8B84E',
          600: '#E08C0A',
        },
        crema: {
          DEFAULT: '#EFE6D0',
          soft: '#F7F1E3',
          deep: '#E4D6B8',
        },
        violeta: {
          DEFAULT: '#803E8E',
          400: '#9C5BAA',
          600: '#6B2F78',
        },
        carbon: '#2B2326',
        kraft: '#B07B4F',
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      boxShadow: {
        card: '0 18px 40px -18px rgba(110, 34, 81, 0.45)',
        cardHover: '0 30px 60px -20px rgba(110, 34, 81, 0.55)',
        glow: '0 0 0 1px rgba(244, 161, 30, 0.25), 0 20px 50px -20px rgba(244, 161, 30, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(24px) translateX(12px)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        floatSlow: 'floatSlow 11s ease-in-out infinite',
        spinSlow: 'spinSlow 26s linear infinite',
      },
    },
  },
  plugins: [],
}
