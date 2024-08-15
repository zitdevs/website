import Script from "next/script";
import "./globals.css";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-V28YYZTMPB"
      />

      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V28YYZTMPB');
        `}
      </Script>

      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="418e3622-e287-4d76-80f9-e43f27e0329f"
        data-blockingmode="auto"
        type="text/javascript"
        async
      />

      <body>{children}</body>
    </html>
  );
}
