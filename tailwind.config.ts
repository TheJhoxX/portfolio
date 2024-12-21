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
        ".mask-svg": {
          mask: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="white"><path d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z"></path><path d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z"></path></g></svg>')`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
          WebkitMask: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="white"><path d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z"></path><path d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z"></path></g></svg>')`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
        },
      });
    }),
    lineClamp,
  ],
};
export default config;
