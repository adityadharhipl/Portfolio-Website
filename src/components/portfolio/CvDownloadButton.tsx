"use client";

import { useEffect, useState } from "react";

export function CvDownloadButton({ className }: { className?: string }) {
  const [cvUrl, setCvUrl] = useState<string>("");

  useEffect(() => {
    fetch("/api/cv")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.url) {
          setCvUrl(data.data.url);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Always render the button — just disable/hide href if URL not loaded yet
  // This prevents layout shift (blinking) on first load
  return (
    <a
      href={cvUrl || "#"}
      target={cvUrl ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={!cvUrl ? (e) => e.preventDefault() : undefined}
      className={className}
      style={{ opacity: cvUrl ? 1 : 0.5, pointerEvents: cvUrl ? "auto" : "none" }}
    >
      Download CV
    </a>
  );
}
