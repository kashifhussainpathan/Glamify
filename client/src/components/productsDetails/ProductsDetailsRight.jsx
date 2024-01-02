import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@ui";
import { manageCart } from "@redux";
import { BiCartAlt } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";
import { useToken, useCartState } from "@hooks";
import { HiOutlineArrowPath } from "react-icons/hi2";

const ProductsDetailsRight = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useToken();
  const { manageCartStatus, cart } = useCartState();

  const {
    _id,
    name,
    brand,
    gender,
    price,
    color,
    reviews,
    description,
    product_type,
    list_categories,
    available_sizes,
  } = product;

  const isInCart = cart?.some(({ _id: productId }) => productId === _id);

  const handleManageCart = (id) => {
    if (!token) {
      navigate("/profile");
    } else {
      dispatch(manageCart(id));
    }
  };

  return (
    <div className="ml-8 w-[380px] max-md:mt-4">
      <h2 className="text-2xl font-bold mb-2 max-md:text-xl">
        {name?.charAt(0).toUpperCase() + name?.slice(1)}
      </h2>

      {description && (
        <p className="text-gray-600 mb-4">{description?.split(".")[0]}.</p>
      )}

      <div className="mb-4">
        <span className="font-bold">Type:</span> {product_type}
      </div>

      <div className="mb-4">
        <span className="font-bold">Brand:</span> {brand}
      </div>

      <div className="mb-4">
        <span className="font-bold">Gender:</span> {gender}
      </div>

      <div className="mb-4">
        <span className="font-bold">Category:</span>{" "}
        {list_categories?.join(", ")}
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="font-bold">Color:</span>{" "}
        <div className="flex items-center gap-1">
          <span
            className="inline-block w-4 h-4 rounded-full border"
            style={{ backgroundColor: color?.filter_group?.split(";")[1] }}
          ></span>
          <span>{color.original_name}</span>
        </div>
      </div>

      <div className="mb-4 font-medium">
        <span className="font-bold">Price:</span> €{price.value}
      </div>

      <div className="mb-4">
        <span className="font-bold">Available Sizes:</span>{" "}
        <div className="flex flex-wrap gap-1 mt-1">
          {available_sizes?.map((size) => (
            <div className="px-3 py-2 shadow text-sm" key={size}>
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1 mb-4">
        <span className="font-bold">Reviews:</span>{" "}
        <div className="flex items-center">
          {reviews?.rating === 0 ? (
            <MdOutlineStar className="text-gray-800 pt-[1px]" />
          ) : (
            Array.from({ length: reviews.rating }).map((_, i) => (
              <MdOutlineStar className="text-gray-800 pt-[1px]" key={i} />
            ))
          )}
          <span className="pl-1 text-sm">({reviews?.count}) </span>
        </div>
      </div>

      <div className="mb-4 w-full">
        <div className="mb-4 w-full">
          {manageCartStatus === "loading" ? (
            <Button disabled>Loading...</Button>
          ) : (
            <Button onClick={() => handleManageCart(_id)}>
              {isInCart ? "Remove From Cart" : "Add To Cart"}
            </Button>
          )}
        </div>
      </div>

      {!description && (
        <div className=" text-gray-400 text-sm font-sans">
          <div className="flex items-center gap-2">
            <HiOutlineArrowPath className="text-base" />
            90 days Return Policy
          </div>
          <div className="flex items-center gap-2">
            <BiCartAlt className="text-base" /> Free Shipping For Loyalty Club
            Members
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetailsRight;
