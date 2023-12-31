import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  ProdctsDetailsLeft,
  ProductsDetailsRight,
  ProductDetailsLoader,
} from "@components/productsDetails";
import { HomeHeading } from "@components/home";
import { ProductsCarousel } from "@components";
import { getProduct, getSimilarProducts } from "@redux";
import { useCheckEmptyObject, useProductsState } from "@hooks";

const ProductDetails = () => {
  const scrollRef = useRef();
  const dispatch = useDispatch();

  const pathnames = window.location.pathname?.split("/");
  const productId = pathnames[pathnames?.length - 1];

  const { product, similarProducts } = useProductsState();
  const { productStatus, similarProductsStatus } = useProductsState();

  useEffect(() => {
    if (useCheckEmptyObject(product)) {
      dispatch(getProduct(productId));
    }
  }, []);

  const { gender, product_type } = product;

  useEffect(() => {
    if (!useCheckEmptyObject(product)) {
      dispatch(getSimilarProducts({ gender, product_type }));
    }
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [product]);

  if (useCheckEmptyObject(product)) {
    return <div>No Product Found</div>;
  }

  return (
    <div ref={scrollRef}>
      {productStatus === "loading" ? (
        <ProductDetailsLoader />
      ) : (
        <div className="flex justify-center items-start flex-wrap mt-10">
          <ProdctsDetailsLeft product={product} />
          <ProductsDetailsRight product={product} />
        </div>
      )}

      <HomeHeading>EXPLORE SIMILAR PRODUCTS</HomeHeading>

      <div className="w-full mb-10">
        <ProductsCarousel
          products={similarProducts}
          status={similarProductsStatus}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
