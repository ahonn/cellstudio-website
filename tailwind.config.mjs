/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF9500',
        secondary: '#3490E6',
        body: '#DDDDDD',
        background: {
          DEFAULT: '#14161F',
        },
        border: '#3C3C3C',
      },
      fontFamily: {
        mono: [
          'Roboto Moni',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
