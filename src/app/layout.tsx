import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zemax.digital";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zemax Digital | Luxury Web Development",
    template: "%s | Zemax Digital"
  },
  description:
    "Zemax Digital entwickelt elegante Websites, Premium-Brandings und digitale Auftritte mit klarer Wirkung.",
  keywords: [
    "Zemax Digital",
    "Webdesign",
    "Webentwicklung",
    "Next.js",
    "Branding",
    "Luxury Web Design",
    "Premium Website",
    "Digital Studio"
  ],
  authors: [{ name: "Zemax Digital" }],
  creator: "Zemax Digital",
  publisher: "Zemax Digital",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Zemax Digital",
    title: "Zemax Digital | Luxury Web Development",
    description:
      "Elegante Websites, Premium-Brandings und digitale Auftritte mit klarer Wirkung.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zemax Digital Luxury Web Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zemax Digital | Luxury Web Development",
    description:
      "Elegante Websites, Premium-Brandings und digitale Auftritte mit klarer Wirkung.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}