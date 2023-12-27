"use client";
import React, { useState } from "react";
import { changePassword } from "../../actions/users/changePassword";
import { Button } from "@/components/ui/button";

interface ChangePasswordFormProps {
  resetPasswordToken: string;
}

const ChangePasswordForm = ({
  resetPasswordToken,
}: ChangePasswordFormProps) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const message = await changePassword(resetPasswordToken, password);

    setMessage(message);
  };

  return (
    <div className="min-h-screen flex justify-center px-4 items-center font-poppins bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <div className="flex flex-col  p-4 border border-rose-600  rounded-lg">
        <h1 className="text-3xl font-semibold mb-12 tracking-wider">
          Change Password
        </h1>
        <label className="pb-2 text-xl">New password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 rounded-lg"
        />
        <label className="pb-2 text-xl">Confirm password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 mb-4 rounded-lg"
        />
        <Button
          type="submit"
          variant="default"
          className="py-6 px-12 sm:px-36 hover:bg-foreground hover:text-primary font-bold tracking-wider"
          onClick={handleSubmit}
        >
          Change Password
        </Button>
        <p className="pt-2">{message}</p>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
