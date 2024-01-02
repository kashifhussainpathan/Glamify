import React from "react";
import HomeHeading from "./HomeHeading";

import man from "@assets/man.jpg";
import woman from "@assets/woman.jpg";

const Categories = () => {
  return (
    <div>
      <HomeHeading> CATEGORIES </HomeHeading>

      <section className="flex justify-evenly">
        <div className="w-auto h-auto relative">
          <img src={man} alt="man category" className="h-full w-full" />
          <h2 className="absolute bottom-1 left-2 text-gray-50 font-medium uppercase text-3xl shadow max-md:text-lg max-sm:text-base">
            Man
          </h2>
        </div>

        <div className="w-auto h-auto relative">
          <img src={woman} alt="woman category" className="h-full w-full" />
          <h2 className="absolute bottom-1 left-2 text-gray-50 font-medium uppercase text-3xl shadow max-md:text-lg max-sm:text-base">
            Woman
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Categories;
