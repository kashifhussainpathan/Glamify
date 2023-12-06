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
    <div className="flex navbar">
      <div>
        <NavLink to="/">
          <strong>Stylex </strong>{" "}
        </NavLink>
      </div>

      <div className="flex navbar-cloth-category">
        <NavLink to="/men">
          <span className="navbar-men-women">Men </span>
        </NavLink>

        <NavLink to="/women">
          <span className="navbar-men-women">Women </span>
        </NavLink>
      </div>

      <div className="flex navbar-items">
        <NavLink to="/">
          <BiHomeAlt2 />
        </NavLink>

        <NavLink to="/products">
          <AiOutlineShopping />
        </NavLink>

        <NavLink to="/cart">
          <BiCartAlt />
        </NavLink>

        <NavLink to="/profile">
          {user?.avatar ? (
            <img src={user.avatar} alt="user profile picture" />
          ) : (
            <IoPersonCircleOutline />
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
