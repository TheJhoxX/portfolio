import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6E44FF",
        secondary: "#F52F57",
        accent: "#AFFC41",
        "accent-black": "#000000",
        "accent-white": "#ffffff",
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-text-light":
          "linear-gradient(to top, #000000 70%, transparent 100%)",
        "gradient-text-dark":
          "linear-gradient(to top, #ffffff 70%, transparent 100%)",
        pattern: "var(--pattern)",
      },
    },
  },
  plugins: [],
};
export default config;
