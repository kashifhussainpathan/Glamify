import { useRef, useState } from "react";

const useProductsCorousel = () => {
  const tabContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = tabContainerRef.current;

    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return { tabContainerRef, handleScroll, setScrollPosition };
};

export default useProductsCorousel;
