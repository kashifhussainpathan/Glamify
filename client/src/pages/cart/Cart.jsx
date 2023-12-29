import React from "react";
import { useSelector } from "react-redux";

import { CartLoader, CartProductCard, OrderSummary } from "@components";

const Cart = () => {
  const { cart, status } = useSelector(({ cart }) => cart);

  return (
    <div
      className={`flex justify-center  flex-wrap gap-8 my-10 ${
        cart?.length < 2 ? "items-center h-[55vh] max-md:h-auto" : "items-start"
      }`}
    >
      <div className="flex flex-col gap-4">
        {status === "loading" ? (
          <CartLoader />
        ) : (
          cart?.map((product) => (
            <CartProductCard {...product} key={product._id} />
          ))
        )}
      </div>

      <div className={`${!cart?.length ? "h-[50vh] max-md:h-auto" : ""}`}>
        {!cart?.length && (
          <div className="text-center my-4"> Your cart is Empty. </div>
        )}
        {status !== "loading" && <OrderSummary cart={cart} />}
      </div>
    </div>
  );
};

export default Cart;
