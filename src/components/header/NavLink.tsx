"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LinkI18nProps } from "../i18nLink";
import Link from "next/link";
import { useHrefI18n } from "@/hooks/useHrefI18n";

export type NavLinkProps = LinkI18nProps;

const NavLink: React.FC<NavLinkProps> = ({ href: _href, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [href] = useHrefI18n(_href);

  useEffect(() => {
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
