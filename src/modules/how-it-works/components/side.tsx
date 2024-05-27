import { Button } from "@/components/button/Button";
import { DynamicIcon, DynamicIconProps } from "@/components/icons/dynamic";
import { cn } from "@/lib/utils";

export type CTA = {
  text: string;
  onClick?: () => void;
};

export type Item = {
  title: string;
  description: string;
  icon: DynamicIconProps;
};

export type SideProps = {
  id: string;
  title: string;
  cta?: CTA;
  items: Item[];
  variant: "left" | "right";
};

export const Side: React.FC<SideProps> = ({
  id,
  title,
  cta,
  items,
  variant,
}) => {
  const bg = variant === "left" ? "bg-secondary" : "bg-primary";
  const rounded =
    variant === "left"
      ? "rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl"
      : "rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl";
  const textColor = variant === "left" ? "text-primary" : "text-secondary";

  return (
    <section
      id={`how-it-works:${id}`}
      className={`${bg} py-8 ${rounded} text-white`}
    >
      <div className="lg:max-w-[650px] mx-auto px-[2rem]">
        <h3 className="text-2xl font-bold">{title}</h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
          {items.map((item, index) => (
            <li
              key={`${index}-${item.title.toLowerCase().replaceAll(" ", "-")}`}
              className={cn({
                "col-span-1 sm:col-span-2": index === items.length - 1,
              })}
            >
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <span className={`${textColor} font-bold text-xl`}>
                    {index + 1}.
                  </span>
                  <span>{item.title}</span>
                  <DynamicIcon
                    name={item.icon.name}
                    className="size-5 inline"
                    aria-hidden
                  />
                </h4>
                <p
                  className={cn("ml-6 text-sm text-white/80", {
                    "lg:min-h-[120px]": index !== items.length - 1,
                    "lg:min-h-[65px]": index === items.length - 1,
                  })}
                >
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="min-h-[60px] flex justify-center mt-3">
          {!!cta && (
            <Button
              className="mt-4 px-10"
              size="sm"
              variant={variant === "left" ? "default" : "secondary"}
              onClick={cta.onClick}
            >
              {cta.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
