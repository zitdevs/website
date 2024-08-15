import { PropsWithChildren } from "react";
import { Check } from "lucide-react";
type Props = PropsWithChildren;

const FeatureItem: React.FC<Props> = ({ children }) => {
  return (
    <li className="py-2 border-b last:border-b-0">
      <Check className="inline size-4 text-secondary mr-1" aria-hidden />{" "}
      <span className="text-sm">{children}</span>
    </li>
  );
};

export default FeatureItem;
