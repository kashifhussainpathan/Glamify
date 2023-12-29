import React, { useState } from "react";

import FilterItem from "./FilterItem";
import FilterPanel from "./FilterPanel";
import FilterToggle from "./FilterToggle";

import { HiMinus } from "react-icons/hi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoFilterOutline } from "react-icons/io5";

import Price from "./filterComponents/Price";
import Colors from "./filterComponents/Colors";
import Brands from "./filterComponents/Brands";
import Rating from "./filterComponents/Rating";
import Categories from "./filterComponents/Categories";

const Filters = () => {
  const filters = [
    "categories",
    "brands",
    "colors",
    "price",
    "rating",
    "filters",
  ];
  const [openedFilters, setOpenedFilters] = useState([]);

  const toggleFilter = (filter) => {
    if (filter === "filters") {
      setOpenedFilters(openedFilters.length === 0 ? filters : []);
    } else {
      if (openedFilters.includes(filter)) {
        setOpenedFilters(openedFilters.filter((f) => f !== filter));
      } else {
        setOpenedFilters([...openedFilters, filter]);
      }
    }
  };

  const showIcon = (filter) => {
    if (filter === "filters") {
      return openedFilters.includes(filter) || openedFilters.length > 0 ? (
        <HiMinus />
      ) : (
        <HiOutlinePlusSm />
      );
    } else {
      return openedFilters.includes(filter) ? <HiMinus /> : <HiOutlinePlusSm />;
    }
  };

  return (
    <div className="w-[250px] pr-8 max-md:pr-0 max-md:w-[200px]">
      <FilterItem>
        <FilterToggle onToggle={toggleFilter} filter={"filters"}>
          <div className="text-sm font-medium flex items-center gap-1">
            <IoFilterOutline className="text-lg" /> FILTERS
          </div>
          <div className="text-[1.5rem] text-gray-600 transition-transform delay-300 flex items-center gap-1">
            <p className="text-sm font-medium text-gray-500">
              {openedFilters.length > 0 ? "Collapse all" : "Expand all"}{" "}
            </p>
            <p className="pt-[1px]">{showIcon("filters")}</p>
          </div>
        </FilterToggle>
      </FilterItem>

      <hr className=" border-gray-400" />

      <FilterItem>
        <FilterToggle onToggle={toggleFilter} filter={"categories"}>
          <div className="text-sm font-medium">CATEGORIES</div>
          <div className="text-[1.5rem] text-gray-600 transition-transform delay-300">
            {showIcon("categories")}
          </div>
        </FilterToggle>

        <FilterPanel openedFilters={openedFilters} filter={"categories"}>
          <Categories category="Women" />
        </FilterPanel>
      </FilterItem>

      <hr className=" border-gray-300" />

      <FilterItem>
        <FilterToggle onToggle={toggleFilter} filter={"brands"}>
          <div className="text-sm font-medium">BRANDS</div>
          <div className="text-[1.5rem] text-gray-600 transition-transform delay-300">
            {showIcon("brands")}
          </div>
        </FilterToggle>

        <FilterPanel openedFilters={openedFilters} filter={"brands"}>
          <Brands />
        </FilterPanel>
      </FilterItem>

      <hr className=" border-gray-300" />

      <FilterItem>
        <FilterToggle onToggle={toggleFilter} filter={"colors"}>
          <div className="text-sm font-medium">COLORS</div>
          <div className="text-[1.5rem] text-gray-600 transition-transform delay-300">
            {showIcon("colors")}
          </div>
        </FilterToggle>

        <FilterPanel openedFilters={openedFilters} filter={"colors"}>
          <Colors />
        </FilterPanel>
      </FilterItem>

      <hr className=" border-gray-300" />

      <FilterItem>
        <FilterToggle onToggle={toggleFilter} filter={"price"}>
          <div className="text-sm font-medium">PRICE</div>
          <div className="text-[1.5rem] text-gray-600 transition-transform delay-300">
            {showIcon("price")}
          </div>
        </FilterToggle>

        <FilterPanel openedFilters={openedFilters} filter={"price"}>
          <Price />
        </FilterPanel>
      </FilterItem>

      <hr className=" border-gray-300" />

      <FilterItem>
        <FilterToggle onToggle={toggleFilter} filter={"rating"}>
          <div className="text-sm font-medium">RATING</div>
          <div className="text-[1.5rem] text-gray-600 transition-transform delay-300">
            {showIcon("rating")}
          </div>
        </FilterToggle>

        <FilterPanel openedFilters={openedFilters} filter={"rating"}>
          <Rating />
        </FilterPanel>
      </FilterItem>

      <hr className=" border-gray-300" />
    </div>
  );
};

export default Filters;
