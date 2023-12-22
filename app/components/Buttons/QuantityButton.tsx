"use client";

import React, { useState } from "react";

interface QuantityButtonProps {
  amount: number;
  onUpdateAmount: (newAmount: number) => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = (props) => {
  const { amount, onUpdateAmount } = props;

  const incrementQuantity = () => {
    if (amount < 5) {
      onUpdateAmount(amount + 1);
    }
  };

  const decrementQuantity = () => {
    if (amount > 1) {
      onUpdateAmount(amount - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decrementQuantity}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:px-3 rounded-l"
      >
        -
      </button>
      <div className="bg-gray-200 px-2 sm:px-3 py-1 text-black font-medium">
        {amount}
      </div>
      <button
        onClick={incrementQuantity}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:px-3 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
