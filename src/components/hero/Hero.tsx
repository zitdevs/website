import { Dictionary } from "@/get-dictionary";
import { Button } from "../button/Button";
import Link from "next/link";

export type HeroProps = {
  tHero: Dictionary["home"]["hero"];
};

const Hero: React.FC<HeroProps> = ({ tHero }) => {
  return (
    <section className="w-full flex mt-32 flex-col items-center space-y-5 md:space-y-10">
      <h2 className="font-semibold text-4xl min-[350px]:text-3xl sm:text-5xl md:text-6xl w-full md:max-w-[42rem] text-center text-pretty">
        {tHero.title}
      </h2>
      <Button
        className="px-10 py-6 md:px-12 font-bold text-xs sm:text-sm"
        asChild
      >
        <Link href="/#what-we-do">{tHero.cta}</Link>
      </Button>
    </section>
  );
};

export default Hero;
