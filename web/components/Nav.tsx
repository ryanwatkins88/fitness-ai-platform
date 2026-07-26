import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for/fitness-coaches", label: "For Coaches" },
  { href: "/for/real-estate-agents", label: "For Real Estate" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-brand-dark">
          {site.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-dark">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/apply"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Book Free Assessment
        </Link>
      </div>
    </header>
  );
}
