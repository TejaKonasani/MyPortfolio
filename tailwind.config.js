/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Editorial neo-brutalist palette — themed via CSS variables (light/dark)
        bg: 'var(--c-bg)',
        ink: 'var(--c-ink)',
        card: 'var(--c-card)',
        muted: 'var(--c-muted)',
        pop: '#FF4D1F',
        lime: '#C8F13C',
        sky: '#8FB8FF',
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