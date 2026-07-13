import type { Metadata } from "next";

export const siteConfig = {
  name: "Zemax Digital",
  shortName: "Zemax",
  url: "https://zemax-digital.vercel.app",
  locale: "de_DE",
  language: "de-DE",
  email: "hello@zemax.digital",
  github: "https://github.com/codedbyxhezi",
  logo: "/images/zemax-logo-header.png",
  description:
    "Zemax Digital entwickelt performante Websites und digitale Erlebnisse für Unternehmen in München – mit Webentwicklung, UI Design und UX Design.",
  location: {
    city: "München",
    region: "Bayern",
    country: "Deutschland"
  },
  keywords: [
    "Webentwicklung München",
    "Webdesigner München",
    "UI Design München",
    "UX Design München",
    "Next.js Entwickler München",
    "Website erstellen lassen München",
    "Webentwicklung Bayern",
    "Zemax Digital"
  ]
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = []
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],

    alternates: {
      canonical: path
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}