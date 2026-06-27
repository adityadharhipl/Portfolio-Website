import { FooterLinkButton, footerLinks } from "./shared";

export function Footer() {
  return (
  <>
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

          {/* <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/48">
            © 2026 Aditya Dhar Dwivedi.
          </p> */}
        </div>
      </div>
    </footer>
  </>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="m6.5 10.5 5.5-5.5 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
