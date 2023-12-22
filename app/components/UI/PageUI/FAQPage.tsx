"use client";

import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";
import { motion } from "framer-motion";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "FAQ", link: "/faq" },
];

const QA = [
  {
    question: "How can I order my 3D gaming figurine?",
    answer:
      "To order your favorite gaming figurine, simply select the product, add it to your cart, and follow the instructions to complete the order.",
  },
  {
    question: "What is the average delivery time for gaming figurines?",
    answer:
      "The average delivery time for our gaming figurines is within 3-5 business days.",
  },
  {
    question: "How can I track the status of my order?",
    answer:
      "After completing your order, you will receive an email confirmation with information about the status of your order. You can also use the tracking option to see the current location of your gaming figurine during delivery.",
  },
  {
    question: "Do you have the option to customize gaming figurines?",
    answer:
      "Yes, we offer customization! You have a dedicated section on our website to personalize your own figurine.",
  },
  {
    question: "How long does the process of customizing gaming figurines take?",
    answer:
      "The processing time for personalized orders depends on the complexity of customization. In most cases, you can expect an additional processing time of 1-2 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we provide international shipping. Check the delivery options during the ordering process to select the appropriate shipping country and learn about the delivery time.",
  },
  {
    question: "How is the payment for the order processed?",
    answer:
      "We accept various payment methods, including credit cards and PayPal. Choose the option that suits you best when completing the order.",
  },
  {
    question: "What if I am not satisfied with my order?",
    answer:
      "Your satisfaction is our priority. If you are not completely satisfied with your order, feel free to contact us. We will provide support regarding returns or replacements.",
  },
  {
    question: "Can I change or cancel my order after it's confirmed?",
    answer:
      "After order confirmation, changes are limited, but contact us immediately. We will try to assist you or adjust the order according to your needs, if possible.",
  },
  {
    question: "What does the return policy include?",
    answer:
      "Our return policy allows you to return the product within a specified time period if you are not satisfied. Check the details of the return policy on our website or contact us for additional information.",
  },
];

const FAQPage = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="max-w-3xl pb-8 sm:pt-20 font-poppins mx-4">
      <div className="pb-10">
        <BreadcrumbsDetail items={breadcrumbItems} />
      </div>
      <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
      <p className="pt-4 text-xl">
        Welcome to our page dedicated to the most frequently asked questions
        from our users. Here are all the answers to the questions in one place:
      </p>

      <ul className="pt-8">
        {QA.map((data, i) => (
          <motion.li
            key={i}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.2 }}
          >
            <h1 className="pt-4 font-semibold text-xl text-primary">
              {data.question}
            </h1>
            <p className="pt-2 text-gray-400">{data.answer}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
