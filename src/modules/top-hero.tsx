import Hero from "@/components/hero/Hero";
import { BgLogo } from "@/components/icons/bg-logo";
import { Dictionary } from "@/get-dictionary";

export type TopHeroProps = {
  tHome: Dictionary["home"];
};

const TopHero: React.FC<TopHeroProps> = ({ tHome }) => {
  return (
    <section id="hero" className="min-h-[70dvh]">
      <div className="container relative z-10">
        <h1 className="sr-only">{tHome.sr_only}</h1>
        <Hero tHero={tHome.hero} />
      </div>
      <div className="absolute inset-0 overflow-hidden w-full h-[100vh]">
        <div className="h-[600px] mt-20 blur-lg -rotate-12 overflow-hidden">
          <BgLogo className="blur-md" />
        </div>
      </div>
    </section>
  );
};

export default TopHero;
