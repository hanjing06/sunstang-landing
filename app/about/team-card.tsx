import Image from "next/image";
import type { TeamMember } from "./team-data";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

export default function TeamCard({
  member,
  priority = false,
}: {
  member: TeamMember;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-surface">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-semibold tracking-[-0.02em]">
          {member.name}
        </h3>
        <p className="mt-1 min-h-10 text-sm leading-relaxed text-brand-dark">
          {member.role}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-3 text-sm">
          <a
            href="mailto:email@example.com"
            aria-label={`Email ${member.name}`}
            className="rounded-sm text-muted transition-colors hover:text-brand"
          >
            email@example.com
          </a>

          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn, opens in a new tab`}
              className="inline-flex items-center gap-1.5 rounded-sm font-medium text-brand-dark transition-colors hover:text-brand"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          ) : (
            <span className="text-xs text-muted">LinkedIn coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
