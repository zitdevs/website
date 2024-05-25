"use client";

import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app.store";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export type NavLinkProps = LinkProps & React.HTMLProps<HTMLAnchorElement>;

const NavLink: React.FC<NavLinkProps> = ({ href: _href, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const locale = useAppStore((state) => state.locale);
  const pathname = usePathname();
  const href = useMemo(
    () => (_href === "/" ? `/${locale}` : `/${locale}${_href}`),
    [_href, locale]
  );

  useEffect(() => {
    console.log(pathname, href);
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <li>
      <Link
        href={href}
        {...props}
        className={cn({
          "font-bold": isActive,
        })}
      />
    </li>
  );
};

export default NavLink;
