export type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string | null;
};

export type TeamGroup = {
  name: string;
  description: string;
  members: TeamMember[];
};

export const teamGroups: TeamGroup[] = [
  {
    name: "Executive Leadership",
    description:
      "Team-wide direction, operations, and technical coordination across the project.",
    members: [
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
    ],
  },
  {
    name: "Operations",
    description:
      "Fundraising, communications, internal affairs, and the work that keeps the team moving.",
    members: [
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
    ],
  },
  {
    name: "Electrical",
    description:
      "Power generation, energy storage, driver systems, and propulsion.",
    members: [
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
    ],
  },
  {
    name: "Mechanical",
    description:
      "The structures, dynamics, controls, and aerodynamics that shape the car.",
    members: [
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
        linkedin:
          "https://www.linkedin.com/in/maya-faris-watban-1a716a397/",
      },
    ],
  },
];
