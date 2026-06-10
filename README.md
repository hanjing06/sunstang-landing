# Western Sunstang Website

Public website for Western University's Sunstang Solar Car Project. Built with
Next.js, React, TypeScript, Tailwind CSS, and Motion.

## Local Development

Requirements:

- Node.js 20 or newer
- npm

Install and run:

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Set this value in every deployed environment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

It is used for canonical metadata, robots, and the sitemap. Do not launch with
the localhost fallback.

## Verification

Run before every deployment:

```bash
npm run check
npm audit --audit-level=high
```

Manual smoke tests:

1. Start the production build with `npm run start`.
2. Run `npm run smoke`.
3. Load `/`, `/about`, and `/sponsors`.
4. Confirm `/api/health` returns HTTP 200 with `"status":"ok"`.
5. Confirm the navbar and carousel work with keyboard controls.
6. Confirm the mobile menu works at 320px and closes with Escape.
7. Confirm Get Involved and Join Us open the Western Engineering team-fee page.
8. Confirm an unknown URL displays the custom 404 page.

## Deployment Gates

Before production launch:

- Configure `NEXT_PUBLIC_SITE_URL`.
- Connect the production domain and verify DNS and SSL.
- Configure hosting-level logging, error reporting, and Web Vitals monitoring.
- Run Lighthouse or equivalent accessibility and performance audits.
- Verify `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest`.
- Confirm the Western Engineering Store team-fee link is reachable.
- Replace team email placeholders when official addresses are supplied.

## Health Check

Use `GET /api/health` for uptime monitoring.

## Rollback

Rollback triggers include new client errors, failed health checks, broken
navigation/payment links, or a material performance regression.

1. Revert the release commit.
2. Redeploy the previous successful build.
3. Verify `/api/health`, `/`, `/about`, and the team-fee flow.
4. Review deployment and client logs before attempting another release.

There are no database migrations or persistent application data in this
project, so rollback is code-only.
