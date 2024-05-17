import { Dictionary } from "@/get-dictionary";

export type HeroProps = {
  tHero: Dictionary["home"]["hero"];
};

const Hero: React.FC<HeroProps> = ({ tHero }) => {
  return (
    <section className="w-full justify-center flex mt-32">
      <h2 className="font-bold text-5xl max-w-2xl text-center">
        {tHero.title}
      </h2>
    </section>
  );
};

export default Hero;
