import React, { useEffect, useRef, useState } from "react";

const FilterPanel = ({ children, openedFilters, filter }) => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const heightRef = useRef();

  useEffect(() => {
    const panelHeight = heightRef.current.clientHeight;

    setShowScrollbar(panelHeight > 500);
  }, [openedFilters, filter]);

  const isScrollbar = showScrollbar || filter === "brands";

  return (
    <div
      ref={heightRef}
      className={`px-1 transition-max-height duration-200 ease-in-out ${
        openedFilters.includes(filter)
          ? "max-h-[500px] mt-2 overflow-x-hidden"
          : "max-h-0 overflow-hidden"
      }`}
      style={{
        overflow: isScrollbar ? "scroll" : "hidden",
        overflowX: isScrollbar ? "hidden" : "",
      }}
    >
      {children}
    </div>
  );
};

export default FilterPanel;
