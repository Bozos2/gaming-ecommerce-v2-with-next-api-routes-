"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useSession, signOut } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NavbarAuth = () => {
  const { data: session }: any = useSession();

  return (
    <main className="flex justify-center items-center gap-2">
      {session ? (
        <>
          <Link
            href="/profile"
            className="text-blue-500 hover:underline hover:underline-offset-2 hidden sm:block"
          >
            {session.user.firstName} {session.user.lastName}
          </Link>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                className={`${buttonVariants({
                  variant: "outline",
                })}  ml-2`}
              >
                Log Out
              </Button>{" "}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to perform this action?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will log you out of your user account.
                  Consequently, you won't be able to order a product from our
                  website.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => signOut()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className={`${buttonVariants({
              variant: "outline",
            })} hidden sm:block`}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className={buttonVariants({ variant: "default" })}
          >
            Sign up
          </Link>
        </>
      )}
    </main>
  );
};

export default NavbarAuth;
