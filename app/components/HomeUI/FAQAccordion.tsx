"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="h-[1000px] sm:h-[850px] xl:h-[550px] flex  xl:flex-row flex-col-reverse  justify-center gap-12 sm:gap-24 xl:justify-around xl:gap-0 items-center">
      <motion.div
        ref={ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: inView ? "0%" : "-100%", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="w-[320px] sm:w-[500px]"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              How can I order my 3D gaming figurine?
            </AccordionTrigger>
            <AccordionContent>
              To order your favorite gaming figurine, simply select the product,
              add it to the cart, and follow the instructions to complete the
              order.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              What is the average delivery time for gaming figurines?
            </AccordionTrigger>
            <AccordionContent>
              The average delivery time for our gaming figurines is within 3-5
              business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              Do you have the option to customize gaming figurines?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer customization! There is a special section on our
              website for customizing your own figurine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              How is the payment for the order processed?
            </AccordionTrigger>
            <AccordionContent>
              We accept various payment methods, including credit cards and
              PayPal. Choose the option that suits you best during the checkout
              process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              What if I am not satisfied with my order?
            </AccordionTrigger>
            <AccordionContent>
              Your satisfaction is our priority. If you are not completely
              satisfied with your order, feel free to contact us. We will
              provide support regarding returns or replacements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: inView ? "0%" : "100%", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-4"
      >
        <h1 className="text-4xl sm:text-5xl font-roboto">
          Frequently Asked Questions
        </h1>
        <p className="text-lg font-poppins pt-4">
          Our selection of frequently asked questions and answers is designed to
          provide you with the necessary information quickly and easily. All
          questions are carefully selected to cover various aspects of our
          services. The answers to these questions provide clear and detailed
          information to help you better understand our offerings. If you have
          any additional questions, feel free to contact us. Your satisfaction
          is our priority.
        </p>
      </motion.div>
    </section>
  );
};

export default Faq;
