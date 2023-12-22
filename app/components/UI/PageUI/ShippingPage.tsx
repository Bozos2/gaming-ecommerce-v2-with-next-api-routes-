"use client";

import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";
import { motion } from "framer-motion";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Shipping", link: "/shipping" },
];

const ShippingPage = () => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="max-w-3xl py-8 sm:pt-20 font-poppins mx-4"
    >
      <div className="pb-10">
        <BreadcrumbsDetail items={breadcrumbItems} />
      </div>
      <h1 className="text-4xl font-semibold">Fast Delivery</h1>
      <p className="pt-4 text-xl">
        Welcome to our page dedicated to the fast delivery of your orders. We
        offer an efficient delivery system to ensure you enjoy your products as
        soon as possible. Here are some key details about our fast delivery:
      </p>

      <h2 className="pt-8 font-semibold text-xl text-primary">
        How does it work?
      </h2>
      <p className="pt-2 text-gray-400">
        Our team is dedicated to processing your orders as quickly as possible.
        Once the order is confirmed, we prepare it for shipment. In
        collaboration with reliable delivery partners, we ensure that your
        products reach you within 72 hours from the moment of shipment.
      </p>

      <h2 className="pt-4 text-primary font-semibold text-xl">
        Order Tracking
      </h2>
      <p className="pt-2 text-gray-400">
        To track the status of your order and learn about the expected delivery
        time, you can use our tracking system. Upon shipment, we will provide
        you with a tracking number to keep you informed about the movements of
        your shipment.
      </p>

      <h2 className="pt-4 text-primary font-semibold text-xl">Contact Us</h2>
      <p className="pt-2 text-gray-400">
        If you have additional questions about our delivery service or need
        assistance with your order, feel free to contact us. Our support team is
        here to provide you with the necessary information and resolve any
        concerns.
      </p>

      <p className="pt-8 text-lg">
        Thank you for choosing our fast delivery. We look forward to enabling
        you to enjoy your products in the shortest possible time!
      </p>
    </motion.div>
  );
};

export default ShippingPage;
