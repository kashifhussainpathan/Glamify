import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProductsState } from "@hooks";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { currentPage } = useProductsState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentPage]);
};

export default ScrollToTop;
