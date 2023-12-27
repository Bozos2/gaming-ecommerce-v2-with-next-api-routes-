"use server";

import User from "@/lib/mongooseModel";
import crypto from "crypto";
import { connectToMongoDB } from "@/lib/mongooseConnect";
import { PasswordReset } from "../_actions";

const ResetPassword = async (email: string) => {
  connectToMongoDB().catch((err) => console.log("error:", err));

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
  const today = new Date();
  const expiryDate = new Date(today.getTime() + 3 * 60 * 60 * 1000); //3 hours

  await User.findByIdAndUpdate(
    { _id: user._id },
    {
      resetPasswordToken: resetPasswordToken,
      resetPasswordTokenExpiry: expiryDate,
    }
  );

  await PasswordReset(email, resetPasswordToken);
};

export default ResetPassword;
