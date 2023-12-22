"use client";

import React, { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

const Filters = ({
  onCategoryChange,
  onDimensionsChange,
  onSortChange,
}: {
  onCategoryChange: (newValue: string[]) => void;
  onDimensionsChange: (newValue: string[]) => void;
  onSortChange: (newValue: string) => void;
}) => {
  const [categorySelected, setCategorySelected] = useState<string[]>([]);
  const [dimensionsSelected, setDimensionsSelected] = useState<string[]>([]);
  const [sortSelected, setSortSelected] = useState("");

  const handleCategoryChange = (
    newValue: string[] | React.FormEvent<HTMLDivElement>
  ) => {
    if (Array.isArray(newValue)) {
      setCategorySelected(newValue);
      onCategoryChange(newValue);
    }
  };

  const handleDimensionsChange = (
    newValue: string[] | React.FormEvent<HTMLDivElement>
  ) => {
    if (Array.isArray(newValue)) {
      setDimensionsSelected(newValue);
      onDimensionsChange(newValue);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortSelected(event.target.value);
    onSortChange(event.target.value);
  };

  useEffect(() => {
    console.log(categorySelected);
    console.log(dimensionsSelected);
    console.log(sortSelected);
  }, [categorySelected, dimensionsSelected, sortSelected]);

  return (
    <Accordion type="single" collapsible className="max-w-sm w-full  p-2">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="text-lg">Category</AccordionTrigger>
        <AccordionContent>
          <div className="flex  gap-4">
            <CheckboxGroup
              value={categorySelected}
              onChange={(newValue) => handleCategoryChange(newValue)}
            >
              <Checkbox value="League of legends">League of legends</Checkbox>
              <Checkbox value="Warcraft">Warcraft</Checkbox>
              <Checkbox value="Starcraft">Starcraft</Checkbox>
              <Checkbox value="Battle Royale">Battle Royale</Checkbox>
              <Checkbox value="Others">Others</Checkbox>
            </CheckboxGroup>
          </div>{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-0">
        <AccordionTrigger className="text-lg">Dimensions</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-4">
            <CheckboxGroup
              value={dimensionsSelected}
              onChange={(newValue) => handleDimensionsChange(newValue)}
            >
              <Checkbox value="5x5">5x5</Checkbox>
              <Checkbox value="10x10">10x10</Checkbox>
              <Checkbox value="15x15">15x15</Checkbox>
              <Checkbox value="30x30">30x30</Checkbox>
            </CheckboxGroup>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-0">
        <AccordionTrigger className="text-lg">Sort by</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            <RadioGroup
              value={sortSelected}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleSortChange(event)
              }
            >
              <Radio value="najniza">Price: Lowest</Radio>
              <Radio value="najvisa">Price: Highest</Radio>
              <Radio value="A-Z">Name: A-Z</Radio>
              <Radio value="Z-A">Name: Z-A</Radio>
            </RadioGroup>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;
