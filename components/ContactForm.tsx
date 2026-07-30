"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-900 dark:bg-teal-950">
        <p className="font-semibold text-teal-800 dark:text-teal-200">
          Thanks — your message is in!
        </p>
        <p className="mt-2 text-sm text-teal-700 dark:text-teal-300">
          I'll get back to you within 1-2 business days to schedule your free
          consult.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field — hidden from real users, catches simple bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Phone <span className="text-zinc-400">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label htmlFor="track" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            I'm interested in
          </label>
          <select
            id="track"
            name="track"
            defaultValue="not-sure"
            className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="mobility-recovery">Mobility & Recovery</option>
            <option value="glp1-support">GLP-1 Support</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          What's going on, and what are you hoping to achieve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send & Book Free Consult"}
      </button>
    </form>
  );
}
