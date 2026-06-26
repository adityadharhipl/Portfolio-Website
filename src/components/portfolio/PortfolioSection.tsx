import Image from "next/image";
import { portfolioProjects } from "./shared";

export function PortfolioSection() {
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
