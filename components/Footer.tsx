import Link from "next/link";
import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-bold tracking-tight">{siteConfig.brandName}</p>
            <p className="mt-2 text-sm text-ink/60">{siteConfig.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:flex sm:gap-12">
            <div>
              <p className="font-semibold text-ink/80">Site</p>
              <ul className="mt-3 space-y-2 text-ink/60">
                <li><Link href="/#how-it-works" className="hover:text-ink">How It Works</Link></li>
                <li><Link href="/faq" className="hover:text-ink">FAQ</Link></li>
                <li><Link href="/blog" className="hover:text-ink">Blog</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-ink/80">Contact</p>
              <ul className="mt-3 space-y-2 text-ink/60">
                <li>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-ink">
                    {siteConfig.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink"
                  >
                    Book a free call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-ink/50">
          © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
