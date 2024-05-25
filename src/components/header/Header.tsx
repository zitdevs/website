import { LogoIcon } from "../icons/logo";
import Link from "next/link";
import Nav from "./Nav";
import { Dictionary } from "@/get-dictionary";
import { Button } from "../button/Button";

export type HeaderProps = {
  tHeader: Dictionary["default"]["header"];
};

const Header: React.FC<HeaderProps> = ({ tHeader }) => {
  return (
    <header className="container justify-between flex items-center pt-2 relative z-50">
      <Link className="w-32" href="/" title={tHeader.title}>
        <LogoIcon />
      </Link>
      <Nav tNav={tHeader.menu} />
      <div>
        <Button variant="secondary" className="px-8">
          {tHeader.cta.contact}
        </Button>
      </div>
    </header>
  );
};

export default Header;
