import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

User-agent: *
Allow: /es

User-agent: *
Allow: /es/services

User-agent: *
Allow: /es/services/software-development

User-agent: *
Allow: /es/services/web-development

User-agent: *
Allow: /es/services/mobile-app-development

User-agent: *
Allow: /es/services/consulting-strategy

User-agent: *
Allow: /en

User-agent: *
Allow: /en/services

User-agent: *
Allow: /en/services/software-development

User-agent: *
Allow: /en/services/web-development

User-agent: *
Allow: /en/services/mobile-app-development

User-agent: *
Allow: /en/services/consulting-strategy

User-agent: *
Disallow: /legal/private-policy

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
