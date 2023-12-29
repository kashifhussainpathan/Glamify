import React from "react";
import { Button } from "../@ui";

const OrderSummary = ({ cart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price.value, 0);
  };

  const handlePlaceOrderClick = () => {
    console.log("Order placed!");
  };

  return (
    <div className="p-4 bg-white rounded-md shadow w-[350px] h-fit">
      <h2 className="text-2xl font-semibold mb-4 text-center">ORDER SUMMARY</h2>

      <div className="flex flex-col justify-between gap-2 mb-4">
        {cart?.map(({ _id, name, image_urls, price }) => (
          <div key={_id}>
            <div className="flex justify-between items-center mb-1">
              <img src={image_urls[0]} alt={name} className="w-[50px]" />

              <div className="text-right">
                <p>{name}</p>
                <p className="font-semibold">€{price.value}</p>
                <p>Quantity: 1</p>
              </div>
            </div>

            <hr />
          </div>
        ))}
      </div>

      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total Items:</span>
        <span>{cart?.length}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total Quantity:</span>
        <span>{cart?.length}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total Price:</span>
        <span>${getTotalPrice().toFixed(2)}</span>
      </div>

      <Button
        onClick={handlePlaceOrderClick}
        disabled={!cart?.length}
        className="w-full mt-2"
      >
        Place Order
      </Button>
    </div>
  );
};

export default OrderSummary;
