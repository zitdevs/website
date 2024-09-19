export type PlanData = {
  name: string;
  price: number;
  priceFrequency?: string;
  monthlyPrice?: number;
  description: string;
  features?: string[];
  startingAt?: boolean;
  cta?: {
    text: string;
    href: string;
  };
};

export type Column =
  | {
      type: "text";
      title: string;
    }
  | {
      type: "icon";
      included: boolean;
      note?: string;
    };

export interface Feature {
  title: string;
  columns: Column[];
}

export interface DetailProps {
  isOpen?: boolean;
  category: string;
  features: Feature[];
  popularColumn?: number;
}
