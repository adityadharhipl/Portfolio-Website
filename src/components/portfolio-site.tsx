import Image from "next/image";
import type { ComponentType } from "react";

const site = {
  name: "Tomasz Gajda",
  title: "Front-end Developer / UI Designer",
  intro:
    "I create clean, high-contrast interfaces with a focus on craft, motion, and responsive structure. I like work that feels considered, generous, and ready to ship.",
  location: "Based in Europe, available for remote projects",
};

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: ComponentType;
};

type SkillItem =
  | {
      label: string;
      kind: "glyph";
      glyph: string;
      bg: string;
      fg: string;
    }
  | {
      label: string;
      kind: "uk" | "spain";
    };

const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:hello@tomaszgajda.design", icon: EmailIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
];

const services: ServiceCard[] = [
  {
    title: "DESIGN",
    description:
      "Visual systems, layout decisions, and interface polish that make the page feel deliberate and distinct.",
    icon: DesignIcon,
  },
  {
    title: "DEVELOPMENT",
    description:
      "Semantic, responsive front-end builds with thoughtful structure and reliable cross-device behavior.",
    icon: DevelopmentIcon,
  },
  {
    title: "MAINTENANCE",
    description:
      "Careful updates, refinements, and performance-minded adjustments that keep the experience sharp.",
    icon: MaintenanceIcon,
  },
];

const skillGroups: Array<{ title: string; items: SkillItem[] }> = [
  {
    title: "Using Now",
    items: [
      { label: "HTML5", kind: "glyph", glyph: "HTML", bg: "#fff3eb", fg: "#d7461a" },
      { label: "CSS3", kind: "glyph", glyph: "CSS", bg: "#ebf4ff", fg: "#2563eb" },
      { label: "SASS", kind: "glyph", glyph: "SASS", bg: "#f8ecff", fg: "#cf649a" },
      { label: "JS", kind: "glyph", glyph: "JS", bg: "#fff8db", fg: "#c9a20b" },
      { label: "React", kind: "glyph", glyph: "Rx", bg: "#e5fbff", fg: "#1aa2c1" },
      { label: "Bootstrap", kind: "glyph", glyph: "B", bg: "#f6efff", fg: "#7c3aed" },
      { label: "Git", kind: "glyph", glyph: "Git", bg: "#fff0ee", fg: "#e15432" },
      { label: "Figma", kind: "glyph", glyph: "F", bg: "#fdf0e9", fg: "#a855f7" },
    ],
  },
  {
    title: "Learning",
    items: [
      { label: "Node.js", kind: "glyph", glyph: "Node", bg: "#ecfdf3", fg: "#15803d" },
      { label: "MySQL", kind: "glyph", glyph: "SQL", bg: "#eef6ff", fg: "#0369a1" },
      { label: "MongoDB", kind: "glyph", glyph: "M", bg: "#eefbf1", fg: "#16a34a" },
      { label: "TypeScript", kind: "glyph", glyph: "TS", bg: "#edf6ff", fg: "#2563eb" },
    ],
  },
  {
    title: "Other Skills",
    items: [
      { label: "English (UK)", kind: "uk" },
      // { label: "Spanish (Spain)", kind: "spain" },
      // { label: "C++", kind: "glyph", glyph: "C++", bg: "#eff6ff", fg: "#1d4ed8" },
      // { label: "C", kind: "glyph", glyph: "C", bg: "#f3f4f6", fg: "#334155" },
    ],
  },
];

const portfolioProjects = [
  { title: "Neon Grid", category: "CODED", image: "/assets/portfolio_1.svg" },
  { title: "eatome.", category: "DESIGNED", image: "/assets/portfolio_2.svg" },
  { title: "Night Drive", category: "CODED", image: "/assets/portfolio_3.svg" },
  { title: "Orbit", category: "DESIGNED", image: "/assets/portfolio_4.svg" },
  { title: "Signal", category: "CODED", image: "/assets/portfolio_5.svg" },
  { title: "Neural UI", category: "DESIGNED", image: "/assets/portfolio_6.svg" },
];

const footerLinks: SocialLink[] = [
  { label: "Email", href: "mailto:hello@tomaszgajda.design", icon: EmailIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
];

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

function HeroSection() {
  return (
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
                {site.location}
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

                <div className="float relative w-full max-w-[26rem] self-end">
                  <div className="absolute -inset-3 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent)] blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11141b] shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
                    <Image
                      src="/assets/developer_portrait.svg"
                      alt="Portrait of Tomasz Gajda"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
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
  );
}

function SiteNav() {
  const navLinks = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav className="absolute left-1/2 top-0 z-30 w-[min(100%,74rem)] -translate-x-1/2 px-6 pt-0 lg:px-10">
      <div className="overflow-hidden rounded-[1.35rem] border border-[rgba(18,18,18,0.1)] bg-white/72 shadow-[0_22px_60px_rgba(16,18,22,0.15)] backdrop-blur-lg">
        <div className="grid items-stretch lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex items-center justify-between border-b border-[rgba(18,18,18,0.08)] px-5 py-4 lg:border-b-0 lg:border-r">
            <a
              href="#top"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(18,18,18,0.14)] bg-[var(--surface)] text-sm font-black tracking-[0.3em] text-[var(--foreground)]"
              aria-label="Back to top"
            >
              TG
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
  );
}

