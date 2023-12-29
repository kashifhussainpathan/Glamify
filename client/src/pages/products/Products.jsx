import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "@components/@ui";
import { useGetGenderFromPath } from "@hooks";
import { LiaFilterSolid } from "react-icons/lia";
import { useFiltersState, useProductsState } from "@hooks";
import { getProducts, getFilters, removeFilters } from "@redux";
import { Filters, Pagination, ProductCard, ProductLoader } from "@components";

const Products = () => {
  const dispatch = useDispatch();

  const { gender } = useParams();
  const { filters } = useFiltersState();
  const { gender: genderFromPath } = useGetGenderFromPath();
  const { products, status, currentPage: page } = useProductsState();

  const [toggleFilters, setToggleFilters] = useState(false);

  const genderToGetProducts = gender || genderFromPath;

  useEffect(() => {
    dispatch(getFilters({ gender }));
    if (!products.length > 0) {
      dispatch(getProducts({ page, gender: genderToGetProducts, filters }));
    }
  }, [gender]);

  const handleApplyFiltersClick = () => {
    dispatch(getProducts({ page, gender: genderToGetProducts, filters }));
  };

  const handleRemoveFiltersClick = () => {
    dispatch(removeFilters());
    const filters = {
      rating: 0,
      sizes: [],
      brands: [],
      colors: [],
      categories: [],
      priceRange: { min: 0, max: 0 },
    };
    dispatch(getProducts({ page, gender: genderToGetProducts, filters }));
  };

  useEffect(() => {
    setToggleFilters(false);
  }, []);

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
        <Filters />
      </div>

      <div
        className="hidden max-md:block max-md:fixed max-md:bottom-6 max-md:right-4 max-md:z-50 max-md:text-lg max-md:font-semibold max-md:bg-slate-50 max-md:shadow max-md:p-2 max-lg:rounded"
        onClick={HandleToggleFilters}
      >
        <LiaFilterSolid />
      </div>

      <div className="w-[100%] mx-auto">
        <div className="flex justify-end mt-4 gap-2">
          <Button onClick={handleApplyFiltersClick}>Apply Filters</Button>
          <Button onClick={handleRemoveFiltersClick}>Remove Filters</Button>
        </div>

        <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center  gap-4 mt-2">
          {status === "loading"
            ? Array.from({ length: 20 }).map((_, i) => (
                <ProductLoader key={i} />
              ))
            : products?.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
        </div>

        {!products?.length && <div> No products found. </div>}

        {products?.length > 0 && <Pagination />}
      </div>
    </div>
  );
};

export default Products;
