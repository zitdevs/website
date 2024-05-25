import Hero from "@/components/hero/Hero";
import { BgLogo } from "@/components/icons/bg-logo";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import TopHero from "@/modules/top-hero";
import WhatWeDo from "@/modules/what-we-do";
type Props = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  const tHome = dictionary.home;

  return (
    <>
      <TopHero tHome={tHome} />
      <WhatWeDo tWhatWeDo={tHome.what_we_do} />
    </>
  );
}
