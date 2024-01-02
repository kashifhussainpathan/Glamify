import React from "react";

import { useProductsState } from "@hooks";
import { Categories } from "@components/home";
import { HomeHeading, HomeSlider, ProductsCarousel } from "@components";

const Home = () => {
  const { menProducts, womenProducts } = useProductsState();
  const { menProductsStatus, womenProductsStatus } = useProductsState();

  return (
    <div className="mb-10">
      <HomeSlider />

      <Categories />

      <HomeHeading>MEN'S APPAREL SECTION</HomeHeading>
      <div className="w-full ">
        <ProductsCarousel products={menProducts} status={menProductsStatus} />
      </div>

      <HomeHeading>WOMEN'S FASHION PICKS</HomeHeading>
      <div className="w-full ">
        <ProductsCarousel
          products={womenProducts}
          status={womenProductsStatus}
        />
      </div>
    </div>
  );
};

export default Home;
