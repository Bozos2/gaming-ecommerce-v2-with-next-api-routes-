"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Keyboard, A11y } from "swiper/modules";
import "swiper/css";

const MobileCateory = () => {
  const [selectedSelection, setSelectedSelection] = useState(3);
  const handleSelectionClick = (index: number) => {
    setSelectedSelection(index);
  };

  return (
    <div className="relative mt-12  h-11 flex items-center max-w-xs sm:max-w-lg font-poppins">
      <div className="absolute top-0 left-0 w-12 h-full rounded-lg bg-gradient-to-r from-[#161619]  to-transparent z-10"></div>
      <Swiper
        modules={[Keyboard, A11y]}
        spaceBetween={30}
        slidesPerView={2.7}
        initialSlide={2}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="relative h-8 overflow-hidden z-0"
      >
        <SwiperSlide
          className={`bg-secondary rounded-lg text-center cursor-pointer pt-1 px-1  focus-within:bg-rose-600 ${
            selectedSelection === 0 ? "pozadina" : ""
          }`}
          onClick={() => handleSelectionClick(0)}
          tabIndex={0}
        >
          <Link href="/products?category=Warcraft">Warcraft</Link>
        </SwiperSlide>
        <SwiperSlide
          className={`bg-secondary rounded-lg text-center cursor-pointer pt-1 px-1  focus-within:bg-rose-600 ${
            selectedSelection === 1 ? "pozadina" : ""
          }`}
          onClick={() => handleSelectionClick(1)}
          tabIndex={0}
        >
          <Link href="/products?category=League%20of%20legends">
            League of legends
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`bg-secondary rounded-lg text-center cursor-pointer pt-1 px-1  focus-within:bg-rose-600 ${
            selectedSelection === 2 ? "pozadina" : ""
          }`}
          onClick={() => handleSelectionClick(2)}
          tabIndex={0}
        >
          <Link href="/products?category=Starcraft">Starcraft</Link>
        </SwiperSlide>
        <SwiperSlide
          className={`bg-secondary rounded-lg text-center cursor-pointer pt-1 px-1  focus-within:bg-rose-600 ${
            selectedSelection === 3 ? "pozadina" : ""
          }`}
          onClick={() => handleSelectionClick(3)}
          tabIndex={0}
        >
          <Link href="/products">All Products</Link>
        </SwiperSlide>
        <SwiperSlide
          className={`bg-secondary rounded-lg text-center cursor-pointer pt-1 px-1  focus-within:bg-rose-600 ${
            selectedSelection === 4 ? "pozadina" : ""
          }`}
          onClick={() => handleSelectionClick(4)}
          tabIndex={0}
        >
          <Link href="/products?category=Battle%20Royale">Battle Royale</Link>
        </SwiperSlide>
        <SwiperSlide
          className={`bg-secondary rounded-lg text-center cursor-pointer pt-1 px-1  focus-within:bg-rose-600 ${
            selectedSelection === 5 ? "pozadina" : ""
          }`}
          onClick={() => handleSelectionClick(5)}
          tabIndex={0}
        >
          <Link href="/products?category=Others">Ostali</Link>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 right-0 w-12 h-full rounded-lg bg-gradient-to-l from-[#161619]  to-transparent z-10"></div>
    </div>
  );
};

export default MobileCateory;
