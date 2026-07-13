import type { MetadataRoute } from "next";

const baseUrl = "https://zemax-digital.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}