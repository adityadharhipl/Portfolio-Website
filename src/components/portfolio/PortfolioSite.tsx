"use client";

import { useEffect, useState } from "react";
import { AboutMeSection } from "./AboutMeSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { ItBerriesBanner } from "./ItBerriesBanner";
import { PortfolioSection } from "./PortfolioSection";
import { SkillsSection } from "./SkillsSection";
import { MobileAppView } from "./MobileAppView";
import { PhoneMockup } from "./PhoneMockup";
import { FloatingToggle } from "./FloatingToggle";

export function PortfolioSite() {
  const [viewMode, setViewMode] = useState<"web" | "app">("web");
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Detect mobile viewport on load and on resize
    const checkViewport = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    // Initial check to set default view mode on mobile
    if (window.innerWidth < 768) {
      setViewMode("app");
    }
    
    checkViewport();
    window.addEventListener("resize", checkViewport);
    setHasMounted(true);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);



  return (
    <>
      {viewMode === "app" ? (
        isMobile ? (
          /* Native Full Screen layout on mobile devices */
          <div className="h-screen w-screen overflow-hidden bg-[#0b0c10]">
            <MobileAppView />
          </div>
        ) : (
          /* Phone Simulator frame layout on Desktop */
          <div className="min-h-screen flex items-center justify-center bg-[#07080c] py-12 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(212,92,61,0.06),transparent_45%)]">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_40%)]" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <PhoneMockup>
                <MobileAppView onBackToWeb={() => setViewMode("web")} />
              </PhoneMockup>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Tip: Swipe navigation dots at bottom or click top right menu
              </p>
            </div>
          </div>
        )
      ) : (
        /* Standard Web layout */
        <main id="top" className="text-[var(--foreground)] min-h-screen relative">
          <HeroSection />
          <ItBerriesBanner />
          <AboutMeSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
          <Footer />
        </main>
      )}

      {/* Floating Toggle Switch (client‑only via portal) */}
      <FloatingToggle viewMode={viewMode} setViewMode={setViewMode} />
    </>
  );

}
