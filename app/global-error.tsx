"use client";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-canvas px-4 text-ink">
        <main className="max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Unexpected error
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Something went wrong.
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            The page could not be displayed. Try loading it again.
          </p>
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="mt-8 rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
