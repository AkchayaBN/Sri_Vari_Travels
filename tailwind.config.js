/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3fbf2',
          100: '#ddf3da',
          200: '#bee7bc',
          300: '#9ad99a',
          400: '#6fc06e',
          500: '#4ba94d',
          600: '#338338',
          700: '#2a682f',
          800: '#245329',
          900: '#1f4524',
        },
        accent: {
          50: '#fff6ed',
          100: '#ffead3',
          200: '#ffd1a5',
          300: '#ffb36d',
          400: '#ff9444',
          500: '#ff7424',
          600: '#f1550c',
          700: '#c83f09',
          800: '#9f330f',
          900: '#7f2c10',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 55px -28px rgba(38, 78, 49, 0.22)',
        glow: '0 18px 40px -24px rgba(255, 116, 36, 0.35)',
      },
      backgroundImage: {
        'hero-blend':
          'radial-gradient(circle at top left, rgba(191, 233, 187, 0.65), transparent 30%), radial-gradient(circle at bottom right, rgba(255, 205, 148, 0.45), transparent 28%)',
      },
    },
  },
  plugins: [],
}
