import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import {
  ProdctsDetailsLeft,
  ProductsDetailsRight,
  ProductDetailsLoader,
} from "@components/productsDetails";
import { HomeHeading } from "@components/home";
import { getProduct, getSimilarProducts } from "@redux";
import { useCheckEmptyObject, useProductsState } from "@hooks";
import { ProductsCarousel, SuspenseFallback } from "@components";

const ProductDetails = () => {
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
  }, [product]);

  if (useCheckEmptyObject(product)) {
    return <SuspenseFallback />;
  }

  return (
    <div>
      {productStatus === "loading" ? (
        <ProductDetailsLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-start flex-wrap mt-10"
        >
          <ProdctsDetailsLeft product={product} />
          <ProductsDetailsRight product={product} />
        </motion.div>
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
