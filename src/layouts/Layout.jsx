import React, { useState } from "react";
// import "./css/home.css";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import Header from "../components/core/Navbar/Header";
import Footer from "../components/core/Footer/Footer";
// import Sidebar from "../components/Sidebar/Sidebar.jsx";
// import { LARGE_SIDEBAR_WIDTH, SMALL_SIDEBAR_WIDTH } from "../config/index.js";
// import "../pages/Home/css/home.css";
import './layout.css'

function Layout() {
    console.log("cine");
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [sidebarWidth, setSidebarWidth] = useState(SMALL_SIDEBAR_WIDTH);

//   const handleSidebarToggle = () => {
//     if (window.innerWidth >= 992) {
//       setSidebarWidth(
//         sidebarWidth === LARGE_SIDEBAR_WIDTH
//           ? SMALL_SIDEBAR_WIDTH
//           : LARGE_SIDEBAR_WIDTH
//       );
//     } else {
//       setShowSidebar(!showSidebar);
//     }
//   };

  return (
    <div className="main">
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
