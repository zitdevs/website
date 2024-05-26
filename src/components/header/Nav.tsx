import { Dictionary } from "@/get-dictionary";
import NavItems from "./NavItems";

export type NavProps = {
  tNav: Dictionary["default"]["header"]["menu"];
};

const Nav: React.FC<NavProps> = ({ tNav }) => {
  return (
    <>
      <nav className="lg:flex gap-10 list-none px-14 py-4 rounded-2xl border border-white bg-white/70 hidden">
        <NavItems tNav={tNav} />
      </nav>
    </>
  );
};

export default Nav;
