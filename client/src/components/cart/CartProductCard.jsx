import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  MdOutlineStar,
  MdShoppingCart,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { manageCart } from "@redux";
import { useCartState } from "@hooks";

const CartProductCard = ({
  _id,
  name,
  price,
  brand,
  reviews,
  image_urls,
  available_sizes,
}) => {
  const dispatch = useDispatch();

  const [quantityAndSize, setQuantityAndSize] = useState({
    quantity: 1,
    size: "",
  });

  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    setQuantityAndSize((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (action) => {
    setQuantityAndSize((prev) => {
      const newQuantity =
        action === "increment"
          ? prev.quantity + 1
          : Math.max(1, prev.quantity - 1);

      return { ...prev, quantity: newQuantity };
    });
  };

  const handleAddToCartClick = (e, productId) => {
    e.stopPropagation();
    dispatch(manageCart(productId));
  };

  const { cart } = useCartState();
  const isInCart = cart.some(({ _id: productId }) => productId === _id);

  return (
    <div
      key={_id}
      className="w-[450px] max-md:w-[320px] h-auto flex shadow-small gap-4 rounded-md pl-2 relative"
    >
      <img
        src={image_urls[0]}
        alt={name}
        className="h-auto w-[120px] max-md:w-[80px] max-md:h-[100px] max-md:my-auto"
      />

      <div className="my-2">
        <p className="text-lg font-semibold max-md:text-base"> {name}</p>
        <p className="font-semibold max-md:text-sm"> {brand} </p>
        <p className="font-semibold text-lg my-1 max-md:text-base">
          €{price.value}
        </p>

        <div className="flex items-center max-md:text-sm">
          {Array.from({ length: reviews.rating }).map((_, i) => (
            <MdOutlineStar className="text-gray-800" key={i} />
          ))}{" "}
          <span className="pl-1 text-sm">({reviews.count}) </span>
        </div>

        <div className="flex justify-between w-[270px] max-md:w-full max-md:gap-4 mt-1">
          <select
            name="size"
            className=" cursor-pointer border my-1 max-md:text-sm"
            value={quantityAndSize?.size}
            onChange={handleSizeChange}
          >
            <option value="">Choose Size</option>
            {available_sizes.map((size) => (
              <option key={size} value={size} className="cursor-pointer">
                {size}
              </option>
            ))}
          </select>

          <div className="flex justify-center gap-1">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-[10px] pb-[3px] border rounded hover:bg-gray-200 text-xl max-md:text-sm"
            >
              -
            </button>
            <input
              name="quantity"
              type="text"
              placeholder="1"
              numeric="true"
              className=" w-6 text-center max-md:text-sm"
              value={quantityAndSize?.quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="px-2 pb-[1px] border rounded hover:bg-gray-200 text-lg max-md:text-sm"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div
        className=" bg-white rounded-sm w-7 h-7 shadow text-base flex items-center justify-center absolute right-0 cursor-pointer"
        onClick={(e) => handleAddToCartClick(e, _id)}
      >
        {isInCart ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
      </div>
    </div>
  );
};

export default CartProductCard;
