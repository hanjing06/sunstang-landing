import type { Metadata } from "next";
import TeamCard from "./team-card";
import { teamGroups } from "./team-data";

export const metadata: Metadata = {
  title: "Meet the Team | Western Sunstang",
  description: "Meet the student leaders behind Western Sunstang.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-canvas text-ink">
      <section className="border-b border-border px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Meet the Team
          </p>
          <div className="grid items-end gap-8 md:grid-cols-[1.5fr_0.8fr]">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-7xl">
              The people powering Sunstang.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Our student leaders bring together engineering, operations, and
              creative expertise to design, build, and race a solar electric
              vehicle.
            </p>
          </div>
        </div>
      </section>

      {teamGroups.map((group, groupIndex) => (
        <section
          key={group.name}
          aria-labelledby={`team-group-${groupIndex}`}
          className="border-b border-border px-4 py-16 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-4 md:grid-cols-[1fr_1.5fr] md:items-end">
              <h2
                id={`team-group-${groupIndex}`}
                className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              >
                {group.name}
              </h2>
              <p className="max-w-2xl leading-relaxed text-muted">
                {group.description}
              </p>
            </div>

            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {group.members.map((member, memberIndex) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  priority={groupIndex === 0 && memberIndex < 4}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
