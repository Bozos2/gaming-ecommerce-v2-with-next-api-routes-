"use client";

import Image from "next/image";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { loginUser } from "@/app/helpers/helper";

import { FormDataSchema } from "@/lib/schema";
import CountryInput from "./CountryInput";
import img7 from "../../assets/Images/form7.jpg";
import UserIcon from "@/app/assets/FormIcons/UsersIcon";
import MailIcon from "@/app/assets/FormIcons/MailIcon";
import LockIcon from "@/app/assets/FormIcons/LockIcon";

export type Inputs = z.infer<typeof FormDataSchema>;

const SignupForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const submitedForm: SubmitHandler<Inputs> = async (data) => {
    reset();

    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      country: data.country,
      password: data.password,
      gender: data.gender,
      date_of_birth: data.age,
    };

    try {
      const apiResponse = await axios.post("api/auth/signup", formData);

      if (apiResponse?.data.success) {
        await loginUser({
          email: data.email,
          password: data.password,
        });
        router.push("/");
        toast({
          title: "Successful registration!",
          description: "Please check your email for account verification.",
        });
      }
    } catch (err) {
      const errors = err as AxiosError;
      console.error("Error during POST request:", err);

      if (errors.response?.status === 409) {
        console.log("Invalid credentials");
        toast({
          variant: "destructive",
          title: "Unsuccessful registration!",
          description: "User already exist",
        });
      }
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <section
      className={`max-w-6xl w-full sm:w-[498px] xl:w-full h-[800px] 
        sm:h-[550px] flex justify-center items-center gap-4 bg-zinc-950 border shadow-md shadow-neutral-500 p-4 rounded-lg mx-4 my-12 sm:my-0 font-poppins`}
    >
      <div className="w-3/5 hidden h-full xl:block relative">
        <Image
          alt="form image"
          src={img7}
          fill
          style={{ objectFit: "cover", borderRadius: "1%" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>
      <div className="xl:w-2/5 w-full h-full flex justify-center items-center px-2">
        <div className="flex flex-col justify-center mt-3">
          <h1 className="text-3xl font-semibold tracking-wider text-primary font-blackops mb-4 sm:mb-8">
            Create an account
          </h1>
          <form onSubmit={handleSubmit(submitedForm)}>
            <div
              className={`flex flex-col sm:flex-row gap-2 justify-between ${
                hasErrors ? "mb:0" : "mb-2"
              }`}
            >
              <div className="sm:mr-2">
                <label htmlFor="first-name" className="block text-white mb-1">
                  First Name:
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pt-2 h-full pl-3 pr-2">
                    <UserIcon />
                  </span>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Enter first name..."
                    {...register("firstName")}
                    className="w-full py-1.5 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                  />
                  {errors.firstName?.message && (
                    <p className="text-sm text-red-400">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-white mb-1">
                  Last Name:
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2">
                    <UserIcon />
                  </span>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Enter last name..."
                    {...register("lastName")}
                    className="w-full py-1.5 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                  />
                  {errors.lastName?.message && (
                    <p className="text-sm text-red-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className={`${hasErrors ? "mb:0" : "mb-2"}`}>
              <label htmlFor="email" className="block text-white mb-1">
                Email:
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email..."
                  {...register("email")}
                  className="w-full py-1.5 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div
              className={`${
                hasErrors ? "mb:0" : "mb-2"
              }  flex-col flex sm:flex-row gap-2 justify-between`}
            >
              <div className="sm:mr-2">
                <label htmlFor="password" className="block text-white mb-1">
                  Password:
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2">
                    <LockIcon />
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password..."
                    {...register("password")}
                    className="w-full py-1.5 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                  />
                  {errors.password?.message && (
                    <p className="text-sm text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                {" "}
                <label
                  htmlFor="confirmpassword"
                  className="block text-white mb-1"
                >
                  Confirm Password:
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2">
                    <LockIcon />
                  </span>
                  <input
                    type="password"
                    id="confirmpassword"
                    placeholder="Confirm password..."
                    {...register("confirmPassword")}
                    className="w-full py-1.5 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                  />
                  {errors.confirmPassword?.message && (
                    <p className="text-sm text-red-400">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-2 grid grid-cols-2 sm:flex flex-row justify-between">
              <div className="sm:w-1/3 pt-1 mr-2 sm:mr-0">
                <CountryInput register={register} />
              </div>
              <div>
                <label htmlFor="gender" className="block text-white mb-1">
                  Gender:
                </label>
                <select
                  id="gender"
                  aria-label="gender"
                  {...register("gender")}
                  className="w-full p-1.5 border rounded-xl hover:cursor-pointer"
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender?.message && (
                  <p className="text-sm text-red-400">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <div className="col-span-full">
                <label htmlFor="age" className="block text-white mb-1">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="age"
                  {...register("age")}
                  className="w-full p-1.5 border rounded-xl hover:cursor-pointer"
                  required
                />
                {errors.age?.message && (
                  <p className="text-sm text-red-400">{errors.age.message}</p>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-4 sm:mt-8">
              <Button
                type="submit"
                variant="default"
                className="py-6 px-12 sm:px-36 hover:bg-foreground hover:text-primary font-bold tracking-wider"
              >
                Register
              </Button>
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-sm">
                Already have an account?
                <Link
                  href="/login"
                  className="ml-1 text-blue-500 hover:underline hover:text-blue-700"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
