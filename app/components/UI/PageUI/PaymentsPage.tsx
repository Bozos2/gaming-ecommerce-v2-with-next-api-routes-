"use client";

import { motion } from "framer-motion";
import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Online Payment", link: "/online-payment" },
];

const Payments = () => {
  return (
    <div className="max-w-4xl mx-4">
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="pb-10">
          <BreadcrumbsDetail items={breadcrumbItems} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-roboto">
          Welcome to our platform! To ensure you have a fast and secure payment
          experience, we collaborate with a reliable partner - Stripe. Your
          security is our top priority, so we chose Stripe for their excellent
          reputation in securing online transactions.
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl text-primary font-semibold tracking-wide pt-12">
          What does this mean for you?
        </h3>
        <ul className="py-6 sm:list-disc">
          <li className="py-2 text-gray-400">
            <span className="text-white font-semibold">Speed:</span> Payments
            are instant, allowing you to complete your purchase quickly and
            efficiently.
          </li>
          <li className="py-2 text-gray-400">
            <span className="text-white font-semibold">Data Security:</span> All
            your sensitive payment data is encrypted to the highest industry
            standards. Your data remains private and inaccessible to third
            parties.
          </li>
          <li className="py-2 text-gray-400">
            <span className="text-white font-semibold">Fraud Protection:</span>{" "}
            Stripe provides advanced fraud protection systems to ensure that
            your transactions are secure from any unauthorized activities.
          </li>
          <li className="py-2 text-gray-400">
            <span className="text-white font-semibold">Ease of Use:</span>{" "}
            Stripe's intuitive and user-friendly interface makes the payment
            process stress-free and straightforward.
          </li>
        </ul>
        Learn more about the benefits of using Stripe by visiting their website.
        If you have any additional questions or concerns, feel free to contact
        us via email or by calling us. Thank you for choosing our service!
      </motion.div>
    </div>
  );
};

export default Payments;
