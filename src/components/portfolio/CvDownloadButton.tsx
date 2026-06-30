"use client";

import { useEffect, useState } from "react";

export function CvDownloadButton({ className }: { className?: string }) {
  const [cvUrl, setCvUrl] = useState<string>("");

  useEffect(() => {
    fetch("/api/cv")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.url) {
          setCvUrl(data.data.url);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!cvUrl) return null;

  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Download CV
    </a>
  );
}
