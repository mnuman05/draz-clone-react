import React from 'react'
import { Image } from 'react-bootstrap';
import GroceryAndPets from "../../../images/grocery-and-pets.png";
import HealthAndBeauty from "../../../images/health-and-beauty.png";
import MenFashion from "../../../images/men-fashion.png";
import WomanFashion from "../../../images/woman-fashion.png";
import MotherAndBaby from "../../../images/mother-and-baby.png";
import HomeAndLifestyle from "../../../images/home-and-lifestyle.png";

import ElectronicDevices from "../../../images/electronic-devices.png";
import ElectronicAccessories from "../../../images/electronic-accssories.png";
import TvAndHome from "../../../images/tv-home.png";
import Sports from "../../../images/sports.png";
import Watch from "../../../images/watch.png";
import Automobile from "../../../images/automotive.png";

const Categories = () => {
  return (
    <div class="col-lg-3 home-filter-box ">
      <div class="text-white p-1 mt-1 single-filter-option">
        <a href="" className="d-flex">
          <Image src={GroceryAndPets} />
          <span className="filter-link-heading">Groceries & Pets</span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={HealthAndBeauty} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1">Health & Beauty</span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={MenFashion} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 ms-1">Men's Fashion</span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={WomanFashion} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 ms-2">Women's Fashion</span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={MotherAndBaby} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 mother-baby">
            Mother & Baby
          </span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={HomeAndLifestyle} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 ms-1">
            Home & Lifestyle
          </span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={ElectronicDevices} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 eletronic-heading elect-devi">
            Electronic Devices
          </span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={ElectronicAccessories} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 elect-asscc">
            Electronic Accessories
          </span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={TvAndHome} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 tv-home">
            TV & Home Appliances
          </span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={Sports} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 sport-outd">
            Sports & Outdoor
          </span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={Watch} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 watch-bag">
            Watches, Bags & Jewellery
          </span>
        </a>
      </div>

      <div class="text-white p-1 single-filter-option health-and-beauty">
        <a href="" className="d-flex">
          <Image src={Automobile} style={{ marginLeft: "3px" }} />
          <span className="filter-link-heading mt-1 ms-1">
            Automotive & Motorbike
          </span>
        </a>
      </div>
    </div>
  );
}

export default Categories