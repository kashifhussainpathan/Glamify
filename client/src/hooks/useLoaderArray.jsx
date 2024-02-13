import { useMemo } from "react";

const useLoaderArray = () => {
  const loaderArray = useMemo(() => Array.from({ length: 20 }), []);

  return loaderArray;
};

export default useLoaderArray;
