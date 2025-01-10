import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp"; // Importa el plugin aquí
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      boxShadow: {
        blurred: "10px 10px 25px var(--foreground);",
      },
      maskType: {
        maskImage: {
          "gradient-mask":
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6E44FF",
        secondary: "#F52F57",
        accent: "#AFFC41",
        "background-accent": "var(--background-accent)",
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        sf: ["var(--font-sf)", "Helvetica", "sans-serif"], // Alias específico
      },
      backgroundImage: {
        "text-foreground-gradient":
          "linear-gradient(to top, var(--foreground) 70%, transparent 100%)",
        pattern: "var(--pattern)",
        "gradient-primary-transparent":
          "linear-gradient(to right, transparent  1%, var(--primary) 100%)",
        "scroll-gradient":
          "linear-gradient(to top, var(--foreground) 90%, var(--background) 100%)",
      },
      maxHeight: {
        "quarter-screen": "25vh",
        "half-screen": "50vh",
        "1/2": "50%",
        "1/5": "25%",
      },
      height: {
        half: "50%",
        "quarter-screen": "25vh",
        "half-screen": "50vh",
        "three-quarter-screen": "75vh",
        "1/2": "50%",
        "1/5": "25%",
      },
      minHeight: {
        "half-screen": "50vh",
        "quarter-screen": "25vh",
        "1/2": "50%",
        "1/5": "25%",
      },
      width: {
        "half-screen": "50vw",
        "quarter-screen": "25vw",
      },
      maxWidth: {
        "half-screen": "50vw",
        "quarter-screen": "25vh",
      },
      minWidth: {
        "half-screen": "50vw",
        "quarter-screen": "25vh",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-horizontal-gradient": {
          maskImage:
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
        },
        ".mask-vertical-gradient": {
          maskImage:
            "linear-gradient(to top, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
        },
        ".mask-top-gradient": {
          maskImage: "linear-gradient(to bottom, transparent, black 128px)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 128px)",
        },

        ".mask-bottom-gradient": {
          maskImage: "linear-gradient(to top, transparent, black 128px)",
          WebkitMaskImage: "linear-gradient(to top, transparent, black 128px)",
        },

        ".mask-left-gradient": {
          maskImage: "linear-gradient(to right, transparent, black 128px)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 128px)",
        },

        ".mask-right-gradient": {
          maskImage: "linear-gradient(to left, transparent, black 128px)",
          WebkitMaskImage: "linear-gradient(to left, transparent, black 128px)",
        },
      });
    }),
    lineClamp,
  ],
};
export default config;
