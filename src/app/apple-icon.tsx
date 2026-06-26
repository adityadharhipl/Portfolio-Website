import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          background:
            "linear-gradient(145deg, rgba(11,12,16,1) 0%, rgba(36,75,255,1) 100%)",
          color: "white",
          fontSize: 78,
          fontWeight: 900,
          letterSpacing: "-0.08em",
        }}
      >
        AD
      </div>
    ),
    size,
  );
}
