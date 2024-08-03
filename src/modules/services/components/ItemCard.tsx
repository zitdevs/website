import { DynamicIcon } from "@/components/icons/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { BounceCard } from "./BounceCard";
import { CardTitle } from "./CardTitle";

export type ItemCardProps = {
  title: string;
  description: string;
  icon: keyof typeof dynamicIconImports;
  variant: "blue" | "dark" | "orange" | "pink";
};

export const ItemCard: React.FC<ItemCardProps> = ({
  description,
  icon,
  title,
  variant,
}) => {
  const transition = useMemo(() => {
    if (variant === "blue") return "from-secondary to-indigo-400";
    if (variant === "dark") return "from-primary to-slate-800";
    if (variant === "orange") return "from-amber-400 to-orange-400";
    if (variant === "pink") return "from-fuchsia-600 to-red-400";
  }, [variant]);

  const cols = useMemo(() => {
    if (variant === "blue") return "col-span-12 md:col-span-6 lg:col-span-7";
    if (variant === "dark") return "col-span-12 md:col-span-6 lg:col-span-5";
    if (variant === "orange") return "col-span-12 md:col-span-6 lg:col-span-5";
    if (variant === "pink") return "col-span-12 md:col-span-6 lg:col-span-7";
  }, [variant]);

  return (
    <BounceCard className={cols}>
      <CardTitle>
        <span className="flex items-center gap-2 justify-center">
          {title} <DynamicIcon name={icon} aria-hidden />
        </span>
      </CardTitle>
      <div
        className={cn(
          "absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]",
          transition
        )}
      >
        <span className="block text-center font-semibold text-indigo-50 text-sm">
          {description}
        </span>
      </div>
    </BounceCard>
  );
};
