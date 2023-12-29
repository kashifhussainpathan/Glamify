import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCheckEmptyObject } from "@hooks";
import HomeHeading from "../home/HomeHeading";
import ProductsCarousel from "./ProductsCarousel";
import ProdctsDetailsLeft from "./ProdctsDetailsLeft";
import { getProduct, getSimilarProducts } from "@redux";
import ProductsDetailsRight from "./ProductsDetailsRight";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const pathnames = window.location.pathname?.split("/");
  const productId = pathnames[pathnames?.length - 1];

  const { status, product, similarProducts } = useSelector(
    ({ products }) => products
  );

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

  if (Object.keys(product).length === 0) {
    return <div>No Product Found</div>;
  }

  return (
    <>
      <div className="flex justify-center items-start flex-wrap mt-10">
        <ProdctsDetailsLeft product={product} />

        <ProductsDetailsRight product={product} />
      </div>

      <HomeHeading>EXPLORE SIMILAR PRODUCTS</HomeHeading>

      <div className="w-full mb-10">
        <ProductsCarousel products={similarProducts} status={status} />
      </div>
    </>
  );
};

export default ProductDetails;
