import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="font-semibold text-slate-800">{site.name}</p>
            <p className="mt-1 max-w-sm">{site.tagline}</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <Link href="/how-it-works" className="hover:text-brand-dark">
              How It Works
            </Link>
            <Link href="/faq" className="hover:text-brand-dark">
              FAQ
            </Link>
            <Link href="/blog" className="hover:text-brand-dark">
              Blog
            </Link>
            <a href={`mailto:${site.contactEmail}`} className="hover:text-brand-dark">
              {site.contactEmail}
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
