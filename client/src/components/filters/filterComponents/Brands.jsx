import React from "react";
import { useDispatch } from "react-redux";

import { setFilters } from "@redux";
import { useFiltersState } from "@hooks";

const Brands = () => {
  const dispatch = useDispatch();

  const { filters, brands } = useFiltersState();

  const handleBrandChange = (brand) => () => {
    dispatch(setFilters({ brand }));
  };

  const isChecked = (brand) => {
    return filters?.brands?.includes(brand);
  };

  return (
    <div className="px-1 ">
      {brands?.map((brand) => (
        <div key={brand} className="flex gap-1 items-center cursor-pointer">
          <input
            type="checkbox"
            name={brand}
            id={brand}
            checked={isChecked(brand)}
            onChange={handleBrandChange(brand)}
          />
          <label htmlFor={brand} className="cursor-pointer">
            {brand}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Brands;
