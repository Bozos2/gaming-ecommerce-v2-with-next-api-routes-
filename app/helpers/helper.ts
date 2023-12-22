import { signIn } from "next-auth/react";
import { LoginUserData } from "../types/UserTypes";

export const loginUser = async ({ email, password }: LoginUserData) => {
  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  return res;
};
