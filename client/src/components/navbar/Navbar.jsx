import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { useCartState } from "@hooks";
import { GiHamburgerMenu } from "react-icons/gi";
import { getProducts, removeFilters } from "@redux";
import { BiCartAlt, BiHomeAlt2 } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useFiltersState, useUserState, useProductsState } from "@hooks";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useCartState();
  const { filters } = useFiltersState();
  const { currentUser: user } = useUserState();
  const { currentPage: page } = useProductsState();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleGenderClick = (gender) => {
    navigate(`/products/${gender}`);
    dispatch(removeFilters());
    dispatch(getProducts({ page, gender, filters }));
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex items-center justify-between shadow-md text-text-color h-[10vh] bg-white px-20 sticky top-0 z-9999 max-md:relative max-md:px-6">
      <div>
        <NavLink to="/" className="font-bold text-3xl max-md:text-2xl">
          Glamify
        </NavLink>
      </div>

      <div className="flex gap-6 text-[1.3rem] font-medium max-md:text-base max-md:gap-3">
        <div
          onClick={() => handleGenderClick("men")}
          className="cursor-pointer"
        >
          Men
        </div>
        <div
          onClick={() => handleGenderClick("women")}
          className="cursor-pointer"
        >
          Women
        </div>
      </div>

      <div className="hidden max-md:block ">
        <GiHamburgerMenu onClick={toggleNav} />
      </div>

      <div
        className={`flex items-center gap-8 text-[1.7rem] max-md:absolute max-md:text-2xl max-md:flex-col max-md:top-16 max-md:shadow max-md:p-4 max-md:rounded transition-all transform ease-in-out duration-300 max-md:z-50 max-md:bg-slate-50 ${
          isNavOpen ? "max-md:right-[0]" : "max-md:hidden"
        }`}
      >
        <NavLink to="/" className="text-text-color">
          <BiHomeAlt2 />
        </NavLink>

        <NavLink to="/cart" className="text-text-color">
          <div className="relative">
            <BiCartAlt />
            <span className="absolute top-[-5px] right-[-10px] text-[.8rem]  bg-slate-900 text-slate-100 h-[1.2rem] w-[1.2rem] rounded-full flex justify-center items-center pr-[1px] max-md:h-4 max-md:w-4 max-md:pr-0">
              {cart.length}
            </span>
          </div>
        </NavLink>

        <NavLink to="/profile" className="text-text-color">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="user profile picture"
              className="h-7 w-7 rounded-full object-cover max-md:h-6 max-md:w-6"
            />
          ) : (
            <IoPersonCircleOutline className="text-text-color" />
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