function ItBerriesBanner() {
  return (
    <section className="section-shell pb-6 pt-6 lg:pb-10">
      <div className="section-card relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f1116_0%,#111318_45%,#07080c_100%)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
        <div className="absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,92,61,0.16),transparent_16%),radial-gradient(circle_at_82%_72%,rgba(255,255,255,0.08),transparent_18%)]" />
        </div>
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/52">IT BERRIES</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              We build interfaces with atmosphere and intent.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              A portfolio replica inspired by a classic diagonal split landing page, refined into a
              static modern build with subtle movement and strong section rhythm.
            </p>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/18 px-5 py-3 text-xs font-black uppercase tracking-[0.45em] text-white transition hover:bg-white hover:text-[var(--night)]"
            >
              <span>|</span>
              Read more
              <span>|</span>
            </a>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <p
              className="select-none text-[clamp(5rem,18vw,15rem)] font-black leading-none tracking-[-0.14em] text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.16)" }}
            >
              IT
            </p>
            <div className="absolute right-8 top-1/2 hidden h-48 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/18 to-transparent lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMeSection() {
  return (
    <section id="about" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card rounded-[2rem] bg-[var(--surface)] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <SectionHeader title="ABOUT ME" />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div>
              <h3 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-4xl">
                Clean interfaces, calm motion, and structured delivery.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--ink-soft)]">
                I enjoy building pages that feel airy, precise, and confident. The visual language
                leans on strong contrasts, soft surfaces, and just enough movement to guide the eye.
              </p>
            </div>

            <div className="relative rounded-[1.75rem] border border-[rgba(18,18,18,0.08)] bg-white/70 p-6 shadow-[0_20px_55px_rgba(16,18,22,0.08)]">
              <div className="glow-line pb-6">
                <WaveDivider />
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--ink-soft)]">
                I care about readability, responsiveness, and the small cues that make an interface
                feel polished. Design systems, component structure, and subtle hover states all matter.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`lift-card reveal rounded-[1.5rem] border border-[rgba(18,18,18,0.08)] bg-white/75 p-6 shadow-[0_16px_40px_rgba(16,18,22,0.06)] ${
                  index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--night)] text-white">
                  <service.icon />
                </div>
                <h4 className="mt-5 text-xl font-black uppercase tracking-[-0.03em]">
                  {service.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card rounded-[2rem] bg-[rgba(255,255,255,0.5)] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <SectionHeader title="SKILLS" />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.5rem] border border-[rgba(18,18,18,0.08)] bg-white/72 p-6 shadow-[0_16px_40px_rgba(16,18,22,0.06)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.42em] text-[rgba(18,18,18,0.52)]">
                  {group.title}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <SkillTag key={item.label} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card overflow-hidden rounded-[2rem] bg-[var(--surface)]">
          <div className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(180deg,#11151c_0%,#171b22_50%,#232a32_100%)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <Image
              src="/assets/mountain-banner.svg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,20,0.12),rgba(13,15,20,0.58))]" />
            <div className="relative flex h-full flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/58">
                  Selected projects
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Portfolio
                </h2>
              </div>
              <div className="section-box section-box-dark">PORTFOLIO</div>
            </div>
          </div>

          <div className="px-6 pb-10 pt-8 sm:px-10 lg:px-14 lg:pb-14">
            <div className="flex flex-wrap gap-3">
              {["ALL", "CODED", "DESIGNED"].map((tab, index) => (
                <span
                  key={tab}
                  className={`rounded-full border px-5 py-2 text-xs font-black uppercase tracking-[0.34em] ${
                    index === 0
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
                      : "border-[rgba(18,18,18,0.16)] text-[rgba(18,18,18,0.64)]"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolioProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group lift-card overflow-hidden rounded-[1.5rem] border border-[rgba(18,18,18,0.08)] bg-white shadow-[0_18px_45px_rgba(16,18,22,0.08)] ${
                    index % 2 === 1 ? "md:translate-y-4 xl:translate-y-0" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--night)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,20,0.1),rgba(13,15,20,0.55))]" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-black/18 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.4em] text-white/78 backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[rgba(18,18,18,0.46)]">
                        Project
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.04em]">{project.title}</h3>
                    </div>
                    <span className="text-sm font-black text-[rgba(18,18,18,0.42)]">0{index + 1}</span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.32em] text-[rgba(18,18,18,0.54)]">
              And many more to come!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card rounded-[2rem] bg-[rgba(255,255,255,0.58)] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <SectionHeader title="CONTACT" />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-lg text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-4xl">
                Let&apos;s build a page that feels sharp and memorable.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--ink-soft)]">
                This contact block stays intentionally minimal: clean underlines, generous spacing, and
                a direct call to action.
              </p>
            </div>

            <form className="grid gap-6">
              <UnderlineField label="Name" type="text" placeholder="Your name" />
              <UnderlineField label="Email" type="email" placeholder="you@example.com" />
              <UnderlineField label="Phone" type="tel" placeholder="+00 000 000 000" />
              <UnderlineField label="Message" type="text" placeholder="Tell me about your project" multiline />

              <div className="pt-4 text-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-full border border-[rgba(18,18,18,0.18)] bg-[var(--night)] px-6 py-3 text-xs font-black uppercase tracking-[0.45em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--foreground)]"
                >
                  <span>|</span>
                  Submit
                  <span>|</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--night)] py-10 text-white lg:py-12">
      <div className="section-shell">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/4 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.44em] text-white/82 transition hover:text-white"
          >
            <ArrowUpIcon />
            Back to top
          </a>

          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <FooterLinkButton key={link.label} {...link} />
            ))}
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/48">
            © 2026 Tomasz Gajda. Crafted as a  portfolio replica.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ title }: { title: string }) {
  return <div className="section-box">{title}</div>;
}

function SocialLinkButton({ label, href, icon: Icon }: SocialLink) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(18,18,18,0.12)] bg-white/72 text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_35px_rgba(16,18,22,0.1)]"
      aria-label={label}
      title={label}
    >
      <Icon />
    </a>
  );
}

function FooterLinkButton({ label, href, icon: Icon }: SocialLink) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex h-11 items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 text-sm font-semibold text-white/84 transition hover:bg-white hover:text-[var(--night)]"
      aria-label={label}
    >
      <Icon />
      {label}
    </a>
  );
}

function SkillTag({ item }: { item: SkillItem }) {
  if (item.kind === "glyph") {
    return (
      <div className={`inline-flex items-center gap-3 rounded-full border border-[rgba(18,18,18,0.08)] px-4 py-2.5 text-sm font-semibold shadow-[0_10px_25px_rgba(16,18,22,0.06)]`} style={{ backgroundColor: item.bg, color: item.fg }}>
        <SkillGlyph glyph={item.glyph} background={item.bg} foreground={item.fg} />
        {item.label}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(18,18,18,0.08)] bg-white px-4 py-2.5 text-sm font-semibold shadow-[0_10px_25px_rgba(16,18,22,0.06)]">
      {item.kind === "uk" ? <UkFlagIcon /> : <SpainFlagIcon />}
      {item.kind === "uk" ? "English (UK)" : "Spanish (Spain)"}
    </div>
  );
}

