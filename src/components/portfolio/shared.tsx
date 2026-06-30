import type { ComponentType } from "react";

export const site = {
  name: "Aditya Dhar Dwivedi",
  title: "MERN Stack Developer / Express.js Developer",
  intro:
    "Building Scalable, Modern, Efficient Web Applications. Turning Ideas into Robust Web Solutions.",
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
  { label: "Email", href: "mailto:hello@adityadhar.dev", icon: EmailIcon },
  { label: "GitHub", href: "https://github.com/adityadharhipl", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-dhar-dwivedi-2933781b0",
    icon: LinkedInIcon,
  },
];

export const services: ServiceCard[] = [
  {
    title: "DESIGN",
    description: "Visual systems, layout decisions, and interface polish.",
    icon: DesignIcon,
  },
  {
    title: "DEVELOPMENT",
    description: "Semantic, responsive front-end builds with thoughtful structure.",
    icon: DevelopmentIcon,
  },
  {
    title: "MAINTENANCE",
    description: "Careful updates, refinements, and performance adjustments.",
    icon: MaintenanceIcon,
  },
  {
    title: "TEACHING",
    description: "Mentoring junior developers and sharing workflows.",
    icon: TeachingIcon,
  },
];

export const skillGroups: Array<{ title: string; items: SkillItem[] }> = [
  {
    title: "Databases",
    items: [
      { label: "MySQL", kind: "glyph", glyph: "SQL", bg: "#15202B", fg: "#3b82f6" },
      { label: "PostgreSQL", kind: "glyph", glyph: "PG", bg: "#15202B", fg: "#3b82f6" },
      { label: "MongoDB", kind: "glyph", glyph: "MG", bg: "#15202B", fg: "#10b981" },
      { label: "AWS RDS", kind: "glyph", glyph: "RDS", bg: "#15202B", fg: "#f59e0b" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", kind: "glyph", glyph: "ND", bg: "#15202B", fg: "#10b981" },
      { label: "Express.js", kind: "glyph", glyph: "EX", bg: "#15202B", fg: "#e5e7eb" },
      { label: "NestJS", kind: "glyph", glyph: "NS", bg: "#15202B", fg: "#ef4444" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", kind: "glyph", glyph: "RE", bg: "#15202B", fg: "#38bdf8" },
      { label: "Next.js", kind: "glyph", glyph: "NX", bg: "#15202B", fg: "#e5e7eb" },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { label: "AWS", kind: "glyph", glyph: "AW", bg: "#15202B", fg: "#f59e0b" },
      { label: "DigitalOcean", kind: "glyph", glyph: "DO", bg: "#15202B", fg: "#3b82f6" },
      { label: "Docker", kind: "glyph", glyph: "DK", bg: "#15202B", fg: "#0ea5e9" },
      { label: "VPS", kind: "glyph", glyph: "VP", bg: "#15202B", fg: "#9ca3af" },
      { label: "GitHub", kind: "glyph", glyph: "GH", bg: "#15202B", fg: "#f3f4f6" },
      { label: "CI/CD", kind: "glyph", glyph: "CI", bg: "#15202B", fg: "#10b981" },
      { label: "Cloudflare", kind: "glyph", glyph: "CF", bg: "#15202B", fg: "#f97316" },
      { label: "Redis", kind: "glyph", glyph: "RD", bg: "#15202B", fg: "#ef4444" },
      { label: "RabbitMQ", kind: "glyph", glyph: "RM", bg: "#15202B", fg: "#f97316" },
      { label: "Kafka", kind: "glyph", glyph: "KF", bg: "#15202B", fg: "#e5e7eb" },
      { label: "Sentry", kind: "glyph", glyph: "SE", bg: "#15202B", fg: "#8b5cf6" },
      { label: "SonarQube", kind: "glyph", glyph: "SQ", bg: "#15202B", fg: "#3b82f6" },
    ],
  },
];

export const portfolioProjects = [
  { title: "Crew Radar", category: "NODE.JS", sub: "REAL-TIME", image: "/assets/portfolio_1.svg", link: "https://www.crewradar.co.uk/", desc: "Real-time flight tracking platform using Node.js and WebSockets. Redis caching for load reduction; RabbitMQ for async event-based processing." },
  { title: "MTGA Codes", category: "LARAVEL", sub: "E-COMMERCE", image: "/assets/portfolio_2.svg", link: "#", desc: "Digital goods store with Stripe, PayPal, and Coinbase payment integrations. Deployed on VPS with Laravel Telescope and query optimization." },
  { title: "Pioneers Learning Hub", category: "NODE.JS", sub: "LMS", image: "/assets/portfolio_3.svg", link: "#", desc: "Role-based LMS with RBAC, e-library, assessment system, invoicing, admin dashboards, and calendar-based session scheduling." },
  { title: "Festival City", category: "LARAVEL", sub: "DIRECTORY", image: "/assets/portfolio_4.svg", link: "#", desc: "Bilingual Arabic and English business directory backend using Laravel, Next.js, and MySQL. Vendor onboarding and role-based admin workflows." },
  { title: "Solfana", category: "NODE.JS", sub: "MEDIA", image: "/assets/portfolio_5.svg", link: "#", desc: "Podcast and audiobook platform backend with Node.js and PostgreSQL. TUS protocol for uploads, HLS streaming via Bunny CDN, BullMQ workers." },
  { title: "Navo Ergonomics", category: "NEXT.JS", sub: "E-COMMERCE", image: "/assets/portfolio_6.svg", link: "#", desc: "E-commerce platform for ergonomic furniture and accessories built with Next.js, Node.js, headless WordPress, REST APIs, and ngenius payments." },
];

export const footerLinks: SocialLink[] = [
  { label: "Email", href: "mailto:hello@adityadhar.dev", icon: EmailIcon },
  { label: "GitHub", href: "https://github.com/adityadharhipl", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-dhar-dwivedi-2933781b0",
    icon: LinkedInIcon,
  },
];

export function SectionHeader({ title }: { title: string }) {
  return <div className="section-box text-white bg-transparent border-white/20">{title}</div>;
}

export function SocialLinkButton({ label, href, icon: Icon }: SocialLink) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#15202B] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
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
      className="inline-flex h-11 items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 text-sm font-semibold text-white/84 transition hover:bg-white hover:text-black"
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
        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#15202B] px-4 py-2.5 text-sm font-semibold text-white shadow-xl"
      >
        <SkillGlyph glyph={item.glyph} background={item.bg} foreground={item.fg} />
        {item.label}
      </div>
    );
  }

  return null;
}

export function UnderlineField({
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
      <span className="text-xs font-black uppercase tracking-[0.36em] text-white/50">
        {label}
      </span>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          className="border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition focus:border-white"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition focus:border-white"
        />
      )}
    </label>
  );
}

export function WaveDivider() {
  return (
    <svg viewBox="0 0 240 26" className="h-6 w-full text-white/20" fill="none" aria-hidden="true">
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
