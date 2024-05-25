import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import HowItWorks from "@/modules/how-it-works";
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
      <HowItWorks />
    </>
  );
}
