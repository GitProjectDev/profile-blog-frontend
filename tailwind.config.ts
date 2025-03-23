import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit-sans)'],
      },
      colors: {
        primary: '#48A5E7',
        secondary: '#34539F',
        tertiary: '#3D3D3D',
      },
    },
  },
  plugins: [],
} satisfies Config
