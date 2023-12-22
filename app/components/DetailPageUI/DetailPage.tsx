"use client";

import ImageGallery from "./ImageGallery";
import RatingStar from "@/app/assets/RatingStarIcon";
import TruckIcon from "@/app/assets/TruckIcon";
import { Button } from "@/components/ui/button";
import { DetailData } from "@/app/types/ProductTypes";
import { useCartContext } from "../../context/cart-reducer";
import { useToast } from "@/components/ui/use-toast";

const DetailPage: React.FC<DetailData & { images: string[] }> = (props) => {
  const { toast } = useToast();
  const cartCtx = useCartContext();
  const addToCarthandler = () => {
    cartCtx.addItem({
      id: props.id,
      src: props.images[0],
      title: props.title,
      price: props.price,
      dimensions: props.dimensions,
      amount: 1,
    });
  };

  const buyNow = async () => {
    const data = {
      quantity: 1,
      product_id: props.id,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/v2/pay/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      console.log(responseData);

      const { err, msg } = responseData;

      if (!err) {
        console.log("successfully");
      } else if (response.status === 400 && responseData.err) {
        console.log("Invalid action");
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <section className="flex flex-col xl:flex-row gap-8 mt-6 font-poppins pb-10 xl:border-b border-white">
      <div>
        <ImageGallery images={props.images} />
      </div>
      <div className="max-w-xl lg:max-w-3xl xl:max-w-lg 2xl:h-[585px] border-b border-white xl:border-b-0 flex flex-col justify-between items-between pb-10 xl:pb-0">
        <div>
          <div className="flex justify-start border-b border-white">
            <h1 className="pb-2 font-bold text-primary font-roboto text-lg tracking-wider">
              {props.category}
            </h1>
          </div>

          <div>
            <h1 className="text-4xl pt-4 font-medium w-2/3">{props.title}</h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row justify-center items-center gap-4 w-24 h-8 rounded-lg bg-primary mt-4 hover:cursor-pointer transition  duration-250 hover:scale-110">
              <span className="text-sm font-semibold">{props.rating}</span>
              <RatingStar />
            </div>
            <p className="pt-4 text-sm text-gray-400">{props.reviews} rating</p>
          </div>
          <div className="mt-12">
            <div className="flex flex-row">
              <p className="text-3xl">{props.price}.00€</p>
              <span className="text-xl text-gray-400 pt-1 pl-2">
                {props.dimensions}
              </span>
            </div>
            <p className="text-sm">Without delivery and VAT.</p>
            <div className="mt-2 flex flex-row">
              <TruckIcon width={24} height={24} />{" "}
              <p className="text-sm ml-1 text-gray-400">
                Delivery in 2-5 business days.
              </p>
            </div>
          </div>
          <div>
            <p className="pb-5">{props.description}</p>
          </div>
        </div>
        <div className="mt-2 flex flex-row justify-between">
          <Button
            type="submit"
            variant="default"
            className="py-6 hover:bg-foreground hover:text-primary font-bold tracking-wider flex grow mr-4"
            onClick={() => {
              addToCarthandler();
              toast({
                title: "Product successfully added to the cart!",
                description: `Added Product: ${props.title}`,
              });
            }}
          >
            Add to Cart
          </Button>
          <Button
            type="submit"
            variant="outline"
            className="py-6 font-bold tracking-wider"
            onClick={buyNow}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
