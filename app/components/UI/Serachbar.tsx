"use client";

import { useDebounce } from "use-debounce";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

import SearchIcon from "@/app/assets/NavbarIcons/SearchIcon";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef<boolean>(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/products`);
    } else {
      router.push(`/products?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="relative max-w-[260px] xl:max-w-xs">
      <span className="pointer-events-none  absolute text-center top-1/2  transform -translate-y-1/2 left-3 focus:bg-rose-600">
        <SearchIcon />
      </span>
      <input
        className="border border-white rounded-md pl-12 w-full h-10 lg:h-12 focus:outline focus:outline-rose-600 focus:border-rose-600 "
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Search;
