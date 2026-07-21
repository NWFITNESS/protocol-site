import type { MetadataRoute } from "next";
import { FEATURE_PAGES, NICHES } from "@/lib/site";

const BASE = "https://protocolapp.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/features", "/why-protocol", "/pricing", "/privacy", "/terms"];
  const featureRoutes = FEATURE_PAGES.map((f) => `/features/${f.slug}`);
  const nicheRoutes = NICHES.map((n) => `/for/${n.slug}`);

  return [...staticRoutes, ...featureRoutes, ...nicheRoutes].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
