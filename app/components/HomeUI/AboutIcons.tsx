"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import TruckIcon from "@/app/assets/CardIcons/TruckIcon";
import SecurePayment from "@/app/assets/CardIcons/SecurePayment";
import ContactIcon from "@/app/assets/CardIcons/ContactIcon";
import WarrantyIcon from "@/app/assets/CardIcons/WarrantyIcon";

const AboutIcons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
  };

  return (
    <motion.section
      className="flex flex-row flex-wrap justify-center gap-12 font-roboto mb-12"
      ref={ref}
    >
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <TruckIcon className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">
          Fast delivery within 72 hours.
        </h1>
        <p className="pt-6 px-4 text-center font-poppins">
          Our fast delivery within 72 hours makes your online shopping
          experience faster and easier than ever. Whether you're ordering
          products for yourself or as a gift, you can rely on us to have your
          desired items delivered to your door.
        </p>
        <Link href="/shipping" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            View more
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 0.5,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <SecurePayment className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">Secure payment method</h1>
        <p className="pt-6 px-4 text-center font-poppins">
          Your security is our priority. We offer reliable and secure payment
          options so that you can conduct online transactions without worry.
          Whether you choose to pay by credit card, PayPal, or any other option,
          rest assured that your information is safe with us.
        </p>
        <Link href="/online-payments" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            View more
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 0.9,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <ContactIcon className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">Customer support 24/7</h1>
        <p className="pt-6 px-4 text-center font-poppins">
          No need to wait , our expert customer support is available 24 hours a
          day, 7 days a week, to quickly address all your concerns and queries.
          Whenever you reach out to us, our team is ready to assist and provide
          all the answers you need.
        </p>
        <Link href="/contact" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            View more
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 1.3,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <WarrantyIcon className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">7-day money-back guarantee</h1>
        <p className="pt-6 px-4 text-center font-poppins">
          Your satisfaction is our priority, and that's why we offer a 7-day
          money-back guarantee. If you're not completely satisfied with your
          purchase, simply contact us, and we'll refund your money without any
          questions.
        </p>
        <Link href="/warranty" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            View more
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default AboutIcons;
