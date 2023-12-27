"use server";

import User from "@/lib/mongooseModel";
import bcrypt from "bcryptjs";

export const changePassword = async (
  resetPasswordToken: string,
  password: string
) => {
  try {
    const user = await User.findOne({
      resetPasswordToken,
    });

    if (!user) {
      throw new Error("User not found");
    }

    const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry;
    if (!resetPasswordTokenExpiry) {
      throw new Error("Token expired");
    }

    const today = new Date();

    if (today > resetPasswordTokenExpiry) {
      throw new Error("Token expired");
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await User.findByIdAndUpdate(
      { _id: user._id },
      {
        password: passwordHash,
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
      }
    );

    return "Password changed successfully";
  } catch (error) {
    console.error("Error changing password:", error);
    throw new Error("Failed to change password");
  }
};
