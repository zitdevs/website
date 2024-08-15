import type { MetadataRoute } from "next";

const url = "https://zitdevs.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/en", "/es"],
        disallow: ["/legal/privacy-policy"],
      },
    ],
    sitemap: `${url}/sitemap.xml`,
  };
}
