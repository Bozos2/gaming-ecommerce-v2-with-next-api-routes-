import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Slider } from "@nextui-org/react";

export default function PriceSlider({
  onPriceChange,
}: {
  onPriceChange: Dispatch<SetStateAction<string[]>>;
}) {
  const [value, setValue] = useState<number[]>([10, 90]);

  useEffect(() => {
    const stringValues = value?.map(String);
    onPriceChange(stringValues);
    console.log(stringValues);
  }, [value]);

  const formatCurrency = (amount: string) => `€${amount}`;

  return (
    <div className="flex flex-col gap-2 max-w-sm w-full h-full  items-start justify-center">
      <Slider
        label="Chose your budget"
        formatOptions={{ style: "currency", currency: "EUR" }}
        step={10}
        maxValue={100}
        minValue={0}
        value={value}
        onChange={(newValue) => setValue(newValue as number[])}
        className="max-w-md"
      />
      <p className="text-foreground font-medium text-small w-full pt-4 flex flex-row justify-center items-center">
        {value.map((b, index) => (
          <React.Fragment key={index}>
            <span className="block border-2 border-primary mx-1 py-2 text-xl bg-neutral-800 w-28 text-center">
              {formatCurrency(String(b))}
            </span>
            {index < value.length - 1 && (
              <span className="inline-block text-center">━━</span>
            )}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
