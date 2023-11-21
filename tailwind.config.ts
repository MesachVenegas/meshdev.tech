import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': '100px 1fr'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
