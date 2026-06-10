import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet the Team | Western Sunstang",
  description: "Meet the student leaders behind Western Sunstang.",
};

const teamMembers = [
  {
    name: "Daniel Romero",
    role: "Project Manager",
    image: "/team/daniel.webp",
    linkedin: "https://www.linkedin.com/in/daniel-romero-4721b9233/",
  },
  {
    name: "Brynn Burley Smith",
    role: "VP Operations",
    image: "/team/brynn.webp",
    linkedin: "https://www.linkedin.com/in/brynnburleysmith/",
  },
  {
    name: "Sasha Hanson",
    role: "VP Electrical",
    image: "/team/sasha.webp",
    linkedin:
      "https://www.linkedin.com/in/sasha-difelice-hanson-292844252/",
  },
  {
    name: "David Huang",
    role: "VP Mechanical",
    image: "/team/david-huang.webp",
    linkedin: "https://www.linkedin.com/in/davidhuang322/",
  },
  {
    name: "Laura Flanagan",
    role: "Mechanical Advisor",
    image: "/team/laura.webp",
    linkedin: "https://www.linkedin.com/in/lauradflanagan/",
  },
  {
    name: "Mia Bulatovic",
    role: "Fundraising Lead",
    image: "/team/mia-bulatovic.webp",
    linkedin: null,
  },
  {
    name: "Liam McFadden",
    role: "Marketing & Media Lead",
    image: "/team/liam.webp",
    linkedin: "https://www.linkedin.com/in/liam-mcfadden-693b9a355/",
  },
  {
    name: "Naomi LaFleur",
    role: "Internal Affairs Lead",
    image: "/team/naomi.webp",
    linkedin: "https://www.linkedin.com/in/naomilafleur/",
  },
  {
    name: "Korbyn Roberts",
    role: "Solar Array Lead",
    image: "/team/korbyn.webp",
    linkedin: "https://www.linkedin.com/in/korbyn-roberts-chaytor/",
  },
  {
    name: "Drew Hillman",
    role: "Battery Pack Lead",
    image: "/team/drew.webp",
    linkedin: "https://www.linkedin.com/in/drew-hillman-forest/",
  },
  {
    name: "Xiuting Shi",
    role: "Driver Controls Lead",
    image: "/team/xiuting.webp",
    linkedin: "https://www.linkedin.com/in/xiuting-s/",
  },
  {
    name: "Usher Qureshi",
    role: "Powertrain Lead",
    image: "/team/usher.webp",
    linkedin: "https://www.linkedin.com/in/usher-qureshi/",
  },
  {
    name: "Liz Wells",
    role: "Chassis & Fabrication Lead, Senior",
    image: "/team/liz.webp",
    linkedin: "https://www.linkedin.com/in/elizabeth-wells-b1aa802b1/",
  },
  {
    name: "Franco Moreno",
    role: "Chassis & Fabrication Lead, Junior",
    image: "/team/franco.webp",
    linkedin: "https://www.linkedin.com/in/franco-moreno-b78087249/",
  },
  {
    name: "Kudzai Machiri",
    role: "Steering & Brakes Lead, Senior",
    image: "/team/kudzai.webp",
    linkedin: "https://www.linkedin.com/in/kudzai-machiri-b84a61297/",
  },
  {
    name: "Kevin Hua",
    role: "Steering & Brakes Lead, Junior",
    image: "/team/kevin.webp",
    linkedin: "https://www.linkedin.com/in/kevin-hua-29040430b/",
  },
  {
    name: "Ling Li",
    role: "Suspension Lead",
    image: "/team/ling.webp",
    linkedin: "https://www.linkedin.com/in/ling06/",
  },
  {
    name: "Ria Kala",
    role: "Aerodynamics Lead",
    image: "/team/ria.webp",
    linkedin: "https://www.linkedin.com/in/riakala/",
  },
  {
    name: "Maya Faris Watban",
    role: "Aerodynamics Lead",
    image: "/team/maya-faris-watban.webp",
    linkedin: "https://www.linkedin.com/in/maya-faris-watban-1a716a397/",
  },
];

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F4F5] text-[#181818]">
      <section className="border-b border-[#181818]/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D28D8]">
            Meet the Team
          </p>
          <div className="grid items-end gap-8 md:grid-cols-[1.5fr_0.8fr]">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
              The people powering Sunstang.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#4F4F4F] md:text-lg">
              Our student leaders bring together engineering, operations, and
              creative expertise to design, build, and race a solar electric
              vehicle.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-[#181818]/10">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>

              <div className="px-1 pt-5">
                <h2 className="text-2xl font-semibold tracking-[-0.025em]">
                  {member.name}
                </h2>
                <p className="mt-1 min-h-10 text-sm leading-relaxed text-[#8D28D8]">
                  {member.role}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#181818]/10 pt-4 text-sm">
                  <a
                    href="mailto:email@example.com"
                    className="text-[#4F4F4F] transition-colors hover:text-[#8D28D8]"
                  >
                    email@example.com
                  </a>

                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center gap-1.5 font-medium text-[#4F278C] transition-colors hover:text-[#8D28D8]"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  ) : (
                    <span className="text-xs text-[#4F4F4F]/60">
                      LinkedIn coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
