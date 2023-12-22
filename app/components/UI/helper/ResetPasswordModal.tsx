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

const ResetPasswordModal = ({ title }: { title: string }) => {
  const { toast } = useToast();
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const resetPasswordHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = async (event) => {
    event.preventDefault();

    const mail = emailRef.current?.value;
    const data = {
      email: mail,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/password-reset",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (response.status === 200) {
        toast({
          title: "Uspješan unos podataka!",
          description: "Provjerite vaš mail za promjenu lozinke",
        });
        router.push("/");
      } else if (response.status === 400 && responseData.err) {
        console.log("Invalid credentials");
        toast({
          variant: "destructive",
          title: "Neuspješna prijava!",
          description:
            "Nismo pronašli unesene podatke u našoj bazi podataka. Pokušajte ponovno.",
        });
      }
    } catch (error) {
      console.error("Error during POST request:", error);
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
