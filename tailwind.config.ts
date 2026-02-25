// import type { Config } from 'tailwindcss';

// const config: Config = {
//   darkMode: 'class',
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         bg: 'var(--bg)',
//         text: 'var(--text)',

//         primaryyellow: '#ffd200',
//         secondaryYellow: '#f2b705',
//         primaryCyan: '#00e5ff',
//         secondaryCyan: '#4fc3f7',
//       },
//       fontFamily: {
//         mono: ['Roboto Mono', 'monospace'],
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',

        'primary-yellow': '#FFE200',
        'secondary-yellow': '#ffc900',
        'primary-cyan': '#00e5ff',
        'secondary-cyan': '#34CAFF',
      },
      fontFamily: {
        mono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
