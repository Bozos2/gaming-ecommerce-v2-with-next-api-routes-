import Link from "next/link";

import LogoIcon from "@/app/assets/NavbarIcons/LogoIcon";

const NavbarLogo = () => {
  return (
    <section className="lg:flex sm:hidden">
      <Link
        href="/home"
        className="pointer-cursor flex flex-row items-center gap-1 lg:gap-2"
      >
        <LogoIcon />{" "}
        <h1 className="font-bold text-3xl lg:text-4xl lg:font-blackops  lg:tracking-widest">
          GameLoot
        </h1>
      </Link>
    </section>
  );
};

export default NavbarLogo;
