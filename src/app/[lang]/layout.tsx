import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Header from "@/components/header/Header";
import SetAppStore from "@/components/utils/SetAppStore";
import { Toaster } from "@/components/toaster/Toaster";

const raleway = Raleway({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const metadata = dictionary.default.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    robots: "index, follow",
    authors: [
      {
        name: "ZitDevs",
      },
    ],
    openGraph: {
      type: "website",
      title: metadata.openGraph["og:title"],
      description: metadata.openGraph["og:description"],
      locale: lang,
      siteName: metadata.openGraph["og:site_name"],
      url: metadata.openGraph["og:url"],
      images: [metadata.openGraph["og:image"]],
    },
    twitter: {
      card: "summary_large_image",
      site: metadata.twitterCard["twitter:site"],
      title: metadata.twitterCard["twitter:title"],
      description: metadata.twitterCard["twitter:description"],
      images: [metadata.twitterCard["twitter:image"]],
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={raleway.className + " bg-[#F5F8FF]"}>
        <Header tHeader={dictionary.default.header} />
        <main className="">{children}</main>
        <SetAppStore locale={lang} countries={dictionary.default.countries} />
        <Toaster />
      </body>
    </html>
  );
}
