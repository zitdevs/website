"use client";

import { PropsWithChildren } from "react";
import { Button } from "../button/Button";

const ClientBTN: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Button
      className="px-10 py-6 md:px-12 font-bold text-xs sm:text-sm"
      onClick={() => {
        document
          .querySelector("#what-we-do")
          ?.scrollIntoView({ behavior: "smooth" });

        window.history.pushState({}, "", "#what-we-do");
      }}
    >
      {children}
    </Button>
  );
};

export default ClientBTN;
