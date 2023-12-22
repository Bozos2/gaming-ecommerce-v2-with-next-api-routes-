"use client";

import Image from "next/image";

import QuantityButton from "../Buttons/QuantityButton";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import GarbageIcon from "@/app/assets/GarbageIcon";
import { useCartContext } from "@/app/context/cart-reducer";
import { Button } from "@/components/ui/button";

const ImageStyle = {
  borderRadius: "10%",
  height: "134px",
};

const CartForm = () => {
  const cartCtx = useCartContext();
  console.log(cartCtx);

  const shippingCost = 18.0;
  const vatRate = 0.17;

  const subtotal = cartCtx.totalAmount;
  const vatAmount = subtotal * vatRate;
  const totalAmount = subtotal + shippingCost + vatAmount;

  const updateProductAmount = (id: string, newAmount: number) => {
    cartCtx.updateItemAmount(id, newAmount);
  };

  const removeItemFromCartHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const { data: session } = useSession();
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartCtx.items,
        email: session?.user?.email,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id });
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };

  if (cartCtx.items?.length === 0) {
    return <h2 className="text-xl text-center">Cart is empty</h2>;
  }

  return (
    <div>
      <div className="border-b-2 pb-4 font-poppins">
        <ul className="flex flex-col gap-4 w-full max-h-[480px] overflow-auto">
          {cartCtx?.items?.map((item) => (
            <div className="flex gap-1" key={item.id}>
              <div className="w-full sm:w-2/5 bg-white rounded-lg">
                <Image
                  src={item.src}
                  alt="product image"
                  style={ImageStyle}
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-between w-full ml-2">
                <div className="flex flex-col sm:flex-row justify-between flex-nowrap">
                  <h2 className="text-base font-semibold sm:text-xl ">
                    {item.title}
                  </h2>
                  <h5 className="font-semibold text-sm sm:text-xl pt-1 sm:pt-0">
                    €{item.price}.00
                  </h5>
                </div>
                <div className="flex flex-row">
                  <h6 className="hidden sm:block text-base">Dimensions:</h6>
                  <p className="text-gray-400 text-xs sm:text-base pl-1 pt-[1px]">
                    {" "}
                    {item.dimensions}
                  </p>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <div className="pt-2 hidden sm:block">
                      <GarbageIcon />
                    </div>
                    <button
                      onClick={() => removeItemFromCartHandler(item.id)}
                      className="pt-1.5 pl-0.5 pr-2 sm:pl-1  text-xs sm:text-base text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                  <QuantityButton
                    amount={item.amount}
                    onUpdateAmount={(newAmount) =>
                      updateProductAmount(item.id, newAmount)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-between mt-4 text-gray-400">
        <div className="border-b-2 pb-4">
          <div className="flex flex-row justify-between py-0.5">
            <h4>Subtotal</h4>
            <h4>€{cartCtx?.totalAmount?.toFixed(2)}</h4>
          </div>
          <div className="flex flex-row justify-between py-0.5">
            <h4>Shipping</h4>
            <h4>€18.00</h4>
          </div>
          <div className="flex flex-row justify-between py-0.5">
            <h4>VAT (17%)</h4>
            <h4>€{vatAmount.toFixed(2)}</h4>
          </div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-4 font-semibold text-xl text-white">
          <h2>Total</h2>
          <h2>€{totalAmount?.toFixed(2)}</h2>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <Button
          variant="default"
          className="py-5 px-4 sm:py-7 sm:px-24 hover:bg-foreground hover:text-primary font-bold  text-lg sm:tracking-widest"
          onClick={handleCheckout}
        >
          PROCCED TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartForm;
