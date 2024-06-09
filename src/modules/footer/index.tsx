import NavLink from "@/components/header/NavLink";
import { LogoIcon } from "@/components/icons/logo";
import { Dictionary } from "@/get-dictionary";
import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export type FooterProps = {
  tNav: Dictionary["default"]["header"]["menu"];
  tFooter: Dictionary["default"]["footer"];
};

export const Footer: React.FC<FooterProps> = ({ tNav, tFooter }) => {
  const footerNavs = [
    {
      href: "#what-we-do",
      name: tNav.about,
    },
    {
      href: "#how-it-works",
      name: tNav.how_it_works,
    },
    {
      href: "#services",
      name: tNav.services,
    },
    {
      href: "#contact",
      name: tNav.contact,
    },
  ];

  return (
    <footer className="text-gray-700 bg-[#f5f8ff] px-4 py-5 pt-14">
      <div className="container flex h-full min-h-[30vh] flex-col justify-between">
        <div>
          <div className="max-w-lg sm:mx-auto sm:text-center">
            <div className="w-32 sm:mx-auto">
              <LogoIcon />
            </div>
            <p className="leading-relaxed mt-2 text-[15px]">
              {tFooter.description}
            </p>
          </div>
          <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
            {footerNavs.map((item, idx) => (
              <NavLink key={idx} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            <ul className="items-center justify-center mt-1 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
              <li>
                <Link href={"/privacy-policy"} className="underline">
                  {tFooter.links.privacy}
                </Link>
              </li>
              <li>
                <Link href={"/terms-and-conditions"} className="underline">
                  {tFooter.links.terms}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 sm:mt-0">
            <a href="mailto:contact@zitdevs.com" className="underline">
              contact@zitdevs.com
            </a>
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-secondary hover:text-white">
                <a
                  href="https://www.linkedin.com/company/zitdevs"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-secondary hover:text-white">
                <a
                  href="https://github.com/zitdevs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={20} />
                </a>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-secondary hover:text-white">
                <a
                  href="https://www.instagram.com/zitdevs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
