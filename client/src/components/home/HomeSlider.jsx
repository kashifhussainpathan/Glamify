// import Slider from "react-slick";
import React, { useEffect, useState } from "react";

import { sliderImage1 } from "../../assets";
import { sliderImage2 } from "../../assets";
import { sliderImage3 } from "../../assets";
import { sliderImage4 } from "../../assets";
import { sliderImage5 } from "../../assets";

const HomeSlider = () => {
  const slides = [
    sliderImage2,
    sliderImage1,
    sliderImage3,
    sliderImage4,
    sliderImage5,
  ];
  const [prevSlide, setPrevSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="w-90 sm:w-90 md:w-90 lg:w-85 mx-auto mt-4 overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
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
      <div className="flex justify-center mt-2">
        {slides.map((_, index) => (
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
