import React from "react";
import { Skeleton, Button } from "@ui";

const ProductDetailsLoader = () => {
  return (
    <div className="flex justify-center items-start flex-wrap mt-10">
      {/* Loader left */}
      <div>
        <div className=" w-[330px] h-auto">
          {/* Big Image */}
          <div className="w-full shadow-small rounded-md">
            <Skeleton classes=" w-[330px] h-[400px] max-md:w-[50%] max-md:mx-auto" />
          </div>

          {/* Image Previews */}
          <div className="w-full mx-auto mt-2">
            <div className="grid grid-cols-3 place-items-center max:md:gap-1">
              <Skeleton classes="w-[80px] h-[100px] cursor-pointer mb-2 max-md:w-12" />
              <Skeleton classes="w-[80px] h-[100px] cursor-pointer mb-2 max-md:w-12" />
              <Skeleton classes="w-[80px] h-[100px] cursor-pointer mb-2 max-md:w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="ml-8 w-[380px] max-md:mt-4">
        <Skeleton classes="h-6 w-[180px] rounded" />

        <Skeleton classes="h-4 w-32 rounded mt-4" />

        <div className="mb-4 mt-4 flex gap-1 items-center">
          <span className="font-bold">Type:</span>{" "}
          <Skeleton classes="h-4 w-12 rounded" />
        </div>

        <div className="mb-4 flex gap-1 items-center">
          <span className="font-bold">Brand:</span>{" "}
          <Skeleton classes="h-4 w-12 rounded" />
        </div>

        <div className="mb-4 flex gap-1 items-center">
          <span className="font-bold">Gender:</span>{" "}
          <Skeleton classes="h-4 w-12 rounded" />
        </div>

        <div className="mb-4 flex gap-1 items-center">
          <span className="font-bold">Category:</span>{" "}
          <Skeleton classes="h-4 w-24 rounded" />
        </div>

        <div className="mb-4 flex items-center gap-2">
          <span className="font-bold">Color:</span>
          <div className="flex items-center gap-1">
            <Skeleton classes="h-4 w-12 rounded" />
          </div>
        </div>

        <div className="mb-4 ">
          <span className="font-bold">Price:</span>
          <Skeleton classes="h-4 w-12 rounded" />
        </div>

        <div className="mb-4">
          <span className="font-bold">Available Sizes:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            <Skeleton classes="h-6 w-8 rounded" />
            <Skeleton classes="h-6 w-8 rounded" />
            <Skeleton classes="h-6 w-8 rounded" />
            <Skeleton classes="h-6 w-8 rounded" />
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <span className="font-bold">Rating:</span>{" "}
          <div className="flex items-center gap-1">
            <Skeleton classes="h-4 w-4 rounded" />
            <Skeleton classes="h-4 w-4 rounded" />
            <Skeleton classes="h-4 w-4 rounded" />
            <Skeleton classes="h-4 w-4 rounded" />
            <Skeleton classes="h-4 w-4 rounded" />
            <span className="pl-1 text-sm">
              <Skeleton classes="h-4 w-8 rounded" />
            </span>
          </div>
        </div>

        <div className="mb-4 w-full">
          <div className="mb-4 w-full">
            <Button disabled>Loading...</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLoader;
