import React from "react";

import { MdOutlineStar, MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ brand, name, image_urls, reviews, price }) => {
  const image = image_urls[0];
  return (
    <div className="w-[210px] p-2 border border-slate-200 hover:border hover:border-zinc-300 cursor-pointer">
      <div className="relative h-auto overflow-hidden">
        {image && (
          <img
            src={image}
            alt={name}
            className="h-auto w-full transition-all duration-2000 ease-out-expo hover:scale-110 "
          />
        )}

        <div className=" bg-white rounded-sm w-7 h-7 shadow text-base flex items-center justify-center absolute top-1 right-1">
          <MdOutlineShoppingCart />
        </div>
      </div>

      <div className=" px-2">
        <div className=" mt-2 text-sm font-semibold w-[180px] overflow-hidden overflow-ellipsis whitespace-nowrap">
          {brand.toUpperCase()}
        </div>
        <div className=" my-1 text-sm font-normal w-[180px] overflow-hidden overflow-ellipsis whitespace-nowrap">
          {name}
        </div>
      </div>

      <div className=" px-2">
        <div className="flex items-center">
          {Array.from({ length: reviews.rating }).map((_, i) => (
            <MdOutlineStar className="text-gray-800" />
          ))}{" "}
          <span className="pl-1 text-sm">({reviews.count}) </span>
        </div>
        <div className="font-semibold text-lg">€{price.value}</div>
      </div>
    </div>
  );
};

export default ProductCard;
