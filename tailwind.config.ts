import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'cream-pattern':"url('../public/assets/images/creampattern.jpeg')",
        'books-collage':"url('../public/assets/images/books-collage.png')"
      },
      fontFamily : {
        libre:"var(--font-libre)",
        kathen:"var(--font-kathen)",
        geistMono:"var(--font-geist-mono)",
        geistSans:"var(--font-geist-sans)"
      },
      colors: {
        "light":"#ffffff",
        "darks":"#3A2C33",
        "tan": "#D2B794",
        "seagreen":"#519872",
        "cardinal":"#C5283D",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
