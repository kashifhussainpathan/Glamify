import React, { useEffect, useRef, useState } from "react";

import { getProduct } from "@redux";
import { useDebounceSearch } from "@hooks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchComponent = ({ status, products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchDivRef = useRef(null);
  const { searchValue, setSearchValue } = useDebounceSearch();
  const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false);

  const handleSearchResultsClick = () => {
    setIsSearchResultsVisible(true);
  };

  const handleOutsideClick = (e) => {
    if (searchDivRef.current && !searchDivRef.current?.contains(e.target)) {
      setIsSearchResultsVisible(false);
      setSearchValue("");
    }
  };

  const handleSearchProductClick = (productId) => () => {
    navigate(`/productDetails/${productId}`);
    setIsSearchResultsVisible(false);
    dispatch(getProduct(productId));
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="block max-mdl:hidden relative" ref={searchDivRef}>
      <input
        type="text"
        placeholder="Search Products.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onClick={handleSearchResultsClick}
        className="border focus:outline-none rounded pl-3 py-1"
      />

      {isSearchResultsVisible && (
        <div className="absolute bg-white shadow rounded h-[200px] w-full overflow-scroll overflow-x-hidden">
          {status === "loading" ? (
            <p className="text-center h-[200px] flex items-center justify-center">
              Loading...
            </p>
          ) : products?.length > 0 ? (
            products?.map(({ _id, name, image_urls, brand }) => (
              <div
                key={_id}
                className="flex items-start border-b-2 mb-[1px] gap-1 cursor-pointer"
                onClick={handleSearchProductClick(_id)}
              >
                <img src={image_urls[0]} alt={name} className="h-12 w-12" />
                <div>
                  <p className="w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">
                    {name}
                  </p>
                  <p className="font-medium text-sm w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                    Brand: {brand}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center h-[200px] flex items-center justify-center">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
