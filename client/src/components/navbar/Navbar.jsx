import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { BiCartAlt, BiHomeAlt2 } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

const Navbar = () => {
  const user = useSelector(({ user }) => user?.currentUser);

  return (
    <div className="flex items-center justify-between shadow-md text-text-color h-[10vh] bg-white px-20 sticky top-0 z-50">
      <div>
        <NavLink to="/" className="font-bold text-3xl">
          Glamify
        </NavLink>
      </div>

      <div className="flex gap-4 text-[1.3rem] font-medium">
        <NavLink to="/men">Men</NavLink>

        <NavLink to="/women">Women</NavLink>
      </div>

      <div className="flex items-center gap-6 text-[1.7rem]">
        <NavLink to="/" className="text-text-color">
          <BiHomeAlt2 />
        </NavLink>

        <NavLink to="/products" className="text-text-color">
          <AiOutlineShopping />
        </NavLink>

        <NavLink to="/cart" className="text-text-color">
          <BiCartAlt />
        </NavLink>

        <NavLink to="/profile" className="text-text-color">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="user profile picture"
              className="h-6 w-6 rounded-full"
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
