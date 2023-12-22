"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { loginUser } from "@/app/helpers/helper";

import LoginImage from "../../assets/Images/LoginIllustration.png";
import LockIcon from "@/app/assets/FormIcons/LockIcon";
import MailIcon from "@/app/assets/FormIcons/MailIcon";
import ResetPasswordModal from "../UI/helper/ResetPasswordModal";

const imageStyle = {
  width: "603px",
  height: "452px",
  marginTop: "22px",
};

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!password || !email) {
      console.error("Password is undefined or null");
      return;
    }

    try {
      const loginHandler = await loginUser({ email, password });

      if (loginHandler && !loginHandler.ok) {
        toast({
          variant: "destructive",
          title: "Unsuccessful login!",
          description: `${loginHandler.error}`,
        });
      } else {
        router.push("/");
        toast({
          title: "Successfully login!",
          description: "Welcome Back!",
        });
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <div className="max-w-5xl lg:w-full h-[450px] flex justify-center   bg-zinc-950 border shadow-md shadow-neutral-500  rounded-lg mx-4 my-12 sm:my-0 font-poppins">
      <div className="w-3/5 hidden h-full   lg:flex items-center justify-center">
        <Image
          alt="Login illustration"
          src={LoginImage}
          priority={true}
          style={imageStyle}
        />
      </div>
      <div className="w-full lg:w-2/5 lg:pr-4 px-6 lg:px-0">
        <form onSubmit={submitHandler}>
          <h1 className="text-3xl font-semibold tracking-wider text-primary font-blackops mt-12 mb-6">
            Log In
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 text-lg">
              Email:
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2.5">
                <MailIcon />
              </span>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                placeholder="Enter email..."
                className="w-full py-2 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="mb-1 text-lg">
              Password:
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2.5">
                <LockIcon />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
                placeholder="Enter password..."
                className="w-full py-2 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <ResetPasswordModal title="Forgot your password?" />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              type="submit"
              variant="default"
              className="py-6 px-24 sm:px-36 hover:bg-foreground hover:text-primary font-bold tracking-wider"
            >
              Submit
            </Button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm">
              Don't have an account?
              <Link
                href="/signup"
                className="ml-1 text-blue-500 hover:underline hover:text-blue-700"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
