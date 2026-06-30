import { SectionHeader, skillGroups, SkillTag } from "./shared";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card rounded-[2rem] bg-[#0c1015] border border-white/10 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <SectionHeader title="SKILLS" />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.5rem] border border-white/10 bg-[#11141b] p-8 shadow-2xl"
              >
                <p className="text-[0.65rem] font-black uppercase tracking-[0.42em] text-white/50">
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
