"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { site, services, skillGroups, portfolioProjects, SkillTag, UnderlineField } from "./shared";

interface MobileAppViewProps {
  onBackToWeb?: () => void;
}

export function MobileAppView({ onBackToWeb }: MobileAppViewProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<"ALL" | "CODED" | "DESIGNED">("ALL");
  
  // Custom dialog notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form submission state
  const [submitted, setSubmitted] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setMenuOpen(false);
  };

  const filteredProjects = portfolioProjects.filter((project) => {
    if (projectFilter === "ALL") return true;
    return project.category === projectFilter;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Message sent successfully!");
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Bottom dots representation: Tab 0 (Home), Tab 1 (About), Tab 2 (Skills), Tab 3 (Projects), Tab 4 (Contact)
  const tabs = [
    { id: 0, name: "Home" },
    { id: 1, name: "About" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Portfolio" },
    { id: 4, name: "Contact" },
  ];

  return (
    <div className="mobile-app-container relative flex flex-col h-full bg-[#0b0c10] text-white overflow-hidden font-sans select-none">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="absolute top-16 left-4 right-4 z-[200] bg-orange-500/90 text-white text-xs font-black tracking-wider uppercase py-3 px-4 rounded-xl shadow-lg backdrop-blur-md flex items-center justify-center animate-mobile-fade-in border border-orange-400/20">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BAR */}
      <header className="h-14 shrink-0 bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-5 z-40">
        <button 
          onClick={() => handleTabChange(0)}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          {/* Avatar/Logo */}
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-black tracking-[0.1em] border border-white/15 text-orange-400">
            AD
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
            Portfolio
          </span>
        </button>

        {/* Back to Web mode if desktop */}
        {onBackToWeb && (
          <button 
            onClick={onBackToWeb}
            className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-400 border border-orange-400/20 rounded-full py-1 px-3 bg-orange-400/5 hover:bg-orange-400/10 transition"
          >
            Web Mode
          </button>
        )}

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition"
          aria-label="Open navigation drawer"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </header>

      {/* NAVIGATION DRAWER OVERLAY (Column 2 Mockup) */}
      {menuOpen && (
        <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col justify-between p-6 animate-overlay-fade-in">
          {/* Drawer Top */}
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-black tracking-[0.1em] border border-white/15 text-orange-400">
              AD
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10"
              aria-label="Close navigation drawer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Drawer Center: Links */}
          <nav className="flex flex-col gap-6 text-center py-10 animate-drawer-slide-in">
            <button
              onClick={() => handleTabChange(0)}
              className={`text-2xl font-black uppercase tracking-[0.2em] transition hover:text-orange-400 ${activeTab === 0 ? "text-orange-400" : "text-white/70"}`}
            >
              Home
            </button>
            <button
              onClick={() => handleTabChange(1)}
              className={`text-2xl font-black uppercase tracking-[0.2em] transition hover:text-orange-400 ${activeTab === 1 ? "text-orange-400" : "text-white/70"}`}
            >
              About
            </button>
            <button
              onClick={() => handleTabChange(2)}
              className={`text-2xl font-black uppercase tracking-[0.2em] transition hover:text-orange-400 ${activeTab === 2 ? "text-orange-400" : "text-white/70"}`}
            >
              Skills
            </button>
            <button
              onClick={() => handleTabChange(3)}
              className={`text-2xl font-black uppercase tracking-[0.2em] transition hover:text-orange-400 ${activeTab === 3 ? "text-orange-400" : "text-white/70"}`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleTabChange(4)}
              className={`text-2xl font-black uppercase tracking-[0.2em] transition hover:text-orange-400 ${activeTab === 4 ? "text-orange-400" : "text-white/70"}`}
            >
              Contact
            </button>
          </nav>

          {/* Drawer Bottom: Social/Footer Info */}
          <div className="flex flex-col items-center gap-4 text-center pb-4 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
            <div className="flex items-center gap-4">
              <a href="mailto:hello@adityadhar.dev" className="hover:text-white transition">Email</a>
              <span>•</span>
              <a href="https://github.com/adityadharhipl" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
              <span>•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
            </div>
            <span>© 2026 Aditya Dhar Dwivedi</span>
          </div>
        </div>
      )}

      {/* SCREEN VIEWPORT CONTENT AREA */}
      <main className="flex-1 overflow-hidden relative">

        {/* ======================================================== */}
        {/* SCREEN 0: IDENTITY CARD HOME SCREEN (Mockup Column 3) */}
        {/* ======================================================== */}
        {activeTab === 0 && (
          <div className="absolute inset-0 flex flex-col bg-[#08090d] animate-mobile-fade-in overflow-hidden">
            {/* Developer Portrait Image Container */}
            <div className="relative h-[48vh] w-full mobile-diagonal-clip overflow-hidden bg-[#111317]">
              {/* Photo Backdrop Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,92,61,0.22),transparent_60%)] z-10 pointer-events-none" />
              
              <Image
                src="/assets/portfolio_3-v2.jpg"
                alt="Portrait of Aditya Dhar Dwivedi"
                fill
                priority
                sizes="(max-width: 480px) 100vw, 360px"
                className="object-cover object-center scale-[1.03] transition duration-700"
              />
            </div>

            {/* Bottom Card Identity Details with Diagonal Angle Cut */}
            <div className="relative h-[30vh] bg-[#161920] px-5 pb-8 pt-7 border-t border-white/5 shadow-[0_-15px_40px_rgba(0,0,0,0.5)] z-20 flex justify-between items-center">
              
              {/* Profile Bio Details */}
              <div className="flex-1 pr-4">
                <p className="text-[10px] font-black uppercase tracking-[0.34em] text-white/50">
                  Hi, I am
                </p>
                <h1 className="mt-2 text-2xl font-black tracking-[-0.04em] leading-none text-white">
                  ADITYA DHAR
                </h1>
                <h2 className="text-2xl font-black tracking-[-0.04em] leading-tight text-white/80">
                  DWIVEDI
                </h2>
                <p className="mt-2.5 text-[9px] font-bold uppercase tracking-[0.24em] text-orange-400">
                  MERN Stack Developer
                </p>
              </div>

              {/* Floating Quick Action Buttons Stacked Vertically */}
              <div className="flex flex-col gap-3 shrink-0">
                {/* Email Action */}
                <a
                  href="mailto:hello@adityadhar.dev"
                  onClick={() => showToast("Opening mail composer...")}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/15 hover:shadow-lg active:scale-95"
                  title="Send Email"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>

                {/* Call Phone Action */}
                <button
                  onClick={() => showToast("Phone: +91 xxxxx xxxxx (Direct call)")}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/15 hover:shadow-lg active:scale-95"
                  title="Call Phone"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </button>

                {/* Map Location Action */}
                <button
                  onClick={() => showToast("Location: Noida, India (Available remote)")}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/15 hover:shadow-lg active:scale-95"
                  title="View Location"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SCREEN 1: ABOUT ME & SERVICES (Mockup Column 1 Content) */}
        {/* ======================================================== */}
        {activeTab === 1 && (
          <div className="mobile-screen absolute inset-0 bg-[#0b0c10] px-5 pt-6 pb-20 overflow-y-auto animate-mobile-slide-in">
            {/* Page Header */}
            <div className="inline-flex items-center justify-center border border-white/15 bg-white/5 py-1.5 px-4 text-[9px] font-black uppercase tracking-[0.3em]">
              About me
            </div>

            <h2 className="mt-5 text-2xl font-black uppercase tracking-[-0.05em] leading-tight">
              Clean interfaces, calm motion, & structure.
            </h2>
            
            <p className="mt-4 text-xs leading-6 text-white/70">
              I enjoy building pages that feel airy, precise, and confident. The visual language leans on strong contrasts, soft surfaces, and just enough movement to guide the eye.
            </p>

            {/* Diagonal secondary banner card */}
            <div className="mt-6 rounded-2xl border border-white/8 bg-white/3 p-4 shadow-md">
              <p className="text-[11px] leading-5 text-white/60">
                I care about readability, responsiveness, and the small cues that make an interface feel polished. Design systems, component structure, and clean code all matter.
              </p>
            </div>

            {/* IT BERRIES banner replica */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#0f1116] to-[#07080c] p-5 border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,92,61,0.08),transparent_40%)]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">IT BERRIES</p>
              <h3 className="mt-3 text-lg font-black uppercase tracking-tight leading-tight">
                We build interfaces with atmosphere and intent.
              </h3>
              <p className="mt-3 text-[11px] leading-5 text-white/60">
                A replica inspired by a classic diagonal split landing page, refined into a modern build with strong rhythm.
              </p>
            </div>

            {/* SERVICES CAROUSEL - Swipe indicators */}
            <div className="mt-8 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45">My Services</span>
              <span className="text-[9px] text-white/30 italic">Swipe / Scroll</span>
            </div>

            {/* Horizontal Services Scroller */}
            <div className="mt-4 flex gap-4 overflow-x-auto pb-4 snap-x -mx-5 px-5 scrollbar-none">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="shrink-0 w-[240px] snap-center rounded-2xl border border-white/8 bg-white/3 p-5 shadow-lg flex flex-col"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-orange-400 mb-4 shrink-0">
                    <service.icon />
                  </div>
                  <h4 className="text-base font-black uppercase tracking-tight">
                    {service.title}
                  </h4>
                  <p className="mt-2.5 text-[11px] leading-5 text-white/60 flex-1">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SCREEN 2: SKILLS GROUPS */}
        {/* ======================================================== */}
        {activeTab === 2 && (
          <div className="mobile-screen absolute inset-0 bg-[#0b0c10] px-5 pt-6 pb-20 overflow-y-auto animate-mobile-slide-in">
            <div className="inline-flex items-center justify-center border border-white/15 bg-white/5 py-1.5 px-4 text-[9px] font-black uppercase tracking-[0.3em]">
              Skills
            </div>

            <h2 className="mt-5 text-2xl font-black uppercase tracking-[-0.05em] leading-tight">
              My Technology Stack
            </h2>
            
            <p className="mt-3 text-xs leading-6 text-white/60 mb-6">
              A comprehensive toolkit covering front-end logic, database design, prompt engineering, and state management.
            </p>

            <div className="flex flex-col gap-6">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/8 bg-white/2 p-5 shadow-sm"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-400 border-b border-white/5 pb-2.5 mb-4">
                    {group.title}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <SkillTag key={item.label} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SCREEN 3: PORTFOLIO / SELECTED PROJECTS */}
        {/* ======================================================== */}
        {activeTab === 3 && (
          <div className="mobile-screen absolute inset-0 bg-[#0b0c10] px-5 pt-6 pb-20 overflow-y-auto animate-mobile-slide-in">
            <div className="inline-flex items-center justify-center border border-white/15 bg-white/5 py-1.5 px-4 text-[9px] font-black uppercase tracking-[0.3em]">
              Portfolio
            </div>

            <h2 className="mt-5 text-2xl font-black uppercase tracking-[-0.05em] leading-none">
              Selected Work
            </h2>

            {/* Filter tab buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              {(["ALL", "CODED", "DESIGNED"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setProjectFilter(tab)}
                  className={`rounded-full border px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] transition duration-200 ${
                    projectFilter === tab
                      ? "border-orange-400 bg-orange-400 text-black font-extrabold"
                      : "border-white/15 bg-white/5 text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Projects list vertically stacked for mobile scrolling */}
            <div className="mt-6 flex flex-col gap-5">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.title}
                  onClick={() => showToast(`Opening project: ${project.title}`)}
                  className="group rounded-2xl border border-white/8 bg-white/2 overflow-hidden shadow-md active:scale-[0.98] transition duration-200 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 480px) 100vw, 360px"
                      className="object-cover transition duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/20 to-transparent" />
                    
                    {/* Category tag */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-0.5 text-[8px] font-black uppercase tracking-[0.35em] text-white/90 backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 py-3 bg-[#111317]/80">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/40">Project</p>
                      <h3 className="text-base font-black tracking-tight text-white/90 mt-0.5">{project.title}</h3>
                    </div>
                    <span className="text-xs font-black text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              And many more to come!
            </p>
          </div>
        )}

        {/* ======================================================== */}
        {/* SCREEN 4: CONTACT FORM */}
        {/* ======================================================== */}
        {activeTab === 4 && (
          <div className="mobile-screen absolute inset-0 bg-[#0b0c10] px-5 pt-6 pb-20 overflow-y-auto animate-mobile-slide-in">
            <div className="inline-flex items-center justify-center border border-white/15 bg-white/5 py-1.5 px-4 text-[9px] font-black uppercase tracking-[0.3em]">
              Contact
            </div>

            <h2 className="mt-5 text-2xl font-black uppercase tracking-[-0.05em] leading-tight">
              Let&apos;s build something sharp.
            </h2>
            
            <p className="mt-3 text-xs leading-6 text-white/60">
              Drop me a note below. I&apos;m currently available for remote collaborations or MERN stack projects.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <label className="grid gap-1">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Name</span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="border-b border-white/15 bg-transparent px-0 py-2.5 text-sm text-white outline-none focus:border-orange-400 placeholder:text-white/20 transition duration-200"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Email</span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="border-b border-white/15 bg-transparent px-0 py-2.5 text-sm text-white outline-none focus:border-orange-400 placeholder:text-white/20 transition duration-200"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Message</span>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project"
                  className="border-b border-white/15 bg-transparent px-0 py-2.5 text-sm text-white outline-none focus:border-orange-400 placeholder:text-white/20 transition duration-200 resize-none"
                />
              </label>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white text-black px-6 py-2.5 text-[9px] font-black uppercase tracking-[0.35em] transition hover:bg-orange-400 hover:text-black hover:border-orange-400 shadow-md active:scale-95 duration-200"
                >
                  <span>|</span>
                  Send Message
                  <span>|</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </main>

      {/* BOTTOM NAVIGATION DOTS (Column 1 / Navigation Panel) */}
      <footer className="absolute bottom-4 left-0 right-0 h-10 flex items-center justify-center gap-4 z-40 pointer-events-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`w-2.5 h-2.5 rounded-full pointer-events-auto transition-all duration-300 ${
              activeTab === tab.id
                ? "w-7 bg-orange-400 shadow-[0_0_8px_#f97316]"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Navigate to screen ${tab.name}`}
          />
        ))}
      </footer>

    </div>
  );
}
