import Image from "next/image";
import { site, socialLinks, SocialLinkButton } from "./shared";
import { CvDownloadButton } from "./CvDownloadButton";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 pt-4 lg:pb-16 bg-[#0b0c10]">
      <div className="section-shell relative">
        <SiteNav />

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#11141b] shadow-2xl lg:mt-12">
          
          <div className="relative grid min-h-[760px] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10 flex flex-col justify-end bg-[#07090e] px-6 pb-12 pt-28 sm:px-10 lg:px-14 lg:pb-16 lg:pt-36">
              <p className="reveal text-xs font-black uppercase tracking-[0.48em] text-blue-400">
                {site.title}
              </p>
              <h1 className="reveal reveal-delay-1 mt-5 max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.7rem]">
                {site.name}
              </h1>
              <p className="reveal reveal-delay-2 mt-6 max-w-lg text-base leading-8 text-white/70 sm:text-lg">
                {site.intro}
              </p>

              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => (
                  <SocialLinkButton key={link.label} {...link} />
                ))}
              </div>

              <div className="mt-10 inline-flex max-w-fit items-center gap-3 rounded-full border border-white/10 bg-[#15202B] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.34em] text-white/70">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                3+ years of hands-on MERN stack experience
              </div>
            </div>

            <div className="relative z-20 flex items-end overflow-hidden bg-[linear-gradient(180deg,#15202B_0%,#0b0c10_100%)] px-6 pb-12 pt-24 text-white sm:px-10 lg:-ml-[12%] lg:px-12 lg:pb-16 lg:pt-28 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(59,130,246,0.38),transparent_22%),radial-gradient(circle_at_78%_70%,rgba(16,185,129,0.18),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.06),transparent_32%,rgba(0,0,0,0.04))]" />
              </div>

              <div className="relative z-10 flex w-full flex-col items-start gap-8">
                <p className="max-w-sm text-sm uppercase tracking-[0.38em] text-white/60">
                  Building Scalable, Modern, Efficient Web Applications.
                </p>

                <div className="float relative w-full max-w-[32rem] self-end">
                  <div className="absolute -inset-3 rounded-[2rem] bg-[linear-gradient(135deg,rgba(59,130,246,0.18),transparent)] blur-2xl" />
                  <div className="relative aspect-[16/10] min-h-[20rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#07090e] shadow-2xl flex items-center justify-center">
                    {/* Replaced with a more generic placeholder/banner style as requested */}
                    <Image
                      src="/assets/hero-portrait.jpg"
                      alt="Aditya Dhar Dwivedi"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.48em] text-white/48">
                    Turning Ideas
                  </p>
                  <p className="mt-4 text-lg leading-8 text-white/84 font-bold">
                    Into Robust Web Solutions.
                  </p>
                </div>
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
      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#15202B]/90 shadow-2xl backdrop-blur-lg">
        <div className="grid items-stretch lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 lg:border-b-0 lg:border-r">
            <a
              href="#top"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black text-sm font-black tracking-[0.3em] text-white hover:bg-white/10 transition"
              aria-label="Back to top"
            >
              AD
            </a>

            <details className="group relative lg:hidden">
              <summary className="list-none rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-white cursor-pointer">
                Menu
              </summary>
              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-[1.25rem] border border-white/10 bg-[#15202B] p-3 shadow-2xl">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mt-1 rounded-full bg-blue-600 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.28em] text-white"
                  >
                    Contact me
                  </a>
                  <CvDownloadButton className="mt-1 rounded-full bg-white border border-white/10 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.28em] text-black" />
                </div>
              </div>
            </details>
          </div>

          <div className="hidden items-center justify-end gap-8 bg-transparent px-6 py-4 text-white lg:flex">
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
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-black"
              >
                Contact me
              </a>
              <CvDownloadButton className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-white transition hover:bg-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
