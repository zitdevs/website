import { Dictionary } from "@/get-dictionary";
import { Button } from "../button/Button";

export type HeroProps = {
  tHero: Dictionary["home"]["hero"];
};

const Hero: React.FC<HeroProps> = ({ tHero }) => {
  return (
    <section className="w-full flex mt-32 flex-col items-center space-y-10">
      <h2 className="font-semibold text-6xl max-w-2xl text-center">
        {tHero.title}
      </h2>
      <Button className="px-12 py-6 font-bold">{tHero.cta}</Button>
    </section>
  );
};

export default Hero;
