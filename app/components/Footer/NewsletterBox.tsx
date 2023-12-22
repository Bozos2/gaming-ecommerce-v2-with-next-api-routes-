"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { NewsletterSchema } from "@/lib/schema";
import { NewsletterSubscription } from "@/app/_actions";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type NewsletterForm = z.infer<typeof NewsletterSchema>;

const Newsletter = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(NewsletterSchema),
  });

  const submitHandler: SubmitHandler<NewsletterForm> = async (email) => {
    const result = await NewsletterSubscription(email);

    if (result?.success) {
      console.log({ data: result.data });
      toast({
        title: "Form Successfully Submitted!",
        description: "Thank you for your subscription!",
      });
      reset();
      return;
    }

    console.log(result?.error);
    toast({
      variant: "destructive",
      title: "Incomplete Submission",
      description: "Please fill out all required field.",
    });
  };

  return (
    <div className="max-w-xs  p-4 ">
      <h1 className="text-3xl font-semibold mb-2">Stay trendy!</h1>
      <p className="text-foreground text-sm mb-4">
        Sign up to receive the latest information about our 3D figurines and
        special offers.
      </p>
      <form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <input
          type="email"
          placeholder="Tvoj e-mail"
          className="p-2 border border-gray-300 rounded mb-2 focus:outline focus:outline-rose-600 focus:border-none"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
        <Button
          type="submit"
          className="w-1/3 mt-1 bg-primary hover:bg-foreground hover:text-primary font-bold rounded-md py-2"
        >
          Send!
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
