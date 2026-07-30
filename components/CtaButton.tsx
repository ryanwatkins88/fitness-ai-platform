import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function CtaButton({ href, children, variant = "primary" }: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-teal-700 text-white hover:bg-teal-800"
      : "border border-zinc-300 text-zinc-800 hover:border-teal-700 hover:text-teal-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-teal-400 dark:hover:text-teal-400";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
