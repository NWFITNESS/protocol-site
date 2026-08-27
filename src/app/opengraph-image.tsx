import { ImageResponse } from "next/og";

export const alt = "Protocol - The coaching protocol";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded link-preview card (Open Graph / Twitter). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0B",
          color: "#F5F5F7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 128,
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          <span style={{ color: "#3B82F6" }}>[</span>
          <span style={{ margin: "0 28px" }}>P</span>
          <span style={{ color: "#3B82F6" }}>]</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "14px",
            marginTop: 20,
          }}
        >
          PROTOCOL
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#A8A8B0", marginTop: 32 }}>
          The operating system for serious coaches.
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8A8A93", marginTop: 14 }}>
          Built by a coach, for coaches.
        </div>
      </div>
    ),
    { ...size },
  );
}
