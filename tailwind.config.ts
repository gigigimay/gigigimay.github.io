import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        explore: 'explore 2s linear infinite',
      },
      keyframes: {
        explore: {
          '0%': {
            transform: 'translate(0, -10%)',
          },
          '100%': {
            transform: 'translate(0, -10%)',
          },
          '25%': {
            transform: 'translate(25%, 0)',
          },
          '50%': {
            transform: 'translate(-25%, 0)',
          },
          '75%': {
            transform: 'translate(0, 10%)',
          },
        },
      },
    },
  },
  // plugins: [require('daisyui')],
  plugins: [],
} satisfies Config
