import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="text-base font-bold text-zinc-900 dark:text-zinc-50">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-600 hover:text-teal-700 dark:text-zinc-400 dark:hover:text-teal-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Connect
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-700 dark:hover:text-teal-400">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.facebookPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-700 dark:hover:text-teal-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-700 dark:hover:text-teal-400"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-6 py-6 dark:border-zinc-800">
        <p className="mx-auto max-w-6xl text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
