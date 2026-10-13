import { ImageResponse } from "next/og";
import { defaultLocale } from "@/config/i18n";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";

const { site } = getContent(defaultLocale);

export const alt = site.title;
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
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#070A0F",
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(99,102,241,0.45), transparent 45%), radial-gradient(circle at 8% 96%, rgba(16,185,129,0.4), transparent 45%)",
          color: "#F8FAFC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: -2 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05, maxWidth: 960 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 28, color: "#34D399" }}>{new URL(siteConfig.url).hostname}</div>
        </div>
      </div>
    ),
    size,
  );
}
