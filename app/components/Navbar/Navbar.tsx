import React from "react";

import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarAuth from "./NavbarAuth";
import CartButton from "../Buttons/CartButton";

const Navbar = () => {
  return (
    <header className="sticky  top-0 w-full  drop-shadow-md font-poppins z-40">
      <nav className="h-20 flex justify-around max-w-full m-auto  bg-neutral-900">
        <div className="flex items-center">
          <NavbarLogo />
        </div>
        <div className="hidden sm:flex">
          <NavbarLinks />
        </div>
        <div className="flex flex-row gap-6">
          <CartButton />
          <NavbarAuth />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
