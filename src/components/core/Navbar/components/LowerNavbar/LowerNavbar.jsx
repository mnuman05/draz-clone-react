import React from "react";

import "./Lowernavbar.css";
import { Dropdown } from "react-bootstrap";
import { IoPersonOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";





const LowerNavbar = () => {
  return (
    <div className="lower-nav first-primary">
      <div className="logo-bar-content header-content d-flex">
        <div className="lzd-logo-content">
          <a href="//www.daraz.pk" data-spm="dhome">
            <img
              src="//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
              alt="Daraz"
            />
          </a>
        </div>

        <div className="categories-dropdown d-flex justify-content-center">
          <a href="">Categories</a>
          {/* <span>⌄</span> */}
          <RiArrowDropDownLine />

          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>

        <div className="lower-nav-search ">
          <input type="text" className="" />
        </div>

        <div className="lower-nav-social d-flex justify-content-evenly align-items-center w-25 mb-2">
          <div className="login-btn d-flex">
            <IoPersonOutline />
            <span>Login</span>
          </div>
          <div className="">
            <span className="text-light">|</span>
          </div>
          {/* <li class="">|</li> */}
          <div className="login-btn">
            <span>Sign Up</span>
          </div>
          <div className="login-btn d-flex justify-content-center align-items-center">
            <IoEarthOutline />
            <button className="ms-1">EN</button>
            <span class="down-arrow-lang mb-2 mr-1">⌄</span>{" "}
          </div>
        </div>

        <div className="lower-nav-cart">
          {/* <div className="cart-btn">Cart</div> */}
          <FiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default LowerNavbar;
