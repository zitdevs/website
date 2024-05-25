import { Dictionary } from "@/get-dictionary";
import NavLink from "./NavLink";

export type NavItemsProps = {
  tNav: Dictionary["default"]["header"]["menu"];
};

const NavItems: React.FC<NavItemsProps> = ({ tNav }) => {
  return (
    <>
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
    </>
  );
};

export default NavItems;
