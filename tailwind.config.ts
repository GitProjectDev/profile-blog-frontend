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
        primary: {
          '100': '#FFFAEC',
          '200': '#F5ECD5',
        },
        secondary: '#48a6a7',
        tertiary: '#3D3D3D',
      },
    },
  },
  plugins: [],
} satisfies Config
