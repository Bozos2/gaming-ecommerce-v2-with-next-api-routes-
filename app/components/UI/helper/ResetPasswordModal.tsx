"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ResetPassword from "@/app/actions/users/resetPassword";

const ResetPasswordModal = ({ title }: { title: string }) => {
  const { toast } = useToast();
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const resetPasswordHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = async (event) => {
    event.preventDefault();

    const mail = emailRef.current?.value;
    if (mail) {
      await ResetPassword(mail);

      toast({
        title: "Successfully",
        description: "Check your email for reset password",
      });
      router.push("/");
    } else {
      console.log("error");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-blue-500 hover:underline hover:text-blue-700 text-sm px-0"
        >
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Enter your email so we can send you a link to reset your password.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium pb-1">
            Email
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            className="rounded-lg py-1 pl-3"
            required
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={resetPasswordHandler}>
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordModal;
