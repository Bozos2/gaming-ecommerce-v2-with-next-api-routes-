"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UsersText = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
      className="flex justify-around flex-wrap h-[600px] sm:h-[400px] font-blackops"
    >
      <div className="flex flex-col justify-center items-center gap-2 w-60">
        <h1 className="font-bold text-5xl text-foreground">586</h1>
        <h1 className="font-bold text-3xl text-foreground text-center px-2">
          Figures Created
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-60">
        <h1 className="font-bold text-5xl text-foreground">430</h1>
        <h1 className="font-bold text-3xl text-foreground text-center px-2">
          Satisfied Customers
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-60">
        <h1 className="font-bold text-5xl text-foreground">450</h1>
        <h1 className="font-bold text-3xl text-foreground text-center px-2">
          Completed Orders
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-60">
        <h1 className="font-bold text-5xl text-foreground">20+</h1>
        <h1 className="font-bold text-3xl text-foreground text-center px-2">
          Countries Shipped To
        </h1>
      </div>
    </motion.section>
  );
};

export default UsersText;
