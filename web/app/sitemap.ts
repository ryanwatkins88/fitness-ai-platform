import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/how-it-works",
    "/for/fitness-coaches",
    "/for/real-estate-agents",
    "/faq",
    "/apply",
    "/blog",
    "/blog/how-to-make-more-money-in-your-service-business",
    "/blog/content-vs-automation-what-your-business-actually-needs",
    "/blog/what-is-an-ai-business-assessment",
  ];

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" || route === "" ? "weekly" : "monthly",
  }));
}
