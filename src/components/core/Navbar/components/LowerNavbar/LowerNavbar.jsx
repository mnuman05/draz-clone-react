import React, { useState } from "react";

import "./Lowernavbar.css";
import { Dropdown, Image } from "react-bootstrap";
import { IoPersonOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Sidebar from "../Sidebar";
import { PiShoppingCartSimple } from "react-icons/pi";
import LoginIcon from "../../../../../images/login-icon.png";
import Earth from "../../../../../images/earth.png";
import Cart from "../../../../../images/cart.png";
import NavLine from "../../../../../images/nav-line.png";


const LowerNavbar = () => {
  return (
    <div className="lower-nav">
      <div className="logo-bar-content header-content d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Sidebar />
          <a
            className="logo nav-draz-logo"
            href="//www.daraz.pk"
            data-spm="dhome"
          >
            <img
              src="//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
              alt="Daraz"
            />
          </a>
          <div className="d-none d-md-flex categories-dropdown d-flex justify-content-center">
            <a href="">Categories</a>
            <RiArrowDropDownLine />
          </div>
        </div>

        <div className="lower-nav-search d-none d-md-block">
          <input type="text" className="" />
        </div>

        <div className="d-flex align-items-center mb-2 me-2 me-md-0 justify-content-lg-evenly">
          <div className="login-btn ms-3 d-flex hover-effect">
            <Image src={LoginIcon} />
            <span
              className="mt-2"
              style={{
                marginTop: "7px",
                marginLeft: "0",
              }}
            >
              Login
            </span>
          </div>
          <div className="nav-line">
            <Image
              src={NavLine}
            />
          </div>
          <div className="text-nowrap login-btn sign-up">
            <span>Sign Up</span>
          </div>
          <div className="nav-earth-icon d-none d-md-block ms-3 login-btn d-flex justify-content-center align-items-center">
            <Image
              src={Earth}
              style={{
                display: "inline-block",
              }}
            />
          </div>
          <div className="cart-image">
            <Image src={Cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerNavbar;
