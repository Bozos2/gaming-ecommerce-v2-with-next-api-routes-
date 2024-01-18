"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutText = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: inView ? "0%" : "100%", opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <div className="max-w-2xl px-4 lg:mr-48">
        <h1 className="text-primary font-bold text-4xl font-roboto">
          What is the GameLoot store?
        </h1>
        <p className="pt-4 text-lg font-poppins">
          The GameLoot store is a new online shop established on August 6, 2022,
          with the purpose of selling gaming figurines. We create our figurines
          using a 3D printer. We are located in Belgrade and currently do not
          have a physical store, so the only way to place an order is through
          the website.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutText;
