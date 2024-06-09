"use client";
import { useHrefI18n } from "@/hooks/useHrefI18n";
import Link, { LinkProps } from "next/link";

export type LinkI18nProps = LinkProps & React.HTMLProps<HTMLAnchorElement>;

const LinkI18n: React.FC<LinkI18nProps> = ({ href: _href, ...props }) => {
  const [href, locale] = useHrefI18n(_href);
  return <Link href={href} hrefLang={locale} {...props} />;
};

export default LinkI18n;
