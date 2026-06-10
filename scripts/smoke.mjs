import assert from "node:assert/strict";

const baseUrl = process.env.SMOKE_BASE_URL ?? "http://localhost:3000";
const teamFeeUrl =
  "https://estore.eng.uwo.ca/products/sunstang-team-fee";

const expectedRoutes = [
  "/",
  "/about",
  "/sponsors",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
];

for (const route of expectedRoutes) {
  const response = await fetch(`${baseUrl}${route}`);
  assert.equal(response.status, 200, `${route} should return 200`);
}

const missingResponse = await fetch(`${baseUrl}/launch-smoke-missing-page`);
assert.equal(missingResponse.status, 404, "Unknown routes should return 404");

const healthResponse = await fetch(`${baseUrl}/api/health`);
assert.equal(healthResponse.status, 200, "Health check should return 200");
assert.equal(
  healthResponse.headers.get("cache-control"),
  "no-store",
  "Health check should not be cached",
);

const health = await healthResponse.json();
assert.equal(health.status, "ok", "Health check should report ok");

const homepageResponse = await fetch(baseUrl);
const homepage = await homepageResponse.text();
assert.equal(
  homepage.split(teamFeeUrl).length - 1 >= 2,
  true,
  "Homepage should include both team-fee calls to action",
);

const csp = homepageResponse.headers.get("content-security-policy");
assert.ok(csp?.includes("frame-ancestors 'none'"), "CSP should prevent framing");
assert.equal(
  homepageResponse.headers.get("x-content-type-options"),
  "nosniff",
  "MIME sniffing protection should be enabled",
);

process.stdout.write(`Smoke tests passed against ${baseUrl}\n`);
