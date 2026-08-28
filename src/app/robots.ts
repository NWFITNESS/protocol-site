import type { MetadataRoute } from "next";

const BASE = "https://www.protocolapp.uk";

/** Allow all crawlers and point them at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
