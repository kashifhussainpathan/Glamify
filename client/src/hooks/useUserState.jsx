import { useSelector } from "react-redux";

const useUserState = () => {
  return useSelector(({ user }) => user);
};

export default useUserState;
