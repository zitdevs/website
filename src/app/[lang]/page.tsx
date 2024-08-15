import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Contact } from "@/modules/contact";
import HowItWorks from "@/modules/how-it-works";
import Plans from "@/modules/plans";
import { Services } from "@/modules/services";
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
      <HowItWorks tHowItWorks={tHome.how_it_works} />
      <Services tServices={tHome.services} />
      <Plans />
      <Contact tContact={tHome.contact} lang={lang} />
    </>
  );
}
