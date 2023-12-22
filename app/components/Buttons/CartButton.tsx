"use client";

import Link from "next/link";

import { useCartContext } from "../../context/cart-reducer";

import CartIcon from "@/app/assets/NavbarIcons/CartIcon";

const CartButton = () => {
  const ctxData = useCartContext();
  const numberOfItems =
    ctxData.items?.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0) || 0;
  return (
    <Link href="/cart" scroll={false} className="pt-4">
      <button className="cursor-pointer font-oswald transition ease-in duration-200 hover:-translate-y-0.5  hover:scale-110 hidden sm:block">
        <span className="">
          <CartIcon />
        </span>
        <span className="absolute mt-[-52px] ml-2 font-semibold bg-blue-700 px-2 rounded-full">
          {numberOfItems}
        </span>
      </button>
    </Link>
  );
};

export default CartButton;
