export function ItBerriesBanner() {
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
