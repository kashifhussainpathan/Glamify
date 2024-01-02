import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from "./ProductCard";
import ProductLoader from "./ProductLoader";

const responsive = {
  xl: {
    breakpoint: { max: 3000, min: 1276 },
    items: 6,
  },
  lg: {
    breakpoint: { max: 1275, min: 1235 },
    items: 5,
  },
  mdl: {
    breakpoint: { max: 1234, min: 955 },
    items: 4,
  },
  md: {
    breakpoint: { max: 955, min: 889 },
    items: 3,
  },

  sml: {
    breakpoint: { max: 888, min: 666 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 665, min: 613 },
    items: 3,
  },
  xs: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const ProductsCarousel = ({ products, status }) => {
  return (
    <Carousel
      responsive={responsive}
      itemClass="slider-image-item"
      removeArrowOnDeviceType={["mobile"]}
    >
      {status === "loading"
        ? Array.from({ length: 30 })
            .fill()
            .map((_, i) => <ProductLoader key={i} />)
        : products?.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
    </Carousel>
  );
};

export default ProductsCarousel;
