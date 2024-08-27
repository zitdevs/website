import { defineMiddleware } from "astro:middleware";
import { notFound } from "astro:i18n";
import { requestHasLocale } from "astro:i18n";

export const onRequest = defineMiddleware((context, next) => {
  const pathNotFound = notFound(context);

  if (context.url.pathname === "/") return next();

  if (context.url.pathname.match(`/((api|_astro/static|_astro/image|favicon.ico|assets|robots.txt|images|legal).*)`)) {
    console.log('found');
    return next();
  }

  if (context.url.pathname.startsWith('/sitemap')) return next();
  if (requestHasLocale(context)) return next();

  if (pathNotFound) {
    const isProduction = process.env.NODE_ENV === "production";

    const headerLang = context.request.headers.get("accept-language");
    const host = context.request.headers.get("host");
    const protocol = context.request.headers.get("x-forwarded-proto") || isProduction ? "https" : "http";

    const lang = headerLang?.split(",")[0].split("-")[0] || "en";
    const redirect = `/${lang}${context.url.pathname}`

    return new Response(null, {
      status: 301,
      headers: {
        Location: `${protocol}://${host}${redirect}`,
      },
    });
  }


  return new Response("Not found", { status: 404 });
});
