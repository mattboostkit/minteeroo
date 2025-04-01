import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Correct paths for App Router:
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-gazpacho)', 'serif'], // Add Gazpacho for headings (fallback to serif)
      },
      // Color extensions will be handled in globals.css via @theme
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add typography plugin
  ],
};
export default config;