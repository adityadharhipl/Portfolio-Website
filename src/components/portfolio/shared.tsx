import type { ComponentType } from "react";

export const site = {
  name: "Aditya Dhar Dwivedi",
  title: "MERN Stack Developer / Express.js Developer",
  intro:
    "I build clean, responsive web apps with a focus on React, Node.js, Express, MongoDB, and practical shipping discipline. I like work that is fast, readable, and easy to grow.",
  location: "3+ years of hands-on MERN stack experience",
};

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType;
};

export type ServiceCard = {
  title: string;
  description: string;
  icon: ComponentType;
};

export type SkillItem =
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

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:adityadhar.hipl@gmail.com", icon: EmailIcon },
  { label: "GitHub", href: "https://github.com/adityadharhipl", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-dhar-dwivedi-2933781b0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: LinkedInIcon,
  },
];

export const services: ServiceCard[] = [
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
  {
    title: "TEACHING",
    description:
      "Mentoring junior developers, explaining concepts clearly, and sharing practical MERN stack workflows.",
    icon: TeachingIcon,
  },
];

export const skillGroups: Array<{ title: string; items: SkillItem[] }> = [
  {
    title: "Using Now",
    items: [
      { label: "HTML5", kind: "glyph", glyph: "HTML", bg: "#fff3eb", fg: "#d7461a" },
      { label: "CSS3", kind: "glyph", glyph: "CSS", bg: "#ebf4ff", fg: "#2563eb" },
      { label: "Next Js", kind: "glyph", glyph: "Next Js", bg: "#f8ecff", fg: "#cf649a" },
      { label: "JS", kind: "glyph", glyph: "JS", bg: "#fff8db", fg: "#c9a20b" },
      { label: "React", kind: "glyph", glyph: "Rx", bg: "#e5fbff", fg: "#1aa2c1" },
      { label: "Bootstrap", kind: "glyph", glyph: "B", bg: "#f6efff", fg: "#7c3aed" },
      { label: "Git / GitHub", kind: "glyph", glyph: "Git", bg: "#fff0ee", fg: "#e15432" },
      { label: "Figma", kind: "glyph", glyph: "F", bg: "#fdf0e9", fg: "#a855f7" },
    ],
  },
  {
    title: "Knolwage About",
    items: [
      { label: "Node.js", kind: "glyph", glyph: "Node", bg: "#ecfdf3", fg: "#15803d" },
      { label: "MySQL", kind: "glyph", glyph: "SQL", bg: "#eef6ff", fg: "#0369a1" },
      { label: "MongoDB", kind: "glyph", glyph: "M", bg: "#eefbf1", fg: "#16a34a" },
      { label: "TypeScript", kind: "glyph", glyph: "TS", bg: "#edf6ff", fg: "#2563eb" },
      { label: "Express", kind: "glyph", glyph: "EP", bg: "#edf6ff", fg: "#2563eb" },
    ],
  },
  {
    title: "Other Skills",
    items: [
      { label: "English (UK)", kind: "uk" },
      // { label: "Hindi", kind:  "in" },
      // { label: "Spanish (Spain)", kind: "spain" },
      // { label: "C++", kind: "glyph", glyph: "C++", bg: "#eff6ff", fg: "#1d4ed8" },
      // { label: "C", kind: "glyph", glyph: "C", bg: "#f3f4f6", fg: "#334155" },
    ],
  },
  {
    title: "AI Tools & Knowledge",
    items: [
      { label: "Cursor", kind: "glyph", glyph: "Cur", bg: "#eef2ff", fg: "#4338ca" },
      { label: "Antigravity", kind: "glyph", glyph: "AG", bg: "#f5f3ff", fg: "#7c3aed" },
      { label: "ChatGPT", kind: "glyph", glyph: "GPT", bg: "#ecfdf5", fg: "#0f766e" },
      { label: "Codex", kind: "glyph", glyph: "CDX", bg: "#fff7ed", fg: "#c2410c" },
      { label: "GitHub Copilot", kind: "glyph", glyph: "AI", bg: "#eff6ff", fg: "#1d4ed8" },
      { label: "AI Integration", kind: "glyph", glyph: "INT", bg: "#fef2f2", fg: "#b91c1c" },
      { label: "Prompt Engineering", kind: "glyph", glyph: "PROMPT", bg: "#faf5ff", fg: "#7e22ce" },
      { label: "Workflow Automation", kind: "glyph", glyph: "AUTO", bg: "#f0fdf4", fg: "#15803d" },
    ],
  },
];

export const portfolioProjects = [
  { title: "Neon Grid", category: "CODED", image: "/assets/portfolio_1.svg" },
  { title: "eatome.", category: "DESIGNED", image: "/assets/portfolio_2.svg" },
  { title: "Night Drive", category: "CODED", image: "/assets/portfolio_3-v2.jpg" },
  { title: "Orbit", category: "DESIGNED", image: "/assets/portfolio_4.svg" },
  { title: "Signal", category: "CODED", image: "/assets/portfolio_5.svg" },
  { title: "Neural UI", category: "DESIGNED", image: "/assets/portfolio_6.svg" },
];

export const footerLinks: SocialLink[] = [
  { label: "Email", href: "mailto:adityadhar.hipl@gmail.com", icon: EmailIcon },
  { label: "GitHub", href: "https://github.com/adityadharhipl", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-dhar-dwivedi-2933781b0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: LinkedInIcon,
  },
];

export function SectionHeader({ title }: { title: string }) {
  return <div className="section-box">{title}</div>;
}

export function SocialLinkButton({ label, href, icon: Icon }: SocialLink) {
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

export function FooterLinkButton({ label, href, icon: Icon }: SocialLink) {
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

export function SkillTag({ item }: { item: SkillItem }) {
  if (item.kind === "glyph") {
    return (
      <div
        className="inline-flex items-center gap-3 rounded-full border border-[rgba(18,18,18,0.08)] px-4 py-2.5 text-sm font-semibold shadow-[0_10px_25px_rgba(16,18,22,0.06)]"
        style={{ backgroundColor: item.bg, color: item.fg }}
      >
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

export function UnderlineField({
  label,
  type,
  placeholder,
  multiline = false,
  ...rest
}: {
  label: string;
  type: string;
  placeholder: string;
  multiline?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
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
          {...rest}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="border-b border-[rgba(18,18,18,0.16)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none transition placeholder:text-[rgba(18,18,18,0.34)] focus:border-[var(--foreground)]"
          {...rest}
        />
      )}
    </label>
  );
}

export function WaveDivider() {
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

function TeachingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M5 8.5 12 5l7 3.5V16l-7 3.5L5 16V8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
