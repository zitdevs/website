import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/Card";
import { DynamicIconProps, DynamicIcon } from "@/components/icons/dynamic";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export type ItemCardProps = {
  title: string;
  description: string;
  icon: DynamicIconProps;
  image?: {
    src: string | StaticImport;
    alt: string;
  };
};

const ItemCard: React.FC<ItemCardProps> = ({
  description,
  title,
  icon,
  image,
}) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="bg-[#F5F8FF] p-3 rounded-md max-w-fit mb-5">
          <DynamicIcon {...icon} className="size-5" />
        </div>
        <CardTitle className="font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#5a5967] text-sm">{description}</p>

        {!!image && (
          <Image
            width={300}
            height={200}
            src={image.src}
            alt={image.alt}
            className="mt-10 rounded-md shadow-sm m-auto sm:mx-0"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
