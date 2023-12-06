// import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";

import { sliderImage1 } from "../../../assets";
import { sliderImage2 } from "../../../assets";
import { sliderImage3 } from "../../../assets";
import { sliderImage4 } from "../../../assets";
import { sliderImage5 } from "../../../assets";

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
    <Box
      width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
      margin="auto"
      marginTop={10}
      overflow="hidden"
      position="relative"
    >
      <Box
        display="flex"
        transition={`transform 0.5s ease-in-out`}
        transform={`translateX(-${currentSlide * 100}%)`}
      >
        {slides.map((slide, index) => (
          <Box key={index} width="100%" flexShrink={0}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={slide}
            />
          </Box>
        ))}
      </Box>
      <Flex justifyContent="center" marginTop={2}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index === currentSlide ? "gray" : "#9ca3af",
              marginRight: "1rem",
              cursor: "pointer",
              height: "8px",
              width: "8px",
              borderRadius: "50%",
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default HomeSlider;
