import { MetadataRoute } from "next";

const url = "https://zitdevs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url,
      lastModified: "2024-06-09T15:50:46.143Z",
      changeFrequency: "monthly",
      alternates: {
        languages: {
          es: `${url}/es`,
          en: `${url}/en`,
        },
      },
      priority: 1,
    },
  ];
}
