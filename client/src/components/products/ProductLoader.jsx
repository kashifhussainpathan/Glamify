import React from "react";
import { Skeleton } from "@ui";

const ProductLoader = () => {
  return (
    <div className="w-[210px] p-2 shadow-small rounded-md cursor-pointer my-1 max-md:w-[150px] ">
      <Skeleton classes="md:h-[250px] w-full max-md:w-[120px] max-md:mx-auto max-md:h-[150px]" />

      <div className=" px-2 max-md:px-[2px]">
        <Skeleton classes="my-2 h-4 w-[160px] max-md:w-[120px] overflow-hidden overflow-ellipsis whitespace-nowrap max-md:text-[12px]" />

        <Skeleton classes=" my-1 h-4 w-[140px] overflow-hidden overflow-ellipsis whitespace-nowrap max-md:text-[12px] max-md:w-[100px]" />
      </div>

      <div className=" px-2 mt-1 max-md:px-[2px]">
        <div className="flex items-center gap-1 mt-2">
          <Skeleton classes="h-4 w-4 max-md:h-3 max:md:w-1" />
          <Skeleton classes="h-4 w-4 max-md:h-3 max:md:w-1" />
          <Skeleton classes="h-4 w-4 max-md:h-3 max:md:w-1" />
          <Skeleton classes="h-4 w-4 max-md:h-3 max:md:w-1" />

          <Skeleton classes="h-4 w-8 max-md:h-3 max-md:w-6" />
        </div>
        <Skeleton classes="h-6 w-12 mt-2 max-md:h-4" />
      </div>
    </div>
  );
};

export default ProductLoader;
