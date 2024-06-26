import React from "react";
import "./upperFooter.css";
import QRCode from "../../../../images/footer-qr.png";
import SocialIcons from "../../../../images/footer-social-icons.png";

import PakF from "../../../../images/pak-f.png";
import BngF from "../../../../images/bng-f.png";
import MynF from "../../../../images/myn-f.png";
import SrlF from "../../../../images/srl-f.png";
import NepF from "../../../../images/nep-f.png";

import Verified from "../../../../images/verified.png";
import PaymentCard from "../../../../images/payment-card.png";
import ATMCard from "../../../../images/atm-card.png";


import {
  Mastercard,
  Visa,
  Paypal,
  Maestro,
  Discover,
  Alipay,
  Hiper,
  Unionpay,
  Generic,
  Mir,
} from "react-payment-logos/dist/flat";
import { BsQrCode } from "react-icons/bs";
import { Image } from "react-bootstrap";

const UpperFooter = () => {
  return (
    <div className="upper-footer-main">
      <div className="footer w-80">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <h3 className="footer-title">Customer Care</h3>
              <ul className="footer-link-list ps-0 m-0">
                <li className="footer-li">
                  <a href="#">Help Center</a>
                </li>
                <li className="footer-li">
                  <a href="#">How to Buy</a>
                </li>
                <li className="footer-li">
                  <a href="#">Corporate & Bulk Purchasing</a>
                </li>
                <li className="footer-li">
                  <a href="#">Returns & Refunds</a>
                </li>
                <li className="footer-li">
                  <a href="#">Daraz Shop</a>
                </li>
                <li className="footer-li">
                  <a href="#">Contact Us</a>
                </li>
                <li className="footer-li">
                  <a href="#">Purchase Protection</a>
                </li>
                <li className="footer-li">
                  <a href="#">Daraz Pick up Points</a>
                </li>
              </ul>

              <h3 className="footer-title">Make Money With Us</h3>
              <ul className="footer-link-list ps-0 m-0">
                <li className="footer-li">
                  <a href="#">Daraz University</a>
                </li>
                <li className="footer-li">
                  <a href="#">Sell on Daraz</a>
                </li>
                <li className="footer-li">
                  <a href="#">Join Daraz Affiliate Program</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <h3 className="footer-title">Daraz</h3>
              <ul className="footer-link-list ps-0 m-0">
                <li className="footer-li">
                  <a href="#">About Us</a>
                </li>
                <li className="footer-li">
                  <a href="#">Digital Payments</a>
                </li>
                <li className="footer-li">
                  <a href="#">Daraz Donates</a>
                </li>
                <li className="footer-li">
                  <a href="#">Daraz Blog</a>
                </li>
                <li className="footer-li">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="footer-li">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="footer-li">
                  <a href="#">NTN Number : 4012118-6</a>
                </li>
                <li className="footer-li">
                  <a href="#">STRN Number : 1700401211818</a>
                </li>
                <li className="footer-li">
                  <a href="#">Online Shopping App</a>
                </li>
                <li className="footer-li">
                  <a href="#">Online Grocery Shopping</a>
                </li>
                <li className="footer-li">
                  <a href="#">Daraz Exclusive</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <h3 className="footer-title">Daraz International</h3>
              <ul className="footer-link-list ps-0 m-0">
                <div className="footer-flags d-flex">
                  <li className="footer-li w-50">
                    <a href="#" className="d-flex align-items-center">
                      <Image src={PakF} />
                      <span className="">Pakistan</span>
                    </a>
                  </li>
                  <li className="footer-li w-50">
                    <a href="#" className="d-flex align-items-center">
                      {/* <span class="fi fi-bd fis country-flag"></span> */}
                      <Image src={BngF} />
                      <span className="">Bangladesh</span>
                    </a>
                  </li>
                </div>
                <div className="footer-flags d-flex">
                  <li className="footer-li w-50">
                    <a href="#" className="d-flex align-items-center">
                      {/* <span class="fi fi-sr fis country-flag"></span> */}
                      <Image src={SrlF} />
                      <span className="">Sri Lanka</span>
                    </a>
                  </li>
                  <li className="footer-li w-50">
                    <a href="#" className="d-flex align-items-center">
                      {/* <span class="fi fi-mm fis country-flag"></span> */}
                      <Image src={MynF} />
                      <span className="">Myanmar</span>
                    </a>
                  </li>
                </div>
                <div className="footer-flags d-flex">
                  <li className="footer-li">
                    <a href="#" className="d-flex align-items-center">
                      {/* <span class="fi fi-np fis country-flag"></span> */}
                      <Image src={NepF} />
                      <span className="">Nepal</span>
                    </a>
                  </li>
                </div>
              </ul>

              {/* payment */}

              <h3 className="footer-title">Payment Methods</h3>
              <ul className="footer-link-list ps-0 m-0">

                <div className="footer-flags d-flex">
                  <div className="">
                    <Image src={ATMCard} />
                  </div>
                </div>
              </ul>

              <h3 className="footer-title">Verified by</h3>
              <ul className="footer-link-list ps-0 m-0">
                <div className="footer-flags d-flex">
                  {/* <Mir width={80} height={80} style={{ marginRight: "8px" }} /> */}
                  <Image src={Verified} />
                </div>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
              <h3 className="footer-title">Exclusive Deals and Offers!</h3>
              <ul className="footer-link-list ps-0 m-0 p-6">
                <div className="footer-qr d-flex mb-2">
                  <Image src={QRCode} />
                </div>
              </ul>

              <h3 className="footer-title">Follow Us</h3>
              <ul className="footer-link-list ps-0 m-0 p-6">
                <div className="footer-qr d-flex mb-2">
                  <Image src={SocialIcons} className="ms-3" />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
