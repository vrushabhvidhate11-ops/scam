import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#fff1f5',
        blush: '#fde8ef',
        rose: '#7c1d45',
        maroon: '#6b0a1f',
        softRose: '#f6c7d8',
        pink: '#ec4899',
        warmWhite: '#fcf2f5'
      },
      boxShadow: {
        soft: '0 28px 80px rgba(171,79,119,0.16)',
        glow: '0 22px 60px rgba(236,72,153,0.16)'
      }
    }
  },
  plugins: []
}

export default config
