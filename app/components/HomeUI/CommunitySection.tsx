"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import DiscordIcon from "@/app/assets/CommunityIcons/DiscordIcon";
import FacebookIcon from "@/app/assets/CommunityIcons/FacebookIcon";
import InstagramIcon from "@/app/assets/CommunityIcons/InstagramIcon";
import LinkedinIcon from "@/app/assets/CommunityIcons/LinkedinIcon";
import PinterestIcon from "@/app/assets/CommunityIcons/PinterestIcon";
import TelegramIcon from "@/app/assets/CommunityIcons/TelegramIcon";
import TiktokIcon from "@/app/assets/CommunityIcons/TiktokIcon";
import TwitterIcon from "@/app/assets/CommunityIcons/TwitterIcon";

const CommunitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="h-[800px] xl:h-[500px] flex flex-col xl:flex-row  justify-around items-center">
      <motion.div
        ref={ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: inView ? "0%" : "-100%", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-4"
      >
        <h1 className="text-4xl sm:text-5xl font-roboto">
          Join Our Community!
        </h1>
        <p className="text-lg font-poppins pt-4">
          We invite you to become a part of our passionate community dedicated
          to 3D modeling. Together, we create a space where we can exchange
          ideas, experiences, and inspiration. Our community is open to all who
          share the same passion for modeling and want to connect with
          like-minded individuals. Whether you're an experienced enthusiast or
          just starting out, you are welcome to join and contribute to the
          community. Be a part of our story and find support, friendship, and
          endless inspiration.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: inView ? "0%" : "100%", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-4 gap-2 sm:gap-4"
      >
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="discord">
            <DiscordIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <TwitterIcon className="mt-1" />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <FacebookIcon className="mr-1" />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <InstagramIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <TelegramIcon className="mr-1.5" />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <LinkedinIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <TiktokIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <PinterestIcon />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
