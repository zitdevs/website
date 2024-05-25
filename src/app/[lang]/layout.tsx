import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Header from "@/components/header/Header";
import SetAppStore from "@/components/utils/SetAppStore";

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
        <SetAppStore locale={lang} />
      </body>
    </html>
  );
}
