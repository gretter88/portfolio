import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santiagogretter.com.uy"),
  title: "Santiago Gretter — Portfolio",
  description: "Fullstack / Mobile Developer (React Native · Node · Next.js)",
  openGraph: {
    type: "website",
    url: "https://www.santiagogretter.com.uy/",
    title: "Santiago Gretter — Portfolio",
    description: "Fullstack / Mobile Developer (React Native · Node · Next.js)",
    images: [
      {
        url: "https://www.santiagogretter.com.uy/og/og.png",
        width: 1200,
        height: 630,
        alt: "Santiago Gretter — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Gretter — Portfolio",
    description: "Fullstack / Mobile Developer (React Native · Node · Next.js)",
    images: ["https://www.santiagogretter.com.uy/og/og.png"],
  },
};

export default function RootPage() {
  redirect("/es");
}
