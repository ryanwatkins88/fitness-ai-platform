import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Making More Money in Your Service Business",
  description:
    "Practical, no-fluff articles on making more money and saving money in your coaching, real estate, or service business.",
};

const posts = [
  {
    href: "/blog/how-to-make-more-money-in-your-service-business",
    title: "How to Make More Money in Your Service Business Without Working More Hours",
    description:
      "The three places most service business owners lose money without realizing it, and what to fix first.",
  },
  {
    href: "/blog/content-vs-automation-what-your-business-actually-needs",
    title: "Content vs. Automation: What Your Business Actually Needs Right Now",
    description:
      "Why posting more content isn't always the answer, and how to tell if your real bottleneck is follow-up instead.",
  },
  {
    href: "/blog/what-is-an-ai-business-assessment",
    title: "What Is an AI Business Assessment (and Is It Actually Worth Your Time)?",
    description:
      "A plain-language explanation of how an AI-assisted business assessment works and what to expect from one.",
  },
];

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Blog</h1>
      <div className="mt-8 space-y-8">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="block">
            <h2 className="text-xl font-semibold text-brand-dark hover:underline">
              {post.title}
            </h2>
            <p className="mt-1 text-slate-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
