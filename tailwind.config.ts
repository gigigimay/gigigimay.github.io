import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        explore: 'explore 2s linear infinite',
        jellyfish: 'jellyfish 2s ease-in infinite',
      },
      keyframes: {
        explore: {
          '0%': { transform: 'translate(0, -10%)' },
          '100%': { transform: 'translate(0, -10%)' },
          '25%': { transform: 'translate(25%, 0)' },
          '50%': { transform: 'translate(-25%, 0)' },
          '75%': { transform: 'translate(0, 10%)' },
        },
        jellyfish: {
          '0%': {
            transform: 'translateY(0) scaleX(110%)',
            animationTimingFunction: 'ease-out',
          },
          '10%': {
            transform: 'translateY(-25%) scaleY(110%)',
            animationTimingFunction: 'ease-out',
          },
          '20%': {
            transform: 'translateY(-35%) scaleY(100%)',
            animationTimingFunction: 'ease-in',
          },
          '100%': {
            transform: 'translateY(0) scaleX(110%)',
          },
        },
      },
    },
  },
  // plugins: [require('daisyui')],
  plugins: [],
} satisfies Config
