import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "solid": "0 5px 10px rgba(0, 0, 0, 0.6)",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      mesh: {
        "primary": "#f43f5e",
        "primary-content": "#140103",
        "secondary": "#9ca3af",
        "secondary-content": "#090a0b",
        "accent": "#00ffff",
        "accent-content": "#001616",
        "neutral": "#e5e7eb",
        "neutral-content": "#121313",
        "base-100": "#e5e7eb",
        "base-200": "#c7c9cc",
        "base-300": "#aaabae",
        "base-content": "#121313",
        "info": "#0ea5e9",
        "info-content": "#000a13",
        "success": "#22c55e",
        "success-content": "#000e03",
        "warning": "#eab308",
        "warning-content": "#130c00",
        "error": "#e11d48",
        "error-content": "#ffd8d9",
      },
      meshDark: {
        "primary": "#f43f5e",
        "primary-content": "#140103",
        "secondary": "#9ca3af",
        "secondary-content": "#090a0b",
        "accent": "#06b6d4",
        "accent-content": "#001616",
        "neutral": "#e5e7eb",
        "neutral-content": "#121313",
        "base-100": "#111827",
        "base-200": "#0d1320",
        "base-300": "#090f1a",
        "base-content": "#c9cbcf",
        "info": "#0ea5e9",
        "info-content": "#000a13",
        "success": "#22c55e",
        "success-content": "#000e03",
        "warning": "#eab308",
        "warning-content": "#130c00",
        "error": "#e11d48",
        "error-content": "#ffd8d9",
      },
    }],
    darkTheme: 'meshDark',
    base: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  }
} satisfies Config

export default config