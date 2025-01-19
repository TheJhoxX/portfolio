import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalProvider";

export const metadata: Metadata = {
  title: "TheJhoxX portfolio",
  description:
    "TheJhoxX's personal portfolio, where some cool personal and scholar projects can be found",
};

const sfFont = localFont({
  src: [
    { path: "./fonts/SFUIDisplay-Thin.woff", weight: "100", style: "normal" },
    {
      path: "./fonts/SFUIDisplay-Ultralight.woff",
      weight: "200",
      style: "normal",
    },
    { path: "./fonts/SFUIDisplay-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/SFUIDisplay-Medium.woff", weight: "500", style: "normal" },
    {
      path: "./fonts/SFUIDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    { path: "./fonts/SFUIDisplay-Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/SFUIDisplay-Heavy.woff", weight: "800", style: "normal" },
    { path: "./fonts/SFUIDisplay-Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-sf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${sfFont.variable} antialiased relative`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
