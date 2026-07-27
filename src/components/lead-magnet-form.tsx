"use client";

import { useState, type FormEvent } from "react";

export function LeadMagnetForm({ leadMagnetSlug, title }: { leadMagnetSlug: string; title: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, leadMagnetSlug }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-brand-800">
        <p className="font-semibold">You&apos;re in! Check your inbox.</p>
        <p className="mt-1 text-sm text-brand-700">
          We just sent &ldquo;{title}&rdquo; to {email}. If you don&apos;t see it in a few minutes, check spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full flex-1 rounded-full border border-brand-200 bg-white px-5 py-3 text-brand-900 placeholder:text-brand-400 focus:border-accent-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Me the Free Guide"}
      </button>
      {status === "error" && <p className="text-sm text-red-600 sm:basis-full">{error}</p>}
    </form>
  );
}
