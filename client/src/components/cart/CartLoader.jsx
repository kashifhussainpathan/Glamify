import React from "react";
import { Skeleton } from "@ui";

const CartCardLoader = () => {
  return (
    <div>
      <div className="w-[450px] max-md:w-[320px] h-auto flex shadow gap-4 rounded-sm pl-2 relative py-2 mb-4">
        <Skeleton classes="h-[145px] w-[120px] max-md:w-[80px] max-md:h-[120px] max-md:my-auto" />

        <div className="my-2">
          <Skeleton classes="h-5 w-50 max-md:h-4 max-md:w-32 mb-2" />
          <Skeleton classes="h-4 w-32 max-md:h-4 max-md:w-16 mb-2" />
          <Skeleton classes="h-5 w-12 max-md:h-4 max-md:w-12" />

          <div className="flex items-center max-md:text-sm my-2 gap-1">
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />

            <Skeleton classes="h-3 w-4 max-md:h-2 max-md:w-2" />
          </div>

          <div className="flex justify-between w-[270px] max-md:w-full max-md:gap-4">
            <select
              name="size"
              className=" cursor-pointer border my-1 max-md:text-sm"
            >
              <option value="">Choose Size</option>
            </select>

            <div className="flex justify-center gap-1">
              <button className="px-[10px] pb-[3px] border rounded hover:bg-gray-200 text-xl max-md:text-sm">
                -
              </button>
              <input
                name="quantity"
                type="text"
                placeholder="1"
                numeric="true"
                className=" w-6 text-center max-md:text-sm"
              />
              <button className="px-2 pb-[1px] border rounded hover:bg-gray-200 text-lg max-md:text-sm">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[450px] max-md:w-[320px] h-auto flex shadow gap-4 rounded-sm pl-2 relative py-2">
        <Skeleton classes="h-[145px] w-[120px] max-md:w-[80px] max-md:h-[120px] max-md:my-auto" />

        <div className="my-2">
          <Skeleton classes="h-5 w-50 max-md:h-4 max-md:w-32 mb-2" />
          <Skeleton classes="h-4 w-32 max-md:h-4 max-md:w-16 mb-2" />
          <Skeleton classes="h-5 w-12 max-md:h-4 max-md:w-12" />

          <div className="flex items-center max-md:text-sm my-2 gap-1">
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />
            <Skeleton classes="h-3 w-3 max-md:h-2 max-md:w-2" />

            <Skeleton classes="h-3 w-4 max-md:h-2 max-md:w-2" />
          </div>

          <div className="flex justify-between w-[270px] max-md:w-full max-md:gap-4">
            <select
              name="size"
              className=" cursor-pointer border my-1 max-md:text-sm"
            >
              <option value="">Choose Size</option>
            </select>

            <div className="flex justify-center gap-1">
              <button className="px-[10px] pb-[3px] border rounded hover:bg-gray-200 text-xl max-md:text-sm">
                -
              </button>
              <input
                name="quantity"
                type="text"
                placeholder="1"
                numeric="true"
                className=" w-6 text-center max-md:text-sm"
              />
              <button className="px-2 pb-[1px] border rounded hover:bg-gray-200 text-lg max-md:text-sm">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCardLoader;
