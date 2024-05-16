import { LogoIcon } from "../icons/logo";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container justify-between flex items-center pt-2">
      <Link className="w-32" href="/" title="ZitDevs">
        <LogoIcon />
      </Link>
      <Nav />
      <div>
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
