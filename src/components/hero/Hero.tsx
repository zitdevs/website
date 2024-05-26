import { Dictionary } from "@/get-dictionary";
import ClientBTN from "./ClientBTN";

export type HeroProps = {
  tHero: Dictionary["home"]["hero"];
};

const Hero: React.FC<HeroProps> = ({ tHero }) => {
  return (
    <section className="w-full flex mt-32 flex-col items-center space-y-5 md:space-y-10">
      <h2 className="font-semibold text-4xl min-[350px]:text-3xl sm:text-5xl md:text-6xl w-full md:max-w-[42rem] text-center text-pretty">
        {tHero.title}
      </h2>
      <ClientBTN>{tHero.cta}</ClientBTN>
    </section>
  );
};

export default Hero;
