import React from "react";
import { useSelector } from "react-redux";

import { HomeHeading, HomeSlider, ProductsCarousel } from "@components";

const Home = () => {
  const { status, menProducts, womenProducts } = useSelector(
    ({ products }) => products
  );

  return (
    <div className="mb-10">
      <HomeSlider />

      <HomeHeading>MEN'S APPAREL SECTION</HomeHeading>
      <div className="w-full ">
        <ProductsCarousel products={menProducts} status={status} />
      </div>

      <HomeHeading>WOMEN'S FASHION PICKS</HomeHeading>
      <div className="w-full ">
        <ProductsCarousel products={womenProducts} status={status} />
      </div>
    </div>
  );
};

export default Home;
