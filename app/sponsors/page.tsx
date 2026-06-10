import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | Western Sunstang",
  description: "Sponsorship information for Western Sunstang.",
};

export default function SponsorsPage() {
  return (
    <main
      id="main-content"
      className="flex min-h-[calc(100vh-73px)] items-center bg-canvas px-4 py-16 text-ink sm:px-6"
    >
      <section
        aria-labelledby="sponsors-title"
        className="mx-auto w-full max-w-3xl text-center"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Sponsors
        </p>
        <h1
          id="sponsors-title"
          className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl"
        >
          Our sponsor directory is being prepared.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Sunstang depends on industry partners who support student engineering,
          manufacturing, and competition. Sponsor details will be added here as
          they are confirmed.
        </p>
        <a
          href="mailto:email@example.com"
          className="mt-8 inline-flex rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Ask about sponsorship
        </a>
      </section>
    </main>
  );
}
