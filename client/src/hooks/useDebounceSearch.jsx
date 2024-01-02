import { useDispatch } from "react-redux";
import { useState, useCallback, useEffect } from "react";

import { searchProductsAsync } from "@redux";

const useDebounceSearch = (delay = 400) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = useCallback(
    debounce((value) => {
      dispatch(searchProductsAsync(value));
    }, delay),
    [delay]
  );

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue, handleSearch]);

  return { searchValue, setSearchValue };
};

export default useDebounceSearch;
