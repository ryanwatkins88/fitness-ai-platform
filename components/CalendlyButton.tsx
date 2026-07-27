import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/site.config";

type CalendlyButtonProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "light";
};

export function CalendlyButton({
  label = "Book Your Free AI Assessment Call",
  className = "",
  variant = "primary",
}: CalendlyButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent/90"
      : "bg-white text-ink hover:bg-white/90";

  return (
    <a
      href={siteConfig.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
