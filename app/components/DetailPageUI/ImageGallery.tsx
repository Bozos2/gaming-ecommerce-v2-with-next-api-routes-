"use client";

import Image from "next/image";
import { useState } from "react";

export interface imgProps {
  images: string[];
}

const styleImage = {
  width: "500px",
  height: "500px",
};

export default function ImageGallery({ images }: imgProps) {
  const [bigImage, setBigImage] = useState(images?.[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5 max-w-xl lg:max-w-3xl">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images?.map((image: any, i: any) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center"
          >
            <Image
              src={image}
              width={200}
              height={200}
              priority
              alt="photo"
              className="h-full w-full  cursor-pointer object-cover object-center"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-lg  bg-gray-100 lg:col-span-4 flex justify-center items-center">
        <Image
          src={bigImage}
          alt="Photo"
          width={500}
          height={500}
          style={styleImage}
          priority
        />
      </div>
    </div>
  );
}
