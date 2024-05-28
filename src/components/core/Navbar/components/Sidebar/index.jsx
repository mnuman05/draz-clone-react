import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import './sidebar.css'

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <button
        className={`d-block d-md-none text-white ms-3 me-3`}
        onClick={() => setSidebar(true)}
      >
        <GiHamburgerMenu size={30} />
      </button>
      <div
        onClick={() => setSidebar(false)}
        className={`${sidebar ? "d-block" : "d-none"} backdrop`}
      ></div>
      {/* <aside
        className={`${
          sidebar ? "d-block" : "d-none"
        } w-30 h-100 z-3 position-absolute top-0 start-0 sidebar d-flex flex-column align-items-center`}
      >
        <a className="logo mt-4" href="//www.daraz.pk" data-spm="dhome ">
          <img
            src="//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
            alt="Daraz"
          />
        </a>
        <ul className="text-white h-100 mb-0 mt-5">
          <li className="mb-2">Become a Seller</li>
          <li className="mb-2" >Daraz Affiliate Program</li>
          <li className="mb-2">Help & Support</li>
          <li className="mb-2">Daraz Logistics Partner</li>
        </ul>
      </aside> */}

      <aside
        className={`${
          sidebar ? "d-block" : "d-none"
        } w-30 h-100 z-3 position-absolute top-0 start-0 sidebar d-flex flex-column align-items-center`}
      >
        <a className="logo mt-4" href="//www.daraz.pk" data-spm="dhome ">
          <img
            src="//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
            alt="Daraz"
          />
        </a>
        <ul className="text-white h-100 mb-0 mt-5">
          <li className="mb-2">
            <a href="//www.daraz.pk/sell" className="anchor-link">
              Become a Seller
            </a>
          </li>
          <li className="mb-2">
            <a href="//www.daraz.pk/affiliate-program" className="anchor-link">
              Daraz Affiliate Program
            </a>
          </li>
          <li className="mb-2">
            <a href="//www.daraz.pk/help-support" className="anchor-link">
              Help & Support
            </a>
          </li>
          <li className="mb-2">
            <a href="//www.daraz.pk/logistics-partner" className="anchor-link">
              Daraz Logistics Partner
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
