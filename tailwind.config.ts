import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-medium": "spin 4s linear infinite",
      },
      scale: {
        "-100": "-1",
      },
      screens: {
        xs: "340px",
        ...defaultTheme.screens,
      },
      container: {
        center: true
      }
    },
  },
}
export default config
