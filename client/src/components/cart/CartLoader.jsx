import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CartLoader = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-10 items-start">
      {/* Cart Product Card */}
      <div>
        <div className="w-[430px] h-auto flex shadow gap-4 rounded-sm pl-2 relative mb-4">
          <div className="my-2 pl-1">
            <Skeleton height={150} width={100} />
          </div>

          <div className="my-2">
            <p className="text-lg font-semibold">
              <Skeleton height={20} width={200} />
            </p>
            <p className="font-semibold">
              <Skeleton height={15} width={80} />
            </p>
            <p className="font-semibold text-lg">
              <Skeleton height={15} width={30} />
            </p>
            <div className="flex items-center my-1 gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton height={12} width={12} key={i} />
              ))}
              <span className="pl-1 text-sm">
                {" "}
                <Skeleton height={10} width={20} />
              </span>
            </div>

            <div className="flex justify-between w-[270px]">
              <Skeleton height={20} width={80} />

              <div className="flex justify-center gap-1">
                <button className="px-[10px] pb-[3px] border rounded hover:bg-gray-200 text-xl">
                  -
                </button>
                <input
                  name="quantity"
                  type="text"
                  placeholder="1"
                  numeric="true"
                  className=" w-6 text-center"
                />
                <button className="px-2 pb-[1px] border rounded hover:bg-gray-200 text-lg">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[430px] h-auto flex shadow gap-4 rounded-sm pl-2 relative mb-4">
          <div className="my-2 pl-1">
            <Skeleton height={150} width={100} />
          </div>

          <div className="my-2">
            <p className="text-lg font-semibold">
              <Skeleton height={20} width={200} />
            </p>
            <p className="font-semibold">
              <Skeleton height={15} width={80} />
            </p>
            <p className="font-semibold text-lg">
              <Skeleton height={15} width={30} />
            </p>
            <div className="flex items-center my-1 gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton height={12} width={12} key={i} />
              ))}
              <span className="pl-1 text-sm">
                {" "}
                <Skeleton height={10} width={20} />
              </span>
            </div>

            <div className="flex justify-between w-[270px]">
              <Skeleton height={20} width={80} />

              <div className="flex justify-center gap-1">
                <button className="px-[10px] pb-[3px] border rounded hover:bg-gray-200 text-xl">
                  -
                </button>
                <input
                  name="quantity"
                  type="text"
                  placeholder="1"
                  numeric="true"
                  className=" w-6 text-center"
                />
                <button className="px-2 pb-[1px] border rounded hover:bg-gray-200 text-lg">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[430px] h-auto flex shadow gap-4 rounded-sm pl-2 relative mb-4">
          <div className="my-2 pl-1">
            <Skeleton height={150} width={100} />
          </div>

          <div className="my-2">
            <p className="text-lg font-semibold">
              <Skeleton height={20} width={200} />
            </p>
            <p className="font-semibold">
              <Skeleton height={15} width={80} />
            </p>
            <p className="font-semibold text-lg">
              <Skeleton height={15} width={30} />
            </p>
            <div className="flex items-center my-1 gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton height={12} width={12} key={i} />
              ))}
              <span className="pl-1 text-sm">
                {" "}
                <Skeleton height={10} width={20} />
              </span>
            </div>

            <div className="flex justify-between w-[270px]">
              <Skeleton height={20} width={80} />

              <div className="flex justify-center gap-1">
                <button className="px-[10px] pb-[3px] border rounded hover:bg-gray-200 text-xl">
                  -
                </button>
                <input
                  name="quantity"
                  type="text"
                  placeholder="1"
                  numeric="true"
                  className=" w-6 text-center"
                />
                <button className="px-2 pb-[1px] border rounded hover:bg-gray-200 text-lg">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-4 bg-white rounded-md shadow w-[350px] h-fit">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          ORDER SUMMARY
        </h2>

        <div className="flex flex-col justify-between gap-2 mb-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <Skeleton height={60} width={50} />

              <div className="text-right">
                <p>
                  <Skeleton height={12} width={100} />
                </p>
                <p className="font-semibold">
                  <Skeleton height={12} width={50} />
                </p>
                <p>
                  Quantity: <Skeleton height={12} width={20} />
                </p>
              </div>
            </div>

            <hr />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <Skeleton height={60} width={50} />

              <div className="text-right">
                <p>
                  <Skeleton height={12} width={100} />
                </p>
                <p className="font-semibold">
                  <Skeleton height={12} width={50} />
                </p>
                <p>
                  Quantity: <Skeleton height={12} width={20} />
                </p>
              </div>
            </div>

            <hr />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <Skeleton height={60} width={50} />

              <div className="text-right">
                <p>
                  <Skeleton height={12} width={100} />
                </p>
                <p className="font-semibold">
                  <Skeleton height={12} width={50} />
                </p>
                <p>
                  Quantity: <Skeleton height={12} width={20} />
                </p>
              </div>
            </div>

            <hr />
          </div>
        </div>

        <div className="flex justify-between mb-2">
          <span className="font-semibold">Total Items:</span>
          <span>
            <Skeleton height={20} width={20} />
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Total Quantity:</span>
          <span>
            <Skeleton height={20} width={20} />
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Total Price:</span>
          <span>
            <Skeleton height={20} width={20} />
          </span>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartLoader;
