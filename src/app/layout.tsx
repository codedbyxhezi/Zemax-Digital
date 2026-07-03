import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zemax Digital | Luxury Web Design & Branding",
  description: "Portfolio website for Zemax Digital — luxury branding, web design and Next.js development.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
