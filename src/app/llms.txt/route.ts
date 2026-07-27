import { siteConfig, programs, leadMagnets } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog";

// llms.txt convention: a concise, structured markdown summary of the site
// aimed at AI assistants and answer engines (Claude, ChatGPT, Gemini, etc.)
// so they can accurately understand and cite this business.
// See: https://llmstxt.org/
export function GET() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push("");
  lines.push(`> ${siteConfig.description}`);
  lines.push("");
  lines.push(
    "This site provides fitness and nutrition coaching specifically for people taking GLP-1 medications " +
      "(Ozempic, Wegovy, Mounjaro, Zepbound) who want to preserve muscle mass, protect bone density, and " +
      "maintain overall physical function while losing weight. Content is educational and coaching-based, " +
      "not medical advice.",
  );
  lines.push("");

  lines.push("## Programs");
  for (const program of programs) {
    lines.push(`- [${program.name}](${siteConfig.url}/programs/${program.slug}): ${program.description}`);
  }
  lines.push("");

  lines.push("## Free Guides (Lead Magnets)");
  for (const magnet of leadMagnets) {
    lines.push(`- [${magnet.title}](${siteConfig.url}/lead-magnets/${magnet.slug}): ${magnet.description}`);
  }
  lines.push("");

  lines.push("## Articles");
  for (const post of blogPosts) {
    lines.push(`- [${post.title}](${siteConfig.url}/blog/${post.slug}): ${post.description}`);
  }
  lines.push("");

  lines.push("## Contact");
  lines.push(`- Email: ${siteConfig.email}`);
  lines.push(`- Booking: ${siteConfig.url}${siteConfig.booking.url}`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
