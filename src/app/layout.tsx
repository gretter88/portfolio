import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Santiago Gretter — Portfolio",
  description: "Fullstack / Mobile Developer (React Native · Node · Next.js)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
(function() {
  try {
    var saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  );
}