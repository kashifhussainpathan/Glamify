import { useState } from "react";

const ProdctsDetailsLeft = ({ product }) => {
  const { image_urls } = product;

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className=" w-[330px] h-auto">
      {/* Big Image */}
      <div className="w-[full] shadow rounded-sm">
        <img
          src={
            selectedImage !== null ? image_urls[selectedImage] : image_urls[0]
          }
          alt={name}
          className="w-full max-md:w-[50%] max-md:mx-auto"
        />
      </div>

      {/* Image Previews */}
      <div className="w-full mx-auto mt-2">
        <div className="flex flex-wrap gap-6 justify-center">
          {image_urls?.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={name}
              className={`w-1/4 cursor-pointer mb-2 max-md:w-12 ${
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
