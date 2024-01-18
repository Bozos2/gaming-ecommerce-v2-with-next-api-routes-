"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EnterIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const text = `Welcome to our 3D gaming figurine store website. Here, you can find figurines for yourself and your loved ones with an easy shopping process. One click away from our product list.`;

const textArray = text.split(" ");

const HomeText = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {textArray.map((word, index) => {
          return (
            <motion.span
              className="text-white opacity-0 font-poppins"
              key={index}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="mt-12 mb-16 sm:my-12 lg:my-4 py-4 px-4 sm:px-12 sm:min-h-screen overflow-y-auto w-full  max-w-4xl 2xl:mx-4">
      <div className="mt-6 sm:mt-4">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 w-full sm:tracking-wider text-left"
        >
          <h1 className="text-foreground text-5xl sm:text-7xl  xl:text-8xl font-bold font-blackops sm:mr-2">
            Design Your <span className="text-primary">Figure</span> to Your
            Desires
          </h1>
        </motion.div>
        <div className="text-foreground text-lg sm:text-3xl leading-snug tracking-widest  text-left mt-12 sm:mt-0">
          {renderWords()}
        </div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row  gap-6 pt-16  font-poppins"
        >
          <Button
            asChild
            variant="default"
            className="py-7 sm:px-16 hover:bg-foreground hover:text-primary font-bold shadow-lg shadow-red-700/30"
          >
            <Link href="/home">Buy Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="py-7 px-6 border border-foreground font-medium"
          >
            <Link href="/special">
              <EnterIcon className="mr-2 h-6 w-6" />
              How to Design?
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeText;
