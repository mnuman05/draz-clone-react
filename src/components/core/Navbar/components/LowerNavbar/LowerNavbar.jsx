import React, { useState } from "react";

import "./Lowernavbar.css";
import { Dropdown, Image } from "react-bootstrap";
import { IoPersonOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Sidebar from "../Sidebar";
import { PiShoppingCartSimple } from "react-icons/pi";
import LoginIcon from "../../../../../images/login-icon.png"
import Earth from "../../../../../images/earth.png";
import Cart from "../../../../../images/cart.png";




const LowerNavbar = () => {
  return (
    <div className="lower-nav">
      <div className="logo-bar-content header-content d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Sidebar />
          <a className="logo nav-draz-logo" href="//www.daraz.pk" data-spm="dhome">
            <img
              src="//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
              alt="Daraz"
            />
          </a>
          <div className="d-none d-md-flex categories-dropdown d-flex justify-content-center">
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
        </div>

        <div className="lower-nav-search d-none d-md-block">
          <input type="text" className="" />
        </div>

        <div className="d-flex align-items-center mb-2 me-2 me-md-0">
          <div className="login-btn ms-3 d-flex hover-effect">
            {/* <div className="d-none d-md-flex">
              <IoPersonOutline size={22} />
            </div> */}
            <Image src={LoginIcon} />
            <span className="mt-2">Login</span>
          </div>
          <div className="mx-3">
            <span className="text-light">|</span>
          </div>
          {/* <li class="">|</li> */}
          <div className="text-nowrap login-btn">
            <span>Sign Up</span>
          </div>
          <div className="d-none d-md-block ms-3 login-btn d-flex justify-content-center align-items-center">
            {/* <IoEarthOutline size={22} /> */}
            <Image src={Earth} />
            <button className="ms-1 language-btn">EN</button>
            <span class="down-arrow-lang mb-2 mr-1">⌄ </span>{" "}
          </div>
        </div>

        <div className="">
<Image src={Cart} />

        </div>

        {/* <div className="d-none d-md-block ms-3 lower-nav-cart"> */}
          {/* <div className="cart-btn">Cart</div> */}
          {/* <FiShoppingCart size={30} /> */}
          {/* <PiShoppingCartSimple />{" "} */}

          
        {/* </div> */}
      </div>
    </div>
  );
};

export default LowerNavbar;
