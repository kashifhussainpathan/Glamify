import { useSelector } from "react-redux";

const useFiltersState = () => {
  return useSelector(({ filters }) => filters);
};

export default useFiltersState;
