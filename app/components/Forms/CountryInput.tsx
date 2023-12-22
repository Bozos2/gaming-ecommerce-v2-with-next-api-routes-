"use client";

import React from "react";

import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./SignupForm";
import { Select, SelectItem, Avatar, SelectSection } from "@nextui-org/react";

const CountryInput = ({ register }: { register: UseFormRegister<Inputs> }) => {
  return (
    <div>
      <label htmlFor="country">Country:</label>
      <Select
        id="country"
        aria-label="Country"
        {...register("country")}
        classNames={{
          base: "max-w-xs",
          trigger: "bg-[#3B3B3B] hover:bg-[#3B3B3B]",
          popoverContent: "bg-[#3B3B3B]",
        }}
        labelPlacement="outside"
        defaultSelectedKeys={["others"]}
        placeholder="Chose Country"
        required
      >
        <SelectSection>
          <SelectItem
            key="serbia"
            startContent={
              <Avatar
                alt="Serbia"
                className="w-6 h-6"
                src="https://flagcdn.com/rs.svg"
              />
            }
          >
            Serbia
          </SelectItem>
          <SelectItem
            key="montenegro"
            startContent={
              <Avatar
                alt="Montenegro"
                className="w-6 h-6"
                src="https://flagcdn.com/me.svg"
              />
            }
          >
            Montenegro
          </SelectItem>
          <SelectItem
            key="croatia"
            startContent={
              <Avatar
                alt="Croatia"
                className="w-6 h-6"
                src="https://flagcdn.com/hr.svg"
              />
            }
          >
            Hrvatska
          </SelectItem>
          <SelectItem
            key="bih"
            startContent={
              <Avatar
                alt="BiH"
                className="w-6 h-6"
                src="https://flagcdn.com/ba.svg"
              />
            }
          >
            BiH
          </SelectItem>
          <SelectItem
            key="germany"
            startContent={
              <Avatar
                alt="Germany"
                className="w-6 h-6"
                src="https://flagcdn.com/de.svg"
              />
            }
          >
            Germany
          </SelectItem>
          <SelectItem
            key="macedonia"
            startContent={
              <Avatar
                alt="Macedonia"
                className="w-6 h-6"
                src="https://flagcdn.com/mk.svg"
              />
            }
          >
            Macedonia
          </SelectItem>
          <SelectItem
            key="greek"
            startContent={
              <Avatar
                alt="Greek"
                className="w-6 h-6"
                src="https://flagcdn.com/gr.svg"
              />
            }
          >
            Greek
          </SelectItem>
          <SelectItem
            key="slovenia"
            startContent={
              <Avatar
                alt="Slovenia"
                className="w-6 h-6"
                src="https://flagcdn.com/si.svg"
              />
            }
          >
            Slovenia
          </SelectItem>
          <SelectItem
            key="hungary"
            startContent={
              <Avatar
                alt="Hungary"
                className="w-6 h-6"
                src="https://flagcdn.com/hu.svg"
              />
            }
          >
            Hungary
          </SelectItem>
          <SelectItem
            key="others"
            startContent={
              <Avatar
                alt="Ostale"
                className="w-6 h-6"
                src="https://flagcdn.com/eu.svg"
              />
            }
          >
            Others
          </SelectItem>
        </SelectSection>
      </Select>
    </div>
  );
};

export default CountryInput;
