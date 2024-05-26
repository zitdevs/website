import { PropsWithChildren } from "react";

export const CardTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
