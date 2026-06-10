import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[calc(100vh-73px)] items-center bg-canvas px-4 py-16 text-ink sm:px-6"
    >
      <section className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          404
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          This page is off course.
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          The page may have moved or the address may be incorrect. Return to the
          Sunstang homepage to continue.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
