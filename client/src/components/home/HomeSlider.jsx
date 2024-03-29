import React, { useEffect, useState } from "react";

import { sliderImage1 } from "@assets";
import { sliderImage2 } from "@assets";
import { sliderImage3 } from "@assets";

const HomeSlider = () => {
  const slides = [sliderImage1, sliderImage2, sliderImage3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="max-md:w-full mx-auto mt-4 xl:mt-1 overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              className="rounded-8 mx-auto w-full rounded"
              src={slide}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2 absolute z-10 bottom-2 left-[50%] transform translate-x-[-50%] max-md:hidden">
        {slides?.map((_, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "bg-gray-500" : "bg-gray-400"
            } mr-4 cursor-pointer h-2 w-2 rounded-full`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
