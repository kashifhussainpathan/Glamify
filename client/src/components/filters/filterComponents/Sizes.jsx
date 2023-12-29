import { useDispatch } from "react-redux";

import { setFilters } from "@redux";
import { useFiltersState, useProductsState } from "@hooks";

const Sizes = () => {
  const dispatch = useDispatch();
  const { filters } = useFiltersState();
  const { products } = useProductsState();

  const allSizes = products?.flatMap((product) => product.available_sizes);

  const uniqueSizes = [...new Set([...allSizes])];

  const handleSizeClick = (size) => () => {
    dispatch(setFilters({ size }));
  };

  return (
    <div className="flex flex-wrap gap-3">
      {uniqueSizes?.map((size) => (
        <div
          key={size}
          className={`w-10 h-8 text-sm shadow-sm border cursor-pointer flex justify-center items-center ${
            filters?.sizes?.includes(size) ? "border-blue-500" : ""
          }`}
          onClick={handleSizeClick(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default Sizes;
