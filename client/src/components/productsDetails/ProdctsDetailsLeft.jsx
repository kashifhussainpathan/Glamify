import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProdctsDetailsLeft = ({ product }) => {
  const { image_urls, name } = product;

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className=" w-[330px] h-auto">
      {/* Big Image */}
      <div className="w-[full] shadow-small rounded-md">
        <LazyLoadImage
          src={
            selectedImage !== null ? image_urls[selectedImage] : image_urls[0]
          }
          effect="blur"
          alt={name}
          className="w-full max-md:w-[50%] max-md:mx-auto"
        />
      </div>

      {/* Image Previews */}
      <div className="w-full mx-auto mt-2">
        <div className="grid grid-cols-3 place-items-center max:md:gap-1">
          {image_urls?.map((image, index) => (
            <LazyLoadImage
              key={image}
              src={image}
              alt="Image Alt"
              effect="blur"
              className={`w-[80px] cursor-pointer mb-2 max-md:w-12 md:inline ${
                selectedImage === index ? "border-2 border-slate-200" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProdctsDetailsLeft;
