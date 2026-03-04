import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',

        'primary-yellow': '#cfb703',
        'secondary-yellow': '#ffc900',
        'primary-cyan': '#00e5ff',
        'secondary-cyan': '#34CAFF',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        slideInLeft: 'slideInLeft 0.3s ease-out',
        slideUp: 'slideUp 0.25s ease-out',
        fadeIn: 'fadeIn 0.2s ease-out',
      },
      fontFamily: {
        mono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
