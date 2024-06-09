import "../globals.css";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import Header from "@/components/header/Header";
import { Footer } from "@/modules/footer";

export const metadata: Metadata = {
  title: `ZitDevs | Legal`,
  robots: "noindex, nofollow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = await getDictionary("en");
  const tHeader = dictionary.default.header;
  const tFooter = dictionary.default.footer;

  return (
    <html lang="en">
      <body>
        <Header tHeader={tHeader} />
        {children}
        <Footer tFooter={tFooter} tNav={tHeader.menu} />
      </body>
    </html>
  );
}
