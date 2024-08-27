import { defineMiddleware } from "astro:middleware";
import { notFound } from "astro:i18n";
import { requestHasLocale } from "astro:i18n";

export const onRequest = defineMiddleware((context, next) => {
  const pathNotFound = notFound(context);

  if (context.url.pathname.match(`/((?!api|_next/static|_next/image|favicon.ico|assets|images|legal).*)`)) return next();

  if (context.url.pathname === '/') return next();
  if (context.url.pathname === '/robots.txt') return next();
  if (context.url.pathname === '/legal/privacy-policy') return next();

  if (context.url.pathname.startsWith('/sitemap')) {
    if (requestHasLocale(context)) {
      return next();
    }

    return next();
  }

  if (pathNotFound) return pathNotFound;


  if (requestHasLocale(context)) {
    return next();
  }

  return new Response("Not found", { status: 404 });

});
