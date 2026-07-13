import type { MetadataRoute } from "next";
import { blogPosts, featuredPost } from "@/lib/blogPosts";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/services"),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/portfolio"),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/blog"),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: absoluteUrl("/process"),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/kontakt"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: absoluteUrl("/impressum"),
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: absoluteUrl("/datenschutz"),
      changeFrequency: "yearly",
      priority: 0.2
    }
  ];

  const allPosts = [featuredPost, ...blogPosts];

  const uniquePosts = Array.from(
    new Map(allPosts.map((post) => [post.slug, post])).values()
  );

  const blogPages: MetadataRoute.Sitemap = uniquePosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticPages, ...blogPages];
}