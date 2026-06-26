import { SectionHeader, skillGroups, SkillTag } from "./shared";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card rounded-[2rem] bg-[rgba(255,255,255,0.5)] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <SectionHeader title="SKILLS" />

          <div className="mt-10 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.5rem] border border-[rgba(18,18,18,0.08)] bg-white/72 p-6 shadow-[0_16px_40px_rgba(16,18,22,0.06)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.42em] text-[rgba(18,18,18,0.52)]">
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
