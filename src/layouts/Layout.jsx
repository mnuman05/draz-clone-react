import React, { useState } from "react";
// import "./css/home.css";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import Header from "../components/core/Navbar/Header";
import Footer from "../components/core/Footer/Footer";

import './layout.css'
import MessageBox from "../shared/MessageBox/MessageBox";

function Layout() {


  return (
    <div className="main">
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
      {/* <MessageBox /> */}
    </div>
  );
}

export default Layout;
