import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/account"],
    },
    sitemap: "https://brite-live.vercel.app/sitemap.xml",
  };
}
