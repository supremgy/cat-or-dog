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
          '@apply w-full h-10 p-2 font-medium rounded-md outline-none border-2 focus:border-teal-600 duration-150':
            '',
        },
      });
    }),
  ],
};
export default config;
