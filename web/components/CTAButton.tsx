import Link from "next/link";

export default function CTAButton({
  children,
  href = "/apply",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark"
      : "border border-brand text-brand-dark hover:bg-brand-light";
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
