import React from "react";

const FilterToggle = ({ children, onToggle, filter }) => {
  return (
    <div
      className="flex justify-between cursor-pointer"
      onClick={() => onToggle(filter)}
    >
      {children}
    </div>
  );
};

export default FilterToggle;
