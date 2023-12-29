import React from "react";

const HomeHeading = ({ children }) => {
  return (
    <div className="text-3xl font-bold my-8 mb-5 tracking-wide border-b-2 max-w-fit border-gray-500 text-center mx-auto max-md:text-lg">
      {children}
    </div>
  );
};

export default HomeHeading;
