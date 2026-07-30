import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consult with an online personal trainer specializing in injury recovery, arthritis, and GLP-1 strength support.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
        Get started
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Book your free consult
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Tell me a bit about what's going on and what you're hoping to
        achieve. I read every message myself and reply within 1-2 business
        days — or email me directly at{" "}
        <a href={`mailto:${siteConfig.email}`} className="font-medium text-teal-700 dark:text-teal-400">
          {siteConfig.email}
        </a>
        .
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  );
}
