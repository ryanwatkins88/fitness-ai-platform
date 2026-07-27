import Link from "next/link";
import { Container } from "@/components/container";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-brand-800">
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-700 transition-colors hover:text-accent-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.booking.url}
          className="rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
        >
          {siteConfig.booking.label}
        </Link>
      </Container>
    </header>
  );
}
