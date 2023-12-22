"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "../UI/helper/CustomCheckbox";
import { CustomRadioButton } from "./helper/CustomRadioButton";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@nextui-org/react";

type StateProps = {
  category?: string[];
  dimensions?: string[];
  sort?: string;
  price?: string[];
};

const FilterSection = ({ category, dimensions, sort, price }: StateProps) => {
  const router = useRouter();

  const [categorySelected, setCategorySelected] = useState<string[]>(
    Array.isArray(category) ? category : []
  );

  const [dimensionsSelected, setDimensionsSelected] = useState<string[]>(
    Array.isArray(dimensions) ? dimensions : []
  );
  const [sortSelected, setSortSelected] = useState<string>(sort || "");
  const [minPrice, setMinPrice] = useState<number | undefined>(
    Array.isArray(price) ? parseInt(price[0], 10) : undefined
  );

  const [maxPrice, setMaxPrice] = useState<number | undefined>(
    Array.isArray(price) ? parseInt(price[1], 10) : undefined
  );

  useEffect(() => {
    const hasCategory = categorySelected.length > 0;
    const hasSort = sortSelected.length > 0;
    const hasDimensions = dimensionsSelected.length > 0;
    const hasPrice =
      typeof minPrice === "number" && typeof maxPrice === "number";

    const options = [
      { hasParam: hasCategory, key: "category", values: categorySelected },
      {
        hasParam: hasDimensions,
        key: "dimensions",
        values: dimensionsSelected,
      },
      { hasParam: hasSort, key: "sort", values: [sortSelected] },
      {
        hasParam: hasPrice,
        key: "price",
        values: [`${minPrice}&price=${maxPrice}`],
      },
    ];

    const queryParams = options
      .filter((option) => option.hasParam)
      .map((option) => option.values.map((value) => `${option.key}=${value}`))
      .flat();

    const finalURL = `/products${
      queryParams.length > 0 ? "?" : ""
    }${queryParams.join("&")}`;
    router.push(finalURL);
  }, [categorySelected, dimensionsSelected, sortSelected, minPrice, maxPrice]);

  return (
    <div className="flex flex-col gap-3 w-full font-poppins">
      <div className="flex flex-col mt-4 w-full mb-2">
        <label className="text-[#a1a1aa] font-bold">Price</label>
        <div className="flex flex-row items-center gap-1">
          <input
            type="number"
            className="w-24 bg-background/80 border-4 text-center border-b-rose-600 border-t-0 border-r-transparent border-l-transparent focus:outline-none"
            value={minPrice || ""}
            onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
          />
          TO{" "}
          <input
            type="number"
            className="w-24 bg-background/80 border-4  text-center border-b-rose-600 border-t-0 border-r-transparent border-l-transparent focus:outline-none"
            value={maxPrice || ""}
            onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
          />{" "}
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full mb-2">
        <CheckboxGroup
          className="gap-1"
          label={<span className="font-bold">Category</span>}
          orientation="horizontal"
          color="primary"
          value={categorySelected}
          onChange={(newValue) => {
            if (Array.isArray(newValue)) {
              setCategorySelected(newValue);
            }
          }}
        >
          <CustomCheckbox value="League of legends">
            League of legends
          </CustomCheckbox>
          <CustomCheckbox value="Warcraft">Warcraft</CustomCheckbox>
          <CustomCheckbox value="Starcraft">Starcraft</CustomCheckbox>
          <CustomCheckbox value="Battle Royale">Battle Royale</CustomCheckbox>
          <CustomCheckbox value="Others">Others</CustomCheckbox>
        </CheckboxGroup>
      </div>
      <div className="flex flex-col gap-1 w-full mb-2">
        <CheckboxGroup
          className="gap-1"
          label={<span className="font-bold">Dimensions</span>}
          orientation="horizontal"
          color="primary"
          value={dimensionsSelected}
          onChange={(newValue) => {
            if (Array.isArray(newValue)) {
              setDimensionsSelected(newValue);
            }
          }}
        >
          <CustomCheckbox value="5x5">5x5</CustomCheckbox>
          <CustomCheckbox value="10x10">10x10</CustomCheckbox>
          <CustomCheckbox value="15x15">15x15</CustomCheckbox>
          <CustomCheckbox value="30x30">30x30</CustomCheckbox>
        </CheckboxGroup>
      </div>
      <div className="flex flex-col gap-1 w-full mb-2">
        <RadioGroup
          className="gap-1"
          label={<span className="font-bold">Sort By</span>}
          orientation="horizontal"
          color="primary"
          value={sortSelected}
          onChange={(newValue) => {
            setSortSelected(newValue.target.value);
          }}
        >
          <CustomRadioButton value="najniza">Price: Lowest</CustomRadioButton>
          <CustomRadioButton value="najvisa">Price: Highest</CustomRadioButton>
          <CustomRadioButton value="A-Z">Name: A-Z</CustomRadioButton>
          <CustomRadioButton value="Z-A">Name: Z-A</CustomRadioButton>
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterSection;
