"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import PriceSlider from "./DoubleRangeSlider";
import Filters from "./Filters";

type StateProps = {
  category?: string[];
  dimensions?: string[];
  sort?: string;
  price?: string[];
};

const SidebarFilter = ({ category, dimensions, sort, price }: StateProps) => {
  const router = useRouter();

  const [categorySelected, setCategorySelected] = useState<string[]>(
    Array.isArray(category) ? category : []
  );

  const [dimensionsSelected, setDimensionsSelected] = useState<string[]>(
    Array.isArray(dimensions) ? dimensions : []
  );
  const [sortSelected, setSortSelected] = useState<string>(sort || "");
  const [selectedPrice, setSelectedPrice] = useState<string[]>(
    Array.isArray(price) ? price : []
  );

  useEffect(() => {
    const hasCategory = categorySelected.length > 0;
    const hasSort = sortSelected.length > 0;
    const hasDimensions = dimensionsSelected.length > 0;
    const hasPrice = selectedPrice.length === 2;
    const options = [
      { hasParam: hasCategory, key: "category", values: categorySelected },
      {
        hasParam: hasDimensions,
        key: "dimensions",
        values: dimensionsSelected,
      },
      { hasParam: hasSort, key: "sort", values: [sortSelected] },
      { hasParam: hasPrice, key: "price", values: selectedPrice },
    ];

    const queryParams = options
      .filter((option) => option.hasParam)
      .map((option) => option.values.map((value) => `${option.key}=${value}`))
      .flat();

    const finalURL = `/products${
      queryParams.length > 0 ? "?" : ""
    }${queryParams.join("&")}`;
    router.push(finalURL);
  }, [categorySelected, dimensionsSelected, sortSelected, selectedPrice]);

  return (
    <div className="w-80 flex flex-col gap-4">
      <PriceSlider onPriceChange={setSelectedPrice} />
      <Filters
        onCategoryChange={setCategorySelected}
        onDimensionsChange={setDimensionsSelected}
        onSortChange={setSortSelected}
      />
    </div>
  );
};

export default SidebarFilter;
