import Links from "./Links";
import Newsletter from "./NewsletterBox";
import Payment from "./Payment";
import Link from "next/link";
import MobileLinks from "./MobileLinks";
import LogoIcon from "@/app/assets/NavbarIcons/LogoIcon";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 flex flex-col justify-around px-4 pt-8 pb-4">
      <div className="w-full flex flex-col-reverse xl:flex-row pb-4 justify-around items-around border-b-2 border-neutral-800">
        <div className="flex justify-center">
          <Newsletter />
        </div>
        <Links />
        <MobileLinks />
      </div>
      <div className="w-full flex justify-around flex-col-reverse items-center  lg:flex-row pt-6">
        <div className="flex flex-col mt-6 lg:mt-0">
          <div className="flex flex-row items-center">
            <LogoIcon />
            <h1 className="font-bold text-xl ml-2 font-blackops tracking-widest">
              GameLoot
            </h1>
          </div>
          <div className="max-w-sm pt-1">
            <p className="text-xs">
              Copyright © 2023 Gameloot. All rights reserved. Toys, gaming
              figurines, and all related content for true gaming enthusiasts.
              We've ensured that your gaming experience is unique. Gameloot -
              where every game becomes reality. Programming and design:{" "}
              <Link
                href="https://github.com/Bozos2"
                className="text-rose-600 hover:underline"
              >
                Bozos2
              </Link>
            </p>
          </div>
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
