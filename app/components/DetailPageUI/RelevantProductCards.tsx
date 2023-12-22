import Image from "next/image";

import { RelevantProps } from "@/app/types/ProductTypes";
import Link from "next/link";
import DifficultyStars from "@/app/helpers/DifficultyStars";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const imageStyle = {
  width: "240px",
  height: "240px",
};

const RelevantProducts: React.FC<
  RelevantProps & { title: string; ProductsLink: boolean }
> = (props) => {
  return (
    <section
      className={`flex flex-col ${
        !props.ProductsLink ? "border-b border-white pb-4" : ""
      }`}
    >
      <div className="flex flex-row justify-between ">
        <h1 className="text-3xl font-semibold py-6 tracking-wide">
          {props.title}
        </h1>
        {props.ProductsLink ? (
          <Link
            href="/products"
            className="py-8 sm:text-xl hover:underline hover:underline-offset-2 flex flex-row items-center gap-2"
          >
            All Products{" "}
            <ArrowRightIcon height={28} width={28} className="pt-1" />
          </Link>
        ) : null}
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-5 gap-4">
          {props.data.map((data, i) => (
            <div
              key={i}
              className="rounded-lg hover:border border-white   flex flex-col h-[400px] px-2 py-2"
            >
              <div className="rounded-lg bg-gray-100 flex justify-center items-center">
                <Image
                  src={data.img[0]}
                  priority
                  style={imageStyle}
                  width={240}
                  height={240}
                  alt="photo"
                  className="h-full w-full  cursor-pointer"
                />
              </div>
              <div className="pt-1 flex flex-col justify-between">
                <Link
                  href={`/products/${data._id}`}
                  className="text-xl hover:underline hover:underline-offset-2"
                >
                  {data.title}
                </Link>

                <span className="mt-4">
                  <DifficultyStars rating={data.rating} />
                </span>
                <p className="pt-2">€{data.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevantProducts;
