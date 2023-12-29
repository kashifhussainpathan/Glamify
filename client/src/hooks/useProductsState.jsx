import { useSelector } from "react-redux";

const useProductsState = () => {
  return useSelector(({ products }) => products);
};

export default useProductsState;
