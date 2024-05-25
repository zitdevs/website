import Hero from "@/components/hero/Hero";
import { BgLogo } from "@/components/icons/bg-logo";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  const tHome = dictionary.home;

  return (
    <>
      <div className="container relative z-10">
        <h1 className="sr-only">{tHome.sr_only}</h1>
        <Hero tHero={tHome.hero} />
      </div>
      <div className="absolute inset-0 overflow-hidden w-full h-[100vh]">
        <div className="h-[600px] mt-20 blur-lg -rotate-12 overflow-hidden">
          <BgLogo className="blur-md" />
        </div>
      </div>
    </>
  );
}
