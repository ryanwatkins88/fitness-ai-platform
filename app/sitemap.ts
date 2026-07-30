import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { conditions } from "@/lib/conditions";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/mobility-recovery",
    "/glp1-support",
    "/conditions",
    "/resources",
    "/about",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/resources/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const conditionEntries: MetadataRoute.Sitemap = conditions.map((condition) => ({
    url: `${siteConfig.url}/conditions/${condition.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries, ...conditionEntries];
}
