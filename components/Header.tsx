import Link from "next/link";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/site.config";
import { CalendlyButton } from "./CalendlyButton";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#who-its-for", label: "Who It's For" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-base">{siteConfig.brandName}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CalendlyButton label="Book Free Call" className="!px-5 !py-2.5 text-sm" />
        </div>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white md:hidden"
        >
          Book Free Call
        </a>
      </div>
    </header>
  );
}
