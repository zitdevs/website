import { Dictionary } from "@/get-dictionary";

export type NavProps = {
  tNav: Dictionary["default"]["header"]["menu"];
};

const Nav: React.FC<NavProps> = ({ tNav }) => {
  return (
    <nav className="flex gap-10 list-none px-14 py-5 rounded-2xl border border-white bg-white/60">
      <li>
        <a href="#" className="font-semibold">
          {tNav.home}
        </a>
      </li>
      <li>
        <a href="#" className="font-semibold">
          {tNav.about}
        </a>
      </li>
      <li>
        <a href="#" className="font-semibold">
          {tNav.how_it_works}
        </a>
      </li>
      <li>
        <a href="#" className="font-semibold">
          {tNav.services}
        </a>
      </li>
    </nav>
  );
};

export default Nav;
