"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface FloatingToggleProps {
  viewMode: "web" | "app";
  setViewMode: (mode: "web" | "app") => void;
}

export function FloatingToggle({ viewMode, setViewMode }: FloatingToggleProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  // Create a DOM node once on the client
  useEffect(() => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    setContainer(div);
    return () => {
      document.body.removeChild(div);
    };
  }, []);

  // During server render (or before the div is created) render nothing
  if (!container) return null;

  return createPortal(
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] bg-[#12141c]/90 border border-white/10 p-1.5 rounded-full shadow-[0_20px_45px_rgba(0,0,0,0.3)] backdrop-blur-md flex items-center gap-1 select-none">
      <button
        onClick={() => setViewMode("web")}
        className="rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] bg-white text-black font-extrabold shadow-sm flex items-center gap-2 transition duration-200"
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        🌐 Desktop Web
      </button>
      <button
        onClick={() => setViewMode("app")}
        className="rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white flex items-center gap-2 transition duration-200"
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
        📱 Mobile App Preview
      </button>
    </div>,
    container
  );
}
