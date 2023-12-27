"use client";

import LocationIcon from "@/app/assets/ContactIcons/LocationIcon";
import MailIcon from "@/app/assets/ContactIcons/MailIcon";
import PhoneIcon from "@/app/assets/ContactIcons/PhoneIcon";
import { Button } from "@/components/ui/button";
import BreadcrumbsDetail from "../UI/Breadcrumbs";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmailContactForm } from "@/app/actions/_actions";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInputs } from "../HomeUI/ContactUsForm";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Contact", link: "/contact" },
];

const ContactUsPage = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const submitHandler: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmailContactForm(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast({
        title: "Form Successfully Submitted!",
        description: "We will respond to you as soon as possible. Thank you!",
      });
      reset();
      return;
    }

    console.log(result?.error);
    toast({
      variant: "destructive",
      title: "Incomplete Submission",
      description: "Please fill out all required fields.",
    });
  };

  return (
    <section className="flex flex-col items-center  min-h-screen py-12 font-poppins">
      <motion.div
        initial={{ x: "60%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sm:pl-12 mx-8 mb-12 "
      >
        <div>
          <BreadcrumbsDetail items={breadcrumbItems} />
        </div>
        <h1 className=" text-4xl sm:text-5xl pt-12 font-black font-roboto">
          Contact Us!
        </h1>
        <p className="max-w-2xl pt-6 text-lg font-poppins pr-2 text-gray-400">
          Our team of experts is at your service. Contact us with any questions,
          suggestions, or comments using the contact form below or by using our
          contact information. Your feedback is important to us, and we look
          forward to hearing from you.
        </p>
      </motion.div>
      <motion.form
        initial={{ x: "-60%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        method="POST"
        className="w-[330px] sm:w-[630px] flex flex-col gap-2 justify-between  rounded-lg px-12 py-6 mb-12 bg-zinc-950 border shadow-md shadow-neutral-500"
        onSubmit={handleSubmit(submitHandler)}
      >
        <label className="mb-8 text-3xl tracking-wide font-medium font-blackops">
          Contact us directly.
        </label>
        <div className="flex flex-col gap-2 sm:flex-row justify-between">
          <input
            id="firstname"
            type="text"
            placeholder="Enter First name..."
            className="border border-[#e11d48]  py-3 px-3 rounded-md w-full"
            {...register("firstName")}
          />
          {errors.firstName?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.firstName.message}
            </p>
          )}
          <input
            id="lastname"
            type="text"
            placeholder="Enter Last name..."
            className="border border-[#e11d48]  py-3 px-3 rounded-md w-full"
            {...register("lastName")}
          />
          {errors.lastName?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <input
          id="email"
          type="email"
          placeholder="Enter email..."
          className="border border-[#e11d48] w-full py-3 px-3 rounded-md"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
        <textarea
          placeholder="Message..."
          className="border border-[#e11d48] w-full  pb-12 pt-4 px-3 rounded-md"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="ml-1 text-sm text-red-400">{errors.message.message}</p>
        )}
        <Button
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-foreground hover:text-primary font-bold rounded-md py-5"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </motion.form>
      <motion.div
        initial={{ x: "60%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row flex-wrap justify-center lg:flex-row gap-4 max-w-2xl"
      >
        <div className="w-[300px]  flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <PhoneIcon width={33} height={33} />
          <span className="ml-1">+213 2131 2132</span>
        </div>
        <div className="w-[300px]  flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <PhoneIcon width={33} height={33} />
          <span className="ml-1">+213 123 457</span>
        </div>
        <div className="w-[300px] flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <MailIcon width={33} height={33} />
          <span className="ml-1">gameloot2@gmail.com</span>
        </div>
        <div className="w-[300px] flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <MailIcon width={33} height={33} />
          <span className="ml-1">gameloottrgovina@gmail.com</span>
        </div>
        <div className="w-[300px]  flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <LocationIcon width={33} height={33} />
          <span className="ml-1">3050 Novi Sad,Srbija</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUsPage;
