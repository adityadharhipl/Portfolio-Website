"use client";

import { ReactNode, useEffect, useState } from "react";

interface PhoneMockupProps {
  children: ReactNode;
}

export function PhoneMockup({ children }: PhoneMockupProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center py-6 px-4 select-none">
      <div className="phone-mockup-wrapper relative scale-95 sm:scale-100 transition-all duration-300">
        {/* Hardware side buttons */}
        <div className="phone-btn-power" />
        <div className="phone-btn-vol-up" />
        <div className="phone-btn-vol-down" />

        {/* Screen */}
        <div className="phone-screen-viewport relative flex flex-col">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 z-[100] h-12 flex items-center justify-between px-7 text-[11px] font-bold text-white/90 pointer-events-none">
            {/* Left Status: Clock */}
            <div className="flex items-center tracking-tight">
                {time && <span>{time}</span>}
            </div>

            {/* Center Status: Dynamic Island */}
            <div className="absolute left-1/2 top-3 -translate-x-1/2 w-28 h-6 bg-black rounded-full shadow-inner flex items-center justify-center transition-all duration-300" />

            {/* Right Status: Signal, Wifi, Battery */}
            <div className="flex items-center gap-1.5">
              {/* Cellular Signal Strength Icon */}
              <svg className="w-4 h-3 text-current" fill="none" viewBox="0 0 16 12">
                <rect x="1" y="8" width="2" height="3" rx="0.5" fill="currentColor" />
                <rect x="4" y="6" width="2" height="5" rx="0.5" fill="currentColor" />
                <rect x="7" y="4" width="2" height="7" rx="0.5" fill="currentColor" />
                <rect x="10" y="2" width="2" height="9" rx="0.5" fill="currentColor" />
                <rect x="13" y="0" width="2" height="11" rx="0.5" fill="currentColor" opacity="0.4" />
              </svg>

              {/* Wifi Icon */}
              <svg className="w-3.5 h-3.5 text-current" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.187 0-2.302.318-3.26.87-.285.163-.324.542-.1.748l.012.012c.18.18.478.163.63-.037A5.474 5.474 0 0 1 8 10c1.026 0 1.983.284 2.802.777.153.2.45.218.63.037l.014-.014zM9.25 12.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
              </svg>

              {/* Battery Icon */}
              <div className="relative w-5 h-2.5 border border-white/80 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-4/5 bg-white rounded-2xs" />
                <div className="absolute -right-[3px] top-[3px] w-[2px] h-[4px] bg-white/80 rounded-r-xs" />
              </div>
            </div>
          </div>

          {/* Viewport Content */}
          <div className="flex-1 w-full h-full pt-12 overflow-hidden relative">
            {children}
          </div>

          {/* Home Swipe Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/60 rounded-full z-[100] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
