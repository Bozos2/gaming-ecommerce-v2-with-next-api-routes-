"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ResetPasswordModal from "./ResetPasswordModal";
import { useSession } from "next-auth/react";

const DUMMYTransakcije = [
  {
    ime: "Fornite Skull Trooper figurica",
    cijena: "€60.00",
    datum: "22.11.2022",
  },
  {
    ime: "Cod Gaming 3d figurica",
    cijena: "€90.00",
    datum: "08.01.2023",
  },
  {
    ime: "Jinx Arcane 3d figurica",
    cijena: "€120.00",
    datum: "28.06.2023",
  },
  {
    ime: "Pubg gaming 3d figurica",
    cijena: "€20.00",
    datum: "12.04.2022",
  },
];

const ProfileContent = () => {
  const { data: session }: any = useSession();

  return (
    <div className="flex flex-col justify-center">
      {session ? (
        <>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center gap-3 mt-2">
              <h2 className="text-gray-400">
                <span className="font-bold text-white">First Name: </span>
                {session.user.firstName}
              </h2>
              <h2 className="text-gray-400">
                <span className="font-bold text-white">Last Name: </span>
                {session.user.lastName}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center pt-1">
              <h2 className="text-gray-400">
                <span className="font-bold  text-white">Email:</span>{" "}
                {session.user.email}
              </h2>
            </div>
            <div className="flex flex-row justify-center gap-3 mt-2">
              <h2 className="text-gray-400">
                <span className="font-bold text-white">Date of Birth: </span>
                {session.user.date_of_birth}
              </h2>
              <h2 className="text-gray-400">
                <span className="font-bold text-white">Gender: </span>
                {session.user.gender}
              </h2>
            </div>

            <div className="flex justify-center mt-2">
              <ResetPasswordModal title="Change password" />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm pr-1">
                  Transaction History
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col">
                    {DUMMYTransakcije.map((item: any, i) => (
                      <li
                        className="flex flex-row justify-between py-1 gap-3 sm:gap-4"
                        key={i}
                      >
                        <div className="max-w-[140px] overflow-hidden">
                          {item.ime}
                        </div>
                        <p className=" text-gray-400">{item.cijena}</p>
                        <p className=" text-gray-400">{item.datum}</p>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-center">
            You must be logged in for profile details!
          </h1>{" "}
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
