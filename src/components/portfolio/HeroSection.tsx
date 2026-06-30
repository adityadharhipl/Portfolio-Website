import Image from "next/image";
import { site, socialLinks, SocialLinkButton } from "./shared";
import { CvDownloadButton } from "./CvDownloadButton";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 pt-4 lg:pb-16" style={{ background: "var(--background)" }}>
      <div className="section-shell relative">
        <SiteNav />

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl lg:mt-12" style={{ background: "#11141b" }}>
          <div className="relative grid min-h-[760px] lg:grid-cols-[1.02fr_0.98fr]">

            {/* LEFT — text content, dark background */}
            <div className="relative z-10 flex flex-col justify-end px-6 pb-12 pt-28 sm:px-10 lg:px-14 lg:pb-16 lg:pt-36" style={{ background: "#07090e" }}>
              <p className="reveal text-xs font-black uppercase tracking-[0.48em]" style={{ color: "#60a5fa" }}>
                {site.title}
              </p>
              <h1 className="reveal reveal-delay-1 mt-5 max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.7rem]">
                {site.name}
              </h1>
              <p className="reveal reveal-delay-2 mt-6 max-w-lg text-base leading-8 sm:text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
                {site.intro}
              </p>

              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => (
                  <SocialLinkButton key={link.label} {...link} />
                ))}
              </div>

              <div className="mt-10 inline-flex max-w-fit items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.34em]" style={{ background: "#15202B", color: "rgba(255,255,255,0.7)" }}>
                <span className="h-2 w-2 rounded-full" style={{ background: "#3b82f6" }} />
                3+ years of hands-on MERN stack experience
              </div>
            </div>

            {/* RIGHT — portrait photo panel */}
            <div
              className="relative z-20 flex flex-col items-start justify-end overflow-hidden px-6 pb-12 pt-24 text-white sm:px-10 lg:-ml-[12%] lg:px-12 lg:pb-16 lg:pt-28 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
              style={{ background: "linear-gradient(180deg,#15202B 0%,#0b0c10 100%)" }}
            >
              {/* Subtle gradient overlays */}
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 72% 18%,rgba(59,130,246,0.25),transparent 40%),radial-gradient(circle at 20% 80%,rgba(16,185,129,0.1),transparent 40%)" }} />

              {/* Portrait card — large and prominent */}
              <div className="relative w-full flex-1 flex items-center justify-center py-8">
                <div
                  className="relative w-full max-w-[340px] mx-auto overflow-hidden shadow-2xl"
                  style={{
                    borderRadius: "2rem",
                    border: "1px solid rgba(255,255,255,0.12)",
                    aspectRatio: "3/4",
                    background: "#07090e",
                  }}
                >
                  <Image
                    src="/assets/hero-portrait.jpg"
                    alt="Aditya Dhar Dwivedi"
                    fill
                    sizes="(max-width: 1024px) 90vw, 340px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Bottom note */}
              <div className="relative z-10 max-w-md mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.48em]" style={{ color: "rgba(255,255,255,0.48)" }}>
                  portfolio note
                </p>
                <p className="mt-3 text-lg leading-8 font-bold" style={{ color: "rgba(255,255,255,0.84)" }}>
                  Responsive interfaces, strong visual rhythm, and thoughtful motion in every section.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SiteNav() {
  const navLinks = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
    { label: "Admin", href: "/admin" },
  ];

  return (
    <nav className="absolute left-1/2 top-0 z-30 w-[min(100%,74rem)] -translate-x-1/2 px-6 pt-0 lg:px-10">
      <div className="overflow-hidden rounded-[1.35rem] shadow-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="grid items-stretch lg:grid-cols-[0.78fr_1.22fr]">

          {/* Left side — white/cream (same as old design) */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRight: "1px solid rgba(0,0,0,0.08)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <a
              href="#top"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-black tracking-[0.3em] transition hover:bg-black/5"
              style={{ border: "1px solid rgba(18,18,18,0.14)", background: "#f5f5f2", color: "#121212" }}
              aria-label="Back to top"
            >
              AD
            </a>

            {/* Mobile hamburger */}
            <details className="group relative lg:hidden">
              <summary className="list-none rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.28em] cursor-pointer" style={{ border: "1px solid rgba(18,18,18,0.12)", background: "white", color: "#121212" }}>
                Menu
              </summary>
              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-[1.25rem] p-3 shadow-2xl z-50" style={{ border: "1px solid rgba(18,18,18,0.12)", background: "rgba(255,255,255,0.98)" }}>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-black/5"
                      style={{ color: "rgba(18,18,18,0.72)" }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mt-1 rounded-full px-4 py-3 text-center text-xs font-black uppercase tracking-[0.28em] text-white"
                    style={{ background: "#15171d" }}
                  >
                    Contact me
                  </a>
                  <CvDownloadButton
                    className="mt-1 rounded-full px-4 py-3 text-center text-xs font-black uppercase tracking-[0.28em] text-white"
                    style={{ background: "#15171d" }}
                  />
                </div>
              </div>
            </details>
          </div>

          {/* Right side — dark nav */}
          <div
            className="hidden items-center justify-between gap-4 px-5 py-3 text-white lg:flex"
            style={{ background: "linear-gradient(135deg,#1b1d25 0%,#0d0f14 100%)" }}
          >
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-semibold transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#contact"
                className="whitespace-nowrap rounded-full border px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
                style={{ border: "1px solid rgba(255,255,255,0.26)" }}
              >
                Contact me
              </a>
              <CvDownloadButton
                className="whitespace-nowrap rounded-full border px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
                style={{ border: "1px solid rgba(255,255,255,0.26)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
