"use client";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import NavItems from "./NavItems";
import { Dictionary } from "@/get-dictionary";
import { Button } from "../button/Button";

type MenuProps = {
  tNav: Dictionary["default"]["header"]["menu"];
  tCta: Dictionary["default"]["header"]["cta"];
};

const Menu: React.FC<MenuProps> = ({ tNav, tCta }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden grid place-content-center">
      <button aria-label="Menu" title="Menu" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="size-9 text-secondary" />
      </button>

      {isOpen && (
        <nav className="lg:hidden gap-10 list-none px-8 py-8 pb-14 rounded-2xl border border-white bg-white/70 backdrop-blur-lg absolute top-20 right-8 w-full max-w-[220px] animate-fade-in">
          <ul className="space-y-4 w-full">
            <NavItems tNav={tNav} />
            <li>
              <Button
                variant="secondary"
                className="px-8 min-[390px]:hidden w-full"
                href="#contact"
              >
                {tCta.contact}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
