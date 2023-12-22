"use client";

import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";
import { motion } from "framer-motion";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Warranty", link: "/warranty" },
];

const Warranty = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl py-8 sm:pt-20 font-poppins mx-4"
    >
      <div className="pb-10">
        <BreadcrumbsDetail items={breadcrumbItems} />
      </div>
      <h1 className="text-4xl font-semibold">Guarantee and Return Policy</h1>
      <p className="pt-4 text-xl">
        Welcome to our page dedicated to product guarantees and the return
        policy. We want to ensure that you are completely satisfied with your
        purchase. Here is information about our guarantee and return process:
      </p>

      <h2 className="pt-8 font-semibold text-xl text-primary">
        Product Guarantee
      </h2>
      <p className="pt-2 text-gray-400">
        All our products come with a quality guarantee. If you notice any
        defects or issues with the product during the warranty period, feel free
        to inform us. We offer solutions such as repair, replacement, or a
        refund, depending on the type of issue.
      </p>

      <h2 className="pt-4 text-primary font-semibold text-xl">Return Policy</h2>
      <p className="pt-2 text-gray-400">
        If you are not completely satisfied with your purchase, you have the
        right to return the product within 7 days of receipt. Products must be
        undamaged and in the original packaging. Contact our support team to
        initiate the return process and learn more about the conditions.
      </p>

      <h2 className="pt-4 text-primary font-semibold text-xl">Contact Us</h2>
      <p className="pt-2 text-gray-400">
        If you have any questions or need assistance regarding the product
        guarantee or return, feel free to contact us. Our support team is
        dedicated to providing top-notch service and resolving your concerns.
      </p>

      <p className="pt-8 text-lg">
        Thank you for your trust. We are confident that our guarantee and return
        policy will ensure your complete satisfaction with your purchase.
      </p>
    </motion.div>
  );
};

export default Warranty;
