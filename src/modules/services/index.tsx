"use client";

import { Button } from "@/components/button/Button";
import { Dictionary } from "@/get-dictionary";
import { ItemCard } from "./components/ItemCard";

export type ServicesProps = {
  tServices: Dictionary["home"]["services"];
};

export const Services: React.FC<ServicesProps> = ({ tServices }) => {
  const learnMore = false;

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-12 text-slate-800"
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          {tServices.title}
          <span className="text-slate-400"> {tServices.subtitle}</span>
        </h2>
        {learnMore && <Button>{tServices.learnMore}</Button>}
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <ItemCard
          title={tServices.cards.softwareDevelopment.title}
          description={tServices.cards.softwareDevelopment.description}
          icon="code"
          variant="blue"
        />
        <ItemCard
          title={tServices.cards.webDevelopment.title}
          description={tServices.cards.webDevelopment.description}
          icon="globe"
          variant="dark"
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <ItemCard
          title={tServices.cards.mobileAppDevelopment.title}
          description={tServices.cards.mobileAppDevelopment.description}
          icon="tablet-smartphone"
          variant="orange"
        />
        <ItemCard
          title={tServices.cards.consultingStrategy.title}
          description={tServices.cards.consultingStrategy.description}
          icon="brain"
          variant="pink"
        />
      </div>
    </section>
  );
};
