import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage:
            "radial-gradient(60rem 30rem at 15% -10%, rgba(79,70,229,0.45), transparent 60%), radial-gradient(50rem 30rem at 90% 0%, rgba(22,163,74,0.35), transparent 60%), linear-gradient(#0b1120,#0b1120)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            opacity: 0.85,
          }}
        >
          {siteConfig.brandName}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 24, maxWidth: 900 }}>
          A free call. A custom AI plan for your business.
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 24, opacity: 0.75, maxWidth: 820 }}>
          4 quick wins + a starter roadmap — no tech background required.
        </div>
      </div>
    ),
    { ...size }
  );
}
