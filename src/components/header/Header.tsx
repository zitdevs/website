import { LogoIcon } from "../icons/logo";
import Link from "next/link";
import Nav from "./Nav";
import { Dictionary } from "@/get-dictionary";
import { Button } from "../button/Button";
import Menu from "./Menu";

export type HeaderProps = {
  tHeader: Dictionary["default"]["header"];
};

const Header: React.FC<HeaderProps> = ({ tHeader }) => {
  return (
    <header className="container justify-between flex items-center pt-2 relative z-50 min-h-20">
      <Link className="w-32" href="/" title={tHeader.title}>
        <LogoIcon />
      </Link>
      <Nav tNav={tHeader.menu} />
      <div className="flex gap-4 items-center ">
        <Button variant="secondary" className="px-8 hidden min-[390px]:block">
          {tHeader.cta.contact}
        </Button>
        <Menu tNav={tHeader.menu} tCta={tHeader.cta} />
      </div>
    </header>
  );
};

export default Header;
