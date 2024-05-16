const Nav = () => {
  return (
    <nav className="flex gap-10 list-none px-14 py-5 rounded-2xl border border-white bg-white/60">
      <li>
        <a href="#" className="font-semibold">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="font-semibold">
          About
        </a>
      </li>
      <li>
        <a href="#" className="font-semibold">
          How it works
        </a>
      </li>
      <li>
        <a href="#" className="font-semibold">
          Services
        </a>
      </li>
    </nav>
  );
};

export default Nav;
