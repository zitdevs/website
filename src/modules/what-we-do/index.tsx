import ItemCard from "./components/item-card";
import Empowering from "./assets/empowering.png";
import { Dictionary } from "@/get-dictionary";

export type WhatWeDoProps = {
  tWhatWeDo: Dictionary["home"]["what_we_do"];
};

const WhatWeDo: React.FC<WhatWeDoProps> = ({ tWhatWeDo }) => {
  return (
    <section id="what-we-do" className="container z-10 pt-8">
      <h2 className="text-4xl sm:text-5xl font-bold">{tWhatWeDo.title}</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-9">
        <li>
          <ItemCard
            icon={{ name: "clock" }}
            title={tWhatWeDo.item.flexible.title}
            description={tWhatWeDo.item.flexible.description}
          />
        </li>
        <li>
          <ItemCard
            icon={{ name: "users" }}
            title={tWhatWeDo.item.community.title}
            description={tWhatWeDo.item.community.description}
          />
        </li>
        <li>
          <ItemCard
            icon={{ name: "lightbulb" }}
            title={tWhatWeDo.item.driven_by.title}
            description={tWhatWeDo.item.driven_by.description}
          />
        </li>
        <li className="sm:row-span-2">
          <ItemCard
            icon={{ name: "briefcase" }}
            title={tWhatWeDo.item.empowering.title}
            description={tWhatWeDo.item.empowering.description}
            image={{
              src: Empowering,
              alt: tWhatWeDo.item.empowering.image.alt,
            }}
          />
        </li>
        <li className="md:col-span-2">
          <ItemCard
            icon={{ name: "heart" }}
            title={tWhatWeDo.item.innovation.title}
            description={tWhatWeDo.item.innovation.description}
          />
        </li>
        <li className="sm:col-span-2 xl:col-span-1">
          <ItemCard
            icon={{ name: "shield" }}
            title={tWhatWeDo.item.transparency.title}
            description={tWhatWeDo.item.transparency.description}
          />
        </li>
      </ul>
    </section>
  );
};

export default WhatWeDo;
