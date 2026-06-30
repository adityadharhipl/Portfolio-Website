import Image from "next/image";
import { portfolioProjects } from "./shared";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card overflow-hidden rounded-[2rem] bg-[var(--surface)]">
          <div className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(180deg,#15202B_0%,#11141b_100%)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.58))]" />
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
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolioProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group lift-card flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#15202B] shadow-2xl ${
                    index % 2 === 1 ? "md:translate-y-4 xl:translate-y-0" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center p-4">
                     {/* Dynamic Gradient Backgrounds for Cards based on index */}
                    <div 
                      className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition duration-500`} 
                      style={{
                        background: index === 0 ? "linear-gradient(180deg, #1d4ed8 0%, transparent 100%)" :
                                    index === 1 ? "linear-gradient(180deg, #7e22ce 0%, transparent 100%)" :
                                    index === 2 ? "linear-gradient(180deg, #047857 0%, transparent 100%)" :
                                    index === 3 ? "linear-gradient(180deg, #ea580c 0%, transparent 100%)" :
                                    index === 4 ? "linear-gradient(180deg, #be123c 0%, transparent 100%)" :
                                    "linear-gradient(180deg, #0f766e 0%, transparent 100%)"
                      }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#15202B_100%)]" />
                    
                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {project.category}
                    </div>
                    <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {project.sub}
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow px-6 py-5 z-10 relative">
                    <div className="flex justify-between items-center mb-3">
                       <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/50">
                        Project 0{index + 1}
                       </p>
                       <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/50">
                        Live Site
                       </p>
                    </div>
                    
                    <h3 className="text-2xl font-black tracking-[-0.04em] text-white mb-3">{project.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">{project.desc}</p>
                    
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-black tracking-[0.3em] text-white hover:text-blue-400 transition uppercase">
                      Visit
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-14 text-center text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/40">
              And more work across LMS, Healthcare, Insurance, and Real-Time Systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
