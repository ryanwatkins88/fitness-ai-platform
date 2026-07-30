import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// AI answer-engine crawlers, listed explicitly so intent to be indexed by
// them is unambiguous (some respect a wildcard rule less reliably than a
// named one). Add to this list as new crawlers become relevant.
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
