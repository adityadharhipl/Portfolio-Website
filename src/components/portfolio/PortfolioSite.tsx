import { AboutMeSection } from "./AboutMeSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { ItBerriesBanner } from "./ItBerriesBanner";
import { PortfolioSection } from "./PortfolioSection";
import { SkillsSection } from "./SkillsSection";

export function PortfolioSite() {
  return (
    <main id="top" className="text-[var(--foreground)]">
      <HeroSection />
      <ItBerriesBanner />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
