import React from "react";
import { useDispatch } from "react-redux";

import { setFilters } from "@redux";
import { useFiltersState } from "@hooks";

const Categories = () => {
  const dispatch = useDispatch();
  const { filters, categories } = useFiltersState();

  const handleCategoriesChange = (category) => () => {
    dispatch(setFilters({ category }));
  };

  const isChecked = (category) => {
    return filters?.categories?.includes(category);
  };

  return (
    <>
      <div className="px-1 ">
        {categories?.map((category) => (
          <div key={category} className="flex gap-1 items-center">
            <input
              type="checkbox"
              name={category}
              id={category}
              checked={isChecked(category)}
              onChange={handleCategoriesChange(category)}
            />
            <label htmlFor={category} className="cursor-pointer">
              {category}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
