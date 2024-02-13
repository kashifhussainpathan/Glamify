import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { Button } from "@components/@ui";
import memoizeData from "@utils/memoizeData";
import { useGetGenderFromPath } from "@hooks";
import { filtersConstants } from "@constants";
import { LiaFilterSolid } from "react-icons/lia";
import { setProducts, getNextProducts } from "@redux";
import { useFiltersState, useProductsState, useLoaderArray } from "@hooks";
import { Filters, Pagination, ProductCard, ProductLoader } from "@components";
import { getProducts, getFilters, removeFilters, setCurrentPage } from "@redux";

const Products = () => {
  const dispatch = useDispatch();

  const loaderArray = useLoaderArray();

  const { gender } = useParams();
  const { filters } = useFiltersState();
  const { gender: genderFromPath } = useGetGenderFromPath();
  const { products, productsStatus, currentPage: page } = useProductsState();

  const [toggleFilters, setToggleFilters] = useState(false);

  const genderToGetProducts = gender || genderFromPath;

  useEffect(() => {
    setToggleFilters(false);
    dispatch(getFilters({ gender }));
    if (!products.length > 0) {
      dispatch(getProducts({ page, gender: genderToGetProducts, filters }));
    }
  }, []);

  useEffect(() => {
    dispatch(
      getNextProducts({ page: page + 1, gender: genderToGetProducts, filters })
    );
  }, [page]);

  const handleApplyFiltersClick = () => {
    dispatch(setCurrentPage(1));
    const gender = genderToGetProducts;
    const { isCached, cachedData } = memoizeData(1, gender, filters);
    if (isCached) {
      dispatch(setProducts(cachedData));
    } else {
      dispatch(getProducts({ page: 1, gender, filters }));
    }
  };

  const handleRemoveFiltersClick = () => {
    dispatch(removeFilters());
    const gender = genderToGetProducts;
    const filters = filtersConstants;
    const { isCached, cachedData } = memoizeData(1, gender, filters);
    if (isCached) {
      dispatch(setProducts(cachedData));
      dispatch(setCurrentPage(1));
    } else {
      dispatch(getProducts({ page: 1, gender, filters }));
    }
  };

  const HandleToggleFilters = () => {
    setToggleFilters(!toggleFilters);
  };

  return (
    <div className="flex items-start">
      <div
        className={`max-md:fixed max-md:z-50 max-md:px-4 max-md:bg-slate-50 transition-all transform duration-500 ease-in-out max-md:rounded ${
          !toggleFilters ? "max-md:left-[-300px]" : "max-md:left-0"
        }`}
      >
        <div className="hidden max:md:flex max-md:justify-start max-md:mt-4 max-md:block">
          <Button onClick={handleApplyFiltersClick}>Apply Filters</Button>
          <Button onClick={handleRemoveFiltersClick}>Remove Filters</Button>
        </div>
        <Filters />
      </div>

      <div
        className="hidden max-md:block max-md:fixed max-md:bottom-6 max-md:right-4 max-md:z-50 max-md:text-2xl max-md:font-semibold max-md:bg-slate-50 max-md:shadow max-md:p-2 max-lg:rounded"
        onClick={HandleToggleFilters}
      >
        <LiaFilterSolid />
      </div>

      <div className="w-[100%] mx-auto">
        <div className="flex justify-end mt-4 gap-2 max-md:hidden">
          <Button onClick={handleApplyFiltersClick}>Apply Filters</Button>
          <Button onClick={handleRemoveFiltersClick}>Remove Filters</Button>
        </div>

        <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center  gap-4 mt-2">
          {productsStatus === "loading"
            ? loaderArray.map((_, i) => <ProductLoader key={i} />)
            : products?.map((product) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
        </div>

        {products?.length > 0 && <Pagination />}
      </div>
    </div>
  );
};

export default Products;
