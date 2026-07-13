import type { Metadata, Viewport } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd/SeoJsonLd";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Webentwicklung, UI & UX in München | Zemax Digital",
    template: "%s | Zemax Digital"
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url
    }
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/"
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Webentwicklung, UI & UX in München | Zemax Digital",
    description: siteConfig.description
  },

  twitter: {
    card: "summary_large_image",
    title: "Webentwicklung, UI & UX in München | Zemax Digital",
    description: siteConfig.description
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  category: "technology"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101927"
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo)
      },
      image: absoluteUrl(siteConfig.logo),
      email: siteConfig.email,
      sameAs: [siteConfig.github],

      areaServed: [
        {
          "@type": "City",
          name: siteConfig.location.city
        },
        {
          "@type": "AdministrativeArea",
          name: siteConfig.location.region
        },
        {
          "@type": "Country",
          name: siteConfig.location.country
        }
      ],

      knowsAbout: [
        "Webentwicklung",
        "Next.js Entwicklung",
        "TypeScript",
        "UI Design",
        "UX Design",
        "Responsive Webdesign",
        "Website Performance"
      ],

      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "Projektanfragen",
        availableLanguage: ["German"]
      },

      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Webentwicklung",
            description:
              "Entwicklung performanter und responsiver Websites mit Next.js und TypeScript.",
            areaServed: "München, Bayern und Deutschland"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI Design",
            description:
              "Individuelle Benutzeroberflächen mit klarer visueller Hierarchie und hochwertigem Design.",
            areaServed: "München, Bayern und Deutschland"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UX Design",
            description:
              "Nutzerfreundliche digitale Erlebnisse mit klarer Struktur und intuitiver Bedienung.",
            areaServed: "München, Bayern und Deutschland"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": `${siteConfig.url}/#organization`
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <SeoJsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}