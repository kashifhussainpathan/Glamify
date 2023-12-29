import { useSelector } from "react-redux";

const useCartState = () => {
  return useSelector(({ cart }) => cart);
};

export default useCartState;
