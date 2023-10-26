import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
   "src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF9000',
        white: '#F4EDE8',
        gray: '#999591',
        gray_hard: '#666360',
        shape: '#3E3B47',
        black_medium: '#28262E',
        background: '#312E38',
        inputs: '#232129',
      }
    },
  },
  plugins: [],
}
export default config
