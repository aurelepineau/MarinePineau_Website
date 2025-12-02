import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // New Marine Palette
        marine: {
          blue: '#7EA2CC',
          yellow: '#D4CF3E',
          pink: '#E09F9D',
          beige: '#FDF6EC',
          text: '#2D3748',
        },
        // Mapping existing brand vars to new palette for backward compatibility
        brand: {
          blue: '#7EA2CC',
          yellow: '#D4CF3E',
          pink: '#E09F9D',
          cream: '#FDF6EC',
          dark: '#2D3748',
        },
      },
    },
  },
  plugins: [],
};
export default config;




