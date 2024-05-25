import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <button
        className={`d-block d-md-none text-white`}
        onClick={() => setSidebar(true)}
      >
        <GiHamburgerMenu size={30} />
      </button>
      <div
        onClick={() => setSidebar(false)}
        className={`${
          sidebar ? "d-block" : "d-none"
        } w-100 h-100 z-2 position-absolute top-0 bottom-0 start-0 end-0 bg-primary opacity-50`}
      ></div>
      <aside
        className={`${
          sidebar ? "d-block" : "d-none"
        } w-50 h-100 z-3 position-absolute top-0 start-0 bg-secondary`}
      >
        <ul>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
        </ul>
      </aside>
    </>
  );
}
