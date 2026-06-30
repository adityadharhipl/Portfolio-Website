import { SectionHeader, services, WaveDivider } from "./shared";

export function AboutMeSection() {
  return (
    <section id="about" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div
          className="rounded-[2rem] px-6 py-10 sm:px-10 lg:px-14 lg:py-14"
          style={{ background: "#0c1015", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
        >
          <SectionHeader title="ABOUT ME" />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div>
              <h3 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-4xl text-white">
                Frontend-first developer with full-stack expertise.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8" style={{ color: "rgba(255,255,255,0.72)" }}>
                Frontend &amp; MERN Stack Developer with 3+ years of experience building responsive,
                user-friendly, and high-performance web applications using React.js, Next.js,
                JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.
              </p>
            </div>

            <div
              className="relative rounded-[1.75rem] p-6"
              style={{ background: "#11141b", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 55px rgba(0,0,0,0.3)" }}
            >
              <div className="glow-line pb-6">
                <WaveDivider />
              </div>
              <p className="mt-6 text-base leading-8" style={{ color: "rgba(255,255,255,0.7)" }}>
                Skilled in creating modern, pixel-perfect UI/UX, integrating REST APIs, and optimizing
                application performance. Experienced with the MERN Stack and backend development using
                Node.js and Express.js, with knowledge of database design, authentication, cloud
                deployment (AWS &amp; DigitalOcean), and scalable web applications across e-commerce,
                LMS, healthcare, and real-time platforms.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`lift-card rounded-[1.5rem] p-6 ${
                  index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                }`}
                style={{ background: "#15202B", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "#000" }}>
                  <service.icon />
                </div>
                <h4 className="mt-5 text-xl font-black uppercase tracking-[-0.03em] text-white">
                  {service.title}
                </h4>
                <p className="mt-3 text-sm leading-7" style={{ color: "rgba(255,255,255,0.6)" }}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
