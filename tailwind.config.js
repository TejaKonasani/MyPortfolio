/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design tokens for premium dark theme
        bg: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        raised: 'var(--c-surface-raised)',
        border: 'var(--c-border)',
        'border-hover': 'var(--c-border-hover)',
        main: 'var(--c-text)',
        ink: 'var(--c-text)',
        card: 'var(--c-surface)',
        muted: 'var(--c-muted)',
        lime: '#c8f542',
        orange: '#ff6a3d',
        blue: '#7da6ff',
        pop: '#ff6a3d',
        sky: '#7da6ff',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        'home-content': '1200px',
        content: '1280px',
      },
      transitionTimingFunction: {
        snap: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
