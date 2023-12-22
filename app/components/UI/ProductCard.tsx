"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ProductProps } from "@/app/types/ProductTypes";
import { useCartContext } from "../../context/cart-reducer";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip } from "@nextui-org/react";

import CartMobile from "@/app/assets/NavbarIcons/MobileIcons/CartMobile";
import InfoIcon from "@/app/assets/NavbarIcons/MobileIcons/InfoIcon";
import DifficultyStars from "@/app/helpers/DifficultyStars";

const styleImage = {
  width: "180px",
  height: "180px",
};

const ProductCard = (props: ProductProps) => {
  const { toast } = useToast();
  const cartCtx = useCartContext();
  const addToCarthandler = () => {
    cartCtx.addItem({
      id: props.id,
      src: props.src[0],
      title: props.title,
      price: props.price,
      dimensions: props.dimensions,
      amount: 1,
    });
  };

  return (
    <main className="w-[280px]  h-[410px] bg-zinc-900 font-poppins text-white rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600 cursor-pointer">
      <div className="h-3/5 flex justify-center items-center">
        <Image
          alt="product image"
          src={props.src[0]}
          height={180}
          width={180}
          style={styleImage}
          priority
        />
      </div>
      <div className="flex flex-col justify-between pt-2 pb-3 px-4 h-2/5">
        <Link
          href={`/products/${props.detail}`}
          className="text-lg font-bold hover:text-rose-600 "
        >
          {props.title}
        </Link>
        <div className="flex flex-row items-center gap-14">
          <h4 className="text-md font-semibold">{props.price}.00€</h4>{" "}
          <span>
            <DifficultyStars rating={props.rating} />
          </span>
        </div>
        <div className="flex flex-row justify-around gap-2">
          <Button
            variant="default"
            className="py-2 px-6 rounded-lg tracking-wider   hover:bg-foreground hover:text-primary font-medium font-poppins"
          >
            Buy Now
          </Button>
          <Tooltip showArrow={true} content="Add to Cart">
            <button
              onClick={() => {
                addToCarthandler();
                toast({
                  title: "Product Successfully Added to Cart!",
                  description: `Added product: ${props.title}`,
                });
              }}
              className="w-12 h-9 flex justify-center items-center  border-2 border-white rounded-lg  hover:text-rose-600 hover:border-rose-600  transition ease-in duration-500 hover:scale-110"
            >
              <CartMobile />
            </button>
          </Tooltip>
          <Tooltip showArrow={true} content="Detail of product">
            <Link
              href={`/products/${props.detail}`}
              className="w-12 h-9 flex justify-center items-center  border-2 border-white rounded-lg  hover:text-rose-600 hover:border-rose-600  transition ease-in duration-500 hover:scale-110"
            >
              <InfoIcon />
            </Link>
          </Tooltip>
        </div>
      </div>
    </main>
  );
};

export default ProductCard;
