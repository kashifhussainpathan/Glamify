import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  MdOutlineStar,
  MdShoppingCart,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { useCartState } from "@hooks";
import { getProduct, manageCart } from "@redux";

const ProductCard = ({ product }) => {
  const { _id, name, price, brand, reviews, image_urls } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCartClick = (e, productId) => {
    e.stopPropagation();
    dispatch(manageCart(productId));
  };

  const handleProductClick = (productId) => () => {
    navigate(`/productDetails/${productId}`);
    dispatch(getProduct(productId));
  };

  const { cart } = useCartState();

  const isInCart = cart?.some(({ _id: productId }) => productId === _id);
  const image = image_urls[0] || image_urls[1] || image_urls[2];

  return (
    <div
      className="w-[210px] p-2 shadow-small rounded-sm cursor-pointer my-1 max-md:w-[150px] "
      onClick={handleProductClick(_id)}
    >
      <div className="relative h-auto overflow-hidden">
        {image && (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full transition-all duration-2000 ease-out-expo hover:scale-110 max-md:w-[120px] max-md:mx-auto"
          />
        )}

        <div
          className=" bg-white rounded-sm w-7 h-7 shadow text-base flex items-center justify-center absolute top-1 right-1 max-md:w-5 max-md:h-5 max-md:text-sm max-md:top-0 max-md:right-0"
          onClick={(e) => handleAddToCartClick(e, _id)}
        >
          {isInCart ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
        </div>
      </div>

      <div className=" px-2 max-md:px-[2px]">
        <div className=" mt-2 text-sm font-semibold w-[180px] max-md:w-[140px] overflow-hidden overflow-ellipsis whitespace-nowrap max-md:text-[12px]">
          {brand.toUpperCase()}
        </div>
        <div className=" my-1 text-sm font-normal w-[180px] overflow-hidden overflow-ellipsis whitespace-nowrap max-md:text-[12px] max-md:w-[140px]">
          {name}
        </div>
      </div>

      <div className=" px-2 max-md:px-[2px]">
        <div className="flex items-center">
          {reviews.rating === 0 ? (
            <MdOutlineStar className="text-gray-800 pt-[1px] max-md:text-[12px] max-md:pt-0" />
          ) : (
            Array.from({ length: reviews.rating }).map((_, i) => (
              <MdOutlineStar
                className="text-gray-800 pt-[1px] max-md:text-[12px] max-md:pt-0"
                key={i}
              />
            ))
          )}
          <span className="pl-1 text-sm max-md:text-[12px]">
            ({reviews.count})
          </span>
        </div>
        <div className="font-semibold text-lg max-md:text-base">
          €{price.value}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
