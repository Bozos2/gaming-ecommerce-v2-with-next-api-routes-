"use client";

import { useState, useEffect } from "react";
import InterceptedCartPageAsModal from "@/app/components/UI/helper/CartModal";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="min-h-screen flex justify-center items-center">
      {isClient ? (
        <div>
          <InterceptedCartPageAsModal />
        </div>
      ) : (
        <h1 className="text-5xl">Loading...</h1>
      )}
    </section>
  );
};

export default CartPage;
