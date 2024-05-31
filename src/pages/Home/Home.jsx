import React from "react";
import "./home.css";
import { Image } from "react-bootstrap";

import SuperSudaWeek from "../../images/super-sauda-week.png";

import ControlledCarousel from "../../components/Home/Carousel/Carousel";
import { categories, flashSale, forYou } from "../../constants/Home/home";
import ProductPriceCard from "../../shared/ProductPriceCard/ProductPriceCard";
import Categories from "../../components/Home/Categories/Categories";
import FeatureHeading from "../../components/Home/FeatureHeading/FeatureHeading";
import FlashSale from "../../components/Home/FlashSale/FlashSale";
import ForYou from "../../components/Home/ForYou/ForYou";
import ProductCategories from "../../components/Home/ProductCategories/ProductCategories";

const Home = () => {
  return (
    <div class="container home-first">
      <div class="row">
        <Categories />
        <div class="col-12 col-lg-9 carousel-container p-0">
          <div class="text-white">
            <ControlledCarousel />
          </div>
        </div>
      </div>
      <FeatureHeading />

      <div className="super-soda-week">
        <Image src={SuperSudaWeek} />
      </div>

      <ProductCategories />

      <FlashSale />

      <ForYou />

      <div className="load-more d-flex justify-content-center">
        <button className="load-more-btn">Load Mode</button>
      </div>
    </div>
  );
};

export default Home;
