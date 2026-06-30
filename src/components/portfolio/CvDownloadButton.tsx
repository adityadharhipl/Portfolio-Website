"use client";

import { useEffect, useState } from "react";

export function CvDownloadButton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [cvUrl, setCvUrl] = useState<string>("");

  useEffect(() => {
    fetch("/api/cv")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.url) {
          setCvUrl(data.data.url);
        }
      })
      .catch(() => {});
  }, []);

  // Always render — no layout shift
  return (
    <a
      href={cvUrl || "#"}
      target={cvUrl ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={!cvUrl ? (e) => e.preventDefault() : undefined}
      className={className}
      style={style}
    >
      Download CV
    </a>
  );
}
