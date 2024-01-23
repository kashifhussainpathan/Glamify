import React, { useEffect } from "react";

import ProductCard from "./ProductCard";
import ProductLoader from "./ProductLoader";
import { useProductsCorousel } from "@hooks";
import { FcPrevious, FcNext } from "react-icons/fc";

const ProductsCarousel = ({ products, status }) => {
  const { tabContainerRef, handleScroll, setScrollPosition } =
    useProductsCorousel();

  useEffect(() => {
    setScrollPosition(0);
  }, [products]);

  return (
    <section className="flex justify-start items-center w-full gap-4 overflow-scroll overflow-x-hidden overflow-y-hidden relative max-md:py-4">
      <div
        className="absolute left-1 top-0 bottom-0 flex items-center"
        onClick={() => handleScroll("left")}
      >
        <FcPrevious className="text-gray-800 cursor-pointer bg-white shadow-small rounded-full text-5xl p-3 max-md:text-2xl max-md:p-1 z-999" />
      </div>

      <div
        className="w-full flex justify-start items-center gap-3 overflow-hidden px-8 max-md:px-4"
        ref={tabContainerRef}
      >
        {status === "loading"
          ? Array.from({ length: 30 })
              .fill()
              .map((_, i) => <ProductLoader key={i} />)
          : products?.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
      </div>

      <div
        className="absolute right-1 top-0 bottom-0 flex items-center cursor-pointer "
        onClick={() => handleScroll("right")}
      >
        <FcNext className="text-gray-800 cursor-pointer bg-white shadow-small rounded-full text-5xl p-3 max-md:text-2xl max-md:p-1 z-999" />
      </div>
    </section>
  );
};

export default ProductsCarousel;
