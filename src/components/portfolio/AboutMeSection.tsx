import { SectionHeader, services, WaveDivider } from "./shared";

export function AboutMeSection() {
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

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
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
