import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/card/Card";
import FeatureItem from "./feature-items";
import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";

type PlanData = {
  name: string;
  price: number;
  monthlyPrice: number;
  description: string;
  features: string[];
};

export type PlanCardProps = {
  plan: PlanData;
  mostPopular?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({ plan, mostPopular }) => {
  return (
    <Card
      className={cn("border-white bg-white/80", {
        "border-secondary": mostPopular,
        "scale-105": mostPopular,
        "-translate-y-3": mostPopular,
      })}
    >
      <CardHeader className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{plan.name}</h2>
          <p className="text-gray-500 text-sm mb-">{plan.description}</p>
        </div>
        <div className="flex items-center justify-between text-secondary">
          <p className="text-3xl font-bold">${plan.price}</p>
          <p className="text-sm text-gray-500">
            + ${plan.monthlyPrice}/Monthly
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <ul>
          {plan.features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="grid place-items-center gap-2">
        <Button
          className="w-full"
          variant={mostPopular ? "secondary" : "outline"}
        >
          Choose Plan
        </Button>
        <a
          href="#"
          className="text-xs text-center hover:underline text-secondary"
        >
          Learn More
        </a>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
