/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    colors: {
      text: "#0c090a",
      background: "#faf7f7",
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#006241',
        50: '#d7e4dd',
        100: '#afc9bb',
        200: '#89ae9b',
        300: '#62957b',
        400: '#3b7b5e',
        500: '#006241',
        600: '#0a5237',
        700: '#0f422d',
        800: '#103223',
        900: '#0f241a',
        950: '#0a1610',
      },
      gray: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      white: "#FFFFFF",
      disabledColor: '#00000080'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};