import { fractionWidths } from './src/main';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./vite/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [fractionWidths(16), fractionWidths([2, 7])],
}
