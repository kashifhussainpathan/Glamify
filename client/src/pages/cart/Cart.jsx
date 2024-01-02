import React from "react";

import {
  OrderSummary,
  CartCardLoader,
  CartProductCard,
  OrderSummaryLoader,
} from "@components";
import { useCartState } from "@hooks";

const Cart = () => {
  const { cart, getCartProductsStatus } = useCartState();

  return (
    <div
      className={`flex justify-center  flex-wrap gap-8 my-10 ${
        cart?.length < 2 ? "items-center h-[55vh] max-md:h-auto" : "items-start"
      }`}
    >
      <div className="flex flex-col gap-4">
        {getCartProductsStatus === "loading" ? (
          <CartCardLoader />
        ) : (
          cart?.map((product) => (
            <CartProductCard {...product} key={product._id} />
          ))
        )}
      </div>

      <div>
        {!cart?.length && getCartProductsStatus !== "loading" && (
          <div className="text-center my-6">
            <p>Your shopping cart is currently empty.</p>
          </div>
        )}

        {getCartProductsStatus === "loading" ? (
          <OrderSummaryLoader />
        ) : (
          <OrderSummary cart={cart} />
        )}
      </div>
    </div>
  );
};

export default Cart;
