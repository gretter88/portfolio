import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const baseUrl = new URL("https://www.santiagogretter.com.uy");

export const metadata: Metadata = {
  metadataBase: baseUrl,
 title: "Santiago Gretter — Software Studio Uruguay",
description: "Desarrollo de software, aplicaciones móviles, plataformas SaaS, sitios web y soluciones digitales en Uruguay. Next.js, React Native, Node.js y análisis funcional.",
  verification: {
  google: "LcLYzhsNDjZrqy84BJCnV4pUeDM-QFHZVCWwLfCTA2Q",
},

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved ? saved : (prefersDark ? 'dark' : 'light');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
        `}</Script>

        <meta
          name="theme-color"
          content="#0a0a0a"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
      </head>

      <body className="bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