function UnderlineField({
  label,
  type,
  placeholder,
  multiline = false,
}: {
  label: string;
  type: string;
  placeholder: string;
  multiline?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-black uppercase tracking-[0.36em] text-[rgba(18,18,18,0.54)]">
        {label}
      </span>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          className="border-b border-[rgba(18,18,18,0.16)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none transition placeholder:text-[rgba(18,18,18,0.34)] focus:border-[var(--foreground)]"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="border-b border-[rgba(18,18,18,0.16)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none transition placeholder:text-[rgba(18,18,18,0.34)] focus:border-[var(--foreground)]"
        />
      )}
    </label>
  );
}

function WaveDivider() {
  return (
    <svg viewBox="0 0 240 26" className="h-6 w-full text-[rgba(18,18,18,0.44)]" fill="none" aria-hidden="true">
      <path
        d="M2 13c10 0 10-10 20-10s10 20 20 20 10-20 20-20 10 20 20 20 10-20 20-20 10 20 20 20 10-20 20-20 10 20 20 20 10-10 20-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SkillGlyph({
  glyph,
  background,
  foreground,
}: {
  glyph: string;
  background: string;
  foreground: string;
}) {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6 shrink-0" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="14" fill={background} />
      <text
        x="24"
        y="27"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        letterSpacing="0.08em"
        fill={foreground}
      >
        {glyph}
      </text>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m5.5 7.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 4a8 8 0 0 0-2.5 15.6c.4.08.55-.18.55-.4v-1.45c-2.25.49-2.73-.95-2.73-.95-.37-.95-.9-1.2-.9-1.2-.73-.5.05-.49.05-.49.8.06 1.22.84 1.22.84.72 1.22 1.9.87 2.36.66.07-.53.28-.87.5-1.07-1.79-.2-3.67-.9-3.67-4a3.13 3.13 0 0 1 .83-2.16c-.08-.21-.36-1.07.08-2.23 0 0 .68-.22 2.23.82a7.7 7.7 0 0 1 4.05 0c1.55-1.04 2.23-.82 2.23-.82.44 1.16.16 2.02.08 2.23a3.13 3.13 0 0 1 .83 2.16c0 3.11-1.88 3.8-3.67 4 .3.26.57.77.57 1.56v2.31c0 .22.15.48.55.4A8 8 0 0 0 12 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M6.5 9.25V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.5 6.75v0" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M10.5 18v-4.2c0-1.9 1-2.95 2.52-2.95 1.62 0 2.48 1.04 2.48 2.95V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.5 11.1V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M4.5 19.5 9 18l8.8-8.8a1.8 1.8 0 0 0 0-2.5l-1.5-1.5a1.8 1.8 0 0 0-2.5 0L4.5 15.5v4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m13 6 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M9 6 4 12l5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 6l5 6-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 4 11 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MaintenanceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M14.5 6.5a4 4 0 0 0-5.5 5.5L4.5 16.5l3 3 4.5-4.5A4 4 0 0 0 17 14.5l-2.8-2.8 2.3-2.3-2-2-2 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UkFlagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="#1d4ed8" />
      <path d="M3 6.5 21 17.5M21 6.5 3 17.5" stroke="#fff" strokeWidth="3.4" />
      <path d="M12 5v14M3 12h18" stroke="#fff" strokeWidth="3.4" />
      <path d="M12 5v14M3 12h18" stroke="#d91f26" strokeWidth="1.5" />
      <path d="M3 6.5 21 17.5M21 6.5 3 17.5" stroke="#d91f26" strokeWidth="1.2" />
    </svg>
  );
}

function SpainFlagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3" fill="#c62828" />
      <rect x="3" y="9" width="18" height="6" fill="#f6c239" />
      <path d="M8.5 10.4h2v3.2h-2z" fill="#c62828" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m6.5 10.5 5.5-5.5 5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
