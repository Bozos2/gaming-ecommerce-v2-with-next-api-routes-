"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useSession } from "next-auth/react";

import HomeIcon from "@/app/assets/NavbarIcons/MobileIcons/HomeIcon";
import ProductsIcon from "@/app/assets/NavbarIcons/MobileIcons/ProductsIcon";
import SpecialIcon from "@/app/assets/NavbarIcons/MobileIcons/SpecialIcon";
import CartMobile from "@/app/assets/NavbarIcons/MobileIcons/CartMobile";
import ProfileIcon from "@/app/assets/NavbarIcons/MobileIcons/ProfileIcon";

const MobileNavbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  let scrollTimeout: NodeJS.Timeout;
  let isBottom: boolean;

  const { data: session } = useSession();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if ((latest > previous || latest < previous) && latest > 150 && !isBottom) {
      setHidden(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setHidden(false), 1000);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { text: "Home", href: "/home", icon: <HomeIcon /> },
    { text: "Products", href: "/products", icon: <ProductsIcon /> },
    { text: "Special", href: "/special", icon: <SpecialIcon /> },
    { text: "Cart", href: "/cart", icon: <CartMobile /> },
    {
      text: "Profile",
      href: session ? "/profile" : "/login",
      icon: <ProfileIcon />,
    },
  ];

  const pathname = usePathname();

  const getNavItemClass = (href: string) => {
    return `min-w-16 w-[126px] px-[9px]  pt-[7px] ${
      pathname === href
        ? "text-[#e11d48] border-t-2 border-[#e11d48] text-[11px]"
        : ""
    }`;
  };

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full h-[45px] bg-neutral-900 sticky bottom-0 sm:hidden"
    >
      <ul className="flex flex-row">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={getNavItemClass(item.href)}
            scroll={false}
          >
            <li className="flex flex-col items-center">
              {item.icon}
              <p className="text-[9px]">{item.text}</p>
            </li>
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
};

export default MobileNavbar;
