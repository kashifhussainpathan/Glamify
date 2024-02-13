import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {getCartProductsStatus === "loading" ? (
            <CartCardLoader />
          ) : (
            cart?.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <CartProductCard {...product} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
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
