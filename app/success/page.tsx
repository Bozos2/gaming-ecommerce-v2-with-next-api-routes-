"use client";

import { motion } from "framer-motion";

const Success = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
      className="flex flex-col my-44 mx-2 sm:my-96 items-center font-nunito"
    >
      <h1 className="font-black text-2xl sm:text-6xl text-center tracking-wider">
        Your Payment is Accepted!
      </h1>
      <h4 className="font-semibold text-lg sm:text-2xl mt-4">
        Thank you for your loyalty!
      </h4>
    </motion.div>
  );
};

export default Success;
