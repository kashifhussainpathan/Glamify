import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductLoader = () => {
  return (
    <div className="w-[210px] p-2 border border-white hover:border hover:border-zinc-300 cursor-pointer">
      <div className="relative h-auto overflow-hidden">
        <Skeleton height={220} width={190} />
      </div>

      <div>
        <div className=" mt-2 text-sm font-semibold w-[180px] overflow-hidden overflow-ellipsis whitespace-nowrap">
          <Skeleton count={1} width={150} />
        </div>
        <div className=" my-1 text-sm font-normal w-[180px] overflow-hidden overflow-ellipsis whitespace-nowrap">
          <Skeleton count={1} width={190} />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton count={1} width={10} />
          ))}{" "}
          <Skeleton count={1} width={25} />
        </div>
        <div className="font-semibold text-lg">
          <Skeleton count={1} width={70} height={20} />
        </div>
      </div>
    </div>
  );
};

export default ProductLoader;
