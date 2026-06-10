import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  const isProductionUrlConfigured = Boolean(
    process.env.NEXT_PUBLIC_SITE_URL,
  );

  return {
    rules: {
      userAgent: "*",
      ...(isProductionUrlConfigured
        ? { allow: "/" }
        : { disallow: "/" }),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
