"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import LocationIcon from "@/app/assets/ContactIcons/LocationIcon";
import MailIcon from "@/app/assets/ContactIcons/MailIcon";
import PhoneIcon from "@/app/assets/ContactIcons/PhoneIcon";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmailContactForm } from "@/app/actions/_actions";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { toast } = useToast();

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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
      className="flex flex-col items-center justify-center min-h-screen py-12"
    >
      <div className="mx-4 px-4 sm:mx-8  mb-24 ">
        <h1 className="text-foreground text-4xl sm:text-5xl pt-12 font-black font-roboto">
          Contact Us!
        </h1>
        <p className="max-w-2xl pt-6 text-lg font-poppins pr-2">
          Our team of experts is at your service. Reach out to us with
          questions, suggestions, or comments using the contact form below or by
          using our contact information. Your feedback is important to us, and
          we look forward to hearing from you.
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-4 h-[660px] lg:h-[300px]">
        <div className="flex flex-col justify-between gap-2 max-w-xl">
          <Link
            href="/contact"
            className="sm:w-full  flex flex-row items-center gap-3 p-4  rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background"
          >
            <PhoneIcon />
            <p className="text-foreground text-base font-semibold">
              {" "}
              +387-123-465
            </p>
          </Link>

          <Link
            href="/contact"
            className="sm:w-full  flex flex-row items-center gap-3 p-4 rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background"
          >
            <MailIcon />{" "}
            <p className="text-foreground text-base font-semibold">
              GameLoot@gmail.com
            </p>
          </Link>
          <Link
            href="/contact"
            className="sm:w-full flex flex-row items-center gap-3 p-4  rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background"
          >
            <LocationIcon />{" "}
            <p className="text-foreground text-base font-semibold">
              3050 Belgrade, Serbia
            </p>
          </Link>
        </div>
        <form
          method="POST"
          className="w-[280px] sm:w-[430px] flex flex-col gap-2 justify-between"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col gap-2 sm:flex-row justify-between">
            <input
              id="firstname"
              type="text"
              placeholder="First Name"
              className="border border-[#e11d48]  py-3 px-3 rounded-md"
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
              placeholder="Last Name"
              className="border border-[#e11d48]  py-3 px-3 rounded-md"
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
            placeholder="Email"
            className="border border-[#e11d48] w-full py-3 px-3 rounded-md"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}

          <textarea
            placeholder="Message"
            className="border border-[#e11d48] w-full  pb-12 pt-4 px-3 rounded-md"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="ml-1 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
          <Button
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-foreground hover:text-primary font-bold rounded-md py-5"
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactUsForm;
