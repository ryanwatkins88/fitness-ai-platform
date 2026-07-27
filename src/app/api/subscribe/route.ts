import { NextResponse } from "next/server";

// TODO: This is a placeholder. Wire this up to your real email provider
// (ConvertKit, Mailchimp, Beehiiv, Flodesk, etc.) before launch — most of
// them offer a simple REST API you can call from here with your API key
// stored in an environment variable (never hardcode it in this file).
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const leadMagnetSlug = typeof body?.leadMagnetSlug === "string" ? body.leadMagnetSlug : "unknown";

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: replace this with an actual call to your email service provider's API.
  console.log(`[subscribe] ${email} requested "${leadMagnetSlug}"`);

  return NextResponse.json({ success: true });
}
