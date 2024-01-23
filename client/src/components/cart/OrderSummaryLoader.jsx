import React from "react";
import { Skeleton } from "@ui";

const OrderSummaryLoader = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-small w-[350px] h-fit">
      <h2 className="text-2xl font-semibold mb-4 text-center">ORDER SUMMARY</h2>

      <div className="flex flex-col justify-between gap-2 mb-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <Skeleton classes="h-16 w-14" />

            <div className="flex flex-col gap-1 items-end">
              <Skeleton classes="h-3 w-32" />

              <Skeleton classes="h-4 w-12 my-1" />
              <div className="flex items-center justify-end gap-1">
                Quantity: <Skeleton classes="h-3 w-3" />
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <Skeleton classes="h-16 w-14" />

            <div className="flex flex-col gap-1 items-end">
              <Skeleton classes="h-3 w-32" />

              <Skeleton classes="h-4 w-12 my-1" />
              <div className="flex items-center justify-end gap-1">
                Quantity: <Skeleton classes="h-3 w-3" />
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>

      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total Items:</span>
        <span>
          <Skeleton classes="h-3 w-4" />
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total Quantity:</span>
        <span>
          <Skeleton classes="h-3 w-4" />
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total Price:</span>
        <span>
          <Skeleton classes="h-4 w-10" />
        </span>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummaryLoader;
