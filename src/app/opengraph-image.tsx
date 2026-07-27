import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #17392e 0%, #2f6f5c 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.85, letterSpacing: 2 }}>{siteConfig.name.toUpperCase()}</div>
        <div style={{ fontSize: 60, fontWeight: 700, marginTop: 24, lineHeight: 1.15, maxWidth: 950 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 28, marginTop: 32, color: "#f6c096" }}>
          Strength &amp; Muscle Coaching for GLP-1 Users
        </div>
      </div>
    ),
    { ...size },
  );
}
