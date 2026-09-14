import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Cohesys Health Solutions — oncology EMR consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c2238",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.18em", color: "#8eb4e0" }}>
          {site.tagline.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.1, maxWidth: 980 }}>
            Oncology EMR for community hospitals
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "#d5dee7",
            }}
          >
            {`Meditech Expanse and Epic · ${site.legalName}`}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8eb4e0" }}>
          {site.email}
        </div>
      </div>
    ),
    { ...size },
  );
}
