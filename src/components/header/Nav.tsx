import { Dictionary } from "@/get-dictionary";
import NavLink from "./NavLink";

export type NavProps = {
  tNav: Dictionary["default"]["header"]["menu"];
};

const Nav: React.FC<NavProps> = ({ tNav }) => {
  return (
    <nav className="flex gap-10 list-none px-14 py-4 rounded-2xl border border-white bg-white/70">
      <NavLink href="/" className="font-semibold">
        {tNav.home}
      </NavLink>
      <NavLink href="#" className="font-semibold">
        {tNav.about}
      </NavLink>
      <NavLink href="#" className="font-semibold">
        {tNav.how_it_works}
      </NavLink>
      <NavLink href="#" className="font-semibold">
        {tNav.services}
      </NavLink>
    </nav>
  );
};

export default Nav;
