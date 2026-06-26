import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 30%, #244bff 0%, #0b0c10 45%, #050507 100%)",
          color: "white",
          fontSize: 220,
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
