/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0D12',
          secondary: '#12141B',
        },
        surface: '#171A22',
        accent: {
          primary: '#6E56F8',
          secondary: '#22D3EE',
          light: '#B9A9FF',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#9CA3AF',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'Inter', 'sans-serif'],
        body: ['var(--font-inter)', 'Manrope', 'sans-serif'],
      },
      maxWidth: {
        'content': '1140px',
      },
      boxShadow: {
        'glow': '0 0 24px rgba(110,86,248,0.35)',
        'glow-hover': '0 0 32px rgba(110,86,248,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 32px rgba(110,86,248,0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};