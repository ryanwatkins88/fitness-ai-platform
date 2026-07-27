import Link from "next/link";
import { Container } from "@/components/container";
import { leadMagnets, navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-brand-100 bg-brand-900 text-brand-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.shortName}</p>
          <p className="mt-3 text-sm leading-6 text-brand-200">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Explore</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-brand-200 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Free Guides</p>
          <ul className="mt-3 space-y-2">
            {leadMagnets.map((magnet) => (
              <li key={magnet.slug}>
                <Link href={`/lead-magnets/${magnet.slug}`} className="text-sm text-brand-200 hover:text-white">
                  {magnet.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-200">
            <li>{siteConfig.email}</li>
            {siteConfig.location.city && (
              <li>
                {siteConfig.location.city}
                {siteConfig.location.region ? `, ${siteConfig.location.region}` : ""}
              </li>
            )}
            {siteConfig.location.servesOnline && <li>Coaching available online, worldwide</li>}
          </ul>
        </div>
      </Container>

      <div className="border-t border-brand-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-300 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Not medical advice. Always consult your prescribing provider about your GLP-1 medication.</p>
        </Container>
      </div>
    </footer>
  );
}
