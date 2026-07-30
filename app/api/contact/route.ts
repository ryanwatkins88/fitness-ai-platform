import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

const TRACKS = ["mobility-recovery", "glp1-support", "not-sure"] as const;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, track, message, company } = body as Record<string, string>;

  // Honeypot: real users never fill this hidden field.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const safeTrack = TRACKS.includes(track as (typeof TRACKS)[number]) ? track : "not-sure";

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || siteConfig.email;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set — contact form submissions cannot be emailed. See README for setup.",
    );
    return NextResponse.json(
      {
        error:
          "Lead notifications aren't configured yet. Please email us directly for now.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} Website <onboarding@resend.dev>`,
    to: toEmail,
    replyTo: email.trim(),
    subject: `New lead: ${name.trim()} (${safeTrack})`,
    text: [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone?.trim() || "Not provided"}`,
      `Interested in: ${safeTrack}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
