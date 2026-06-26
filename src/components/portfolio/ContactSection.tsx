import { SectionHeader, UnderlineField } from "./shared";

export function ContactSection() {
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
