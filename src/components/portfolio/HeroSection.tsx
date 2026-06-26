import Image from "next/image";
import { site, socialLinks, SocialLinkButton } from "./shared";

export function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-16">
        <div className="section-shell relative">
          <SiteNav />

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[rgba(18,18,18,0.08)] bg-[rgba(255,255,255,0.42)] shadow-[0_35px_100px_rgba(17,19,24,0.12)] backdrop-blur-sm lg:mt-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08))]" />

            <div className="relative grid min-h-[760px] lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative z-10 flex flex-col justify-end bg-[linear-gradient(180deg,#f8f4ed_0%,#efe6d7_100%)] px-6 pb-12 pt-28 sm:px-10 lg:px-14 lg:pb-16 lg:pt-36">
                <p className="reveal text-xs font-black uppercase tracking-[0.48em] text-[rgba(18,18,18,0.52)]">
                  {site.title}
                </p>
                <h1 className="reveal reveal-delay-1 mt-5 max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[var(--foreground)] sm:text-6xl lg:text-[5.7rem]">
                  {site.name}
                </h1>
                <p className="reveal reveal-delay-2 mt-6 max-w-lg text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
                  {site.intro}
                </p>

                <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                  {socialLinks.map((link) => (
                    <SocialLinkButton key={link.label} {...link} />
                  ))}
                </div>

                <div className="mt-10 inline-flex max-w-fit items-center gap-3 rounded-full border border-[rgba(18,18,18,0.1)] bg-white/70 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.34em] text-[rgba(18,18,18,0.58)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  3+ years of hands-on MERN stack experience
                </div>

                <div className="mt-3 inline-flex max-w-fit items-center gap-3 rounded-full border border-[rgba(18,18,18,0.1)] bg-white/55 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.34em] text-[rgba(18,18,18,0.48)]">
                  Installable PWA ready
                </div>
              </div>

              <div className="relative z-20 flex items-end overflow-hidden bg-[linear-gradient(180deg,#1a1d24_0%,#0b0c10_100%)] px-6 pb-12 pt-24 text-white sm:px-10 lg:-ml-[12%] lg:px-12 lg:pb-16 lg:pt-28 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(139,92,246,0.38),transparent_22%),radial-gradient(circle_at_78%_70%,rgba(212,92,61,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_32%,rgba(255,255,255,0.04))]" />
                  <div className="absolute -left-6 top-10 h-56 w-56 rounded-full border border-white/10" />
                  <div className="absolute right-10 top-16 h-40 w-40 rounded-full border border-white/10" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.36))]" />
                </div>

                <div className="relative z-10 flex w-full flex-col items-start gap-8">
                  <p className="max-w-sm text-sm uppercase tracking-[0.38em] text-white/60">
                    Visual craft, measurable structure, and clean delivery
                  </p>

                  <div className="float relative w-full max-w-[32rem] self-end">
                    <div className="absolute -inset-3 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent)] blur-2xl" />
                    <div className="relative aspect-[4/5] min-h-[20rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#11141b] shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
                      <Image
                        src="/assets/portfolio_3-v2.jpg"
                        alt="Portrait of Aditya Dhar Dwivedi"
                        width={800}
                        height={960}
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="h-full w-full object-cover object-top"
                        priority
                      />
                    </div>
                  </div>

                  <div className="max-w-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.48em] text-white/48">
                      portfolio note
                    </p>
                    <p className="mt-4 text-lg leading-8 text-white/84">
                      Responsive interfaces, strong visual rhythm, and thoughtful motion in every section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SiteNav() {
  const navLinks = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <>
      <nav className="absolute left-1/2 top-0 z-30 w-[min(100%,74rem)] -translate-x-1/2 px-6 pt-0 lg:px-10">
        <div className="overflow-hidden rounded-[1.35rem] border border-[rgba(18,18,18,0.1)] bg-white/72 shadow-[0_22px_60px_rgba(16,18,22,0.15)] backdrop-blur-lg">
          <div className="grid items-stretch lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex items-center justify-between border-b border-[rgba(18,18,18,0.08)] px-5 py-4 lg:border-b-0 lg:border-r">
              <a
                href="#top"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(18,18,18,0.14)] bg-[var(--surface)] text-sm font-black tracking-[0.3em] text-[var(--foreground)]"
                aria-label="Back to top"
              >
                AD
              </a>

              <details className="group relative lg:hidden">
                <summary className="list-none rounded-full border border-[rgba(18,18,18,0.12)] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--foreground)]">
                  Menu
                </summary>
                <div className="absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-[1.25rem] border border-[rgba(18,18,18,0.12)] bg-[rgba(255,255,255,0.96)] p-3 shadow-[0_24px_60px_rgba(16,18,22,0.14)]">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="rounded-full px-4 py-3 text-sm font-semibold text-[rgba(18,18,18,0.72)] transition hover:bg-black/5 hover:text-[var(--foreground)]"
                      >
                        {link.label}
                      </a>
                    ))}
                    <a
                      href="#contact"
                      className="mt-1 rounded-full bg-[var(--night)] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.28em] text-white"
                    >
                      Contact me
                    </a>
                  </div>
                </div>
              </details>
            </div>

            <div className="hidden items-center justify-end gap-8 bg-[linear-gradient(135deg,#1b1d25_0%,#0d0f14_100%)] px-6 py-4 text-white lg:flex">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="rounded-full border border-white/26 px-5 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-[var(--night)]"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
