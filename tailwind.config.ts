import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        shake: 'shake .13s 3',
        fadeOut: 'fadeOut 2s forwards',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '40%': {
            transform: 'translateX(10px)',
          },
          '100%': {
            transform: 'translateX(-10px)',
          },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '66%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.main-theme': {
          '@apply bg-teal-200/60 flex flex-col w-full h-dvh': '',
        },
        '.input-theme': {
          '@apply w-full h-10 p-2 font-medium rounded-md outline-none focus:border-2 focus:border-teal-600 duration-150':
            '',
        },
        '.button-theme': {
          '@apply bg-emerald-700/90 active:bg-emerald-950 hover:bg-emerald-800 rounded-lg text-white  duration-150':
            '',
        },
      });
    }),
  ],
};
export default config;
