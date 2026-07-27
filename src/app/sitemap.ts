import type { MetadataRoute } from "next";
import { siteConfig, leadMagnets, programs } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/programs`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/lead-magnets`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const programRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${siteConfig.url}/programs/${program.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const leadMagnetRoutes: MetadataRoute.Sitemap = leadMagnets.map((magnet) => ({
    url: `${siteConfig.url}/lead-magnets/${magnet.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...programRoutes, ...leadMagnetRoutes, ...blogRoutes];
}
