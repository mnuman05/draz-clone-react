import React from "react";
import "./home.css";
import { Image } from "react-bootstrap";

import SuperSudaWeek from "../../images/super-sauda-week.png";

import ControlledCarousel from "../../components/Home/Carousel/Carousel";
import { categories, flashSale, forYou } from "../../constants/Home/home";
import ProductPriceCard from "../../shared/ProductPriceCard/ProductPriceCard";
import Categories from "../../components/Home/Categories/Categories";
import FeatureHeading from "../../components/Home/FeatureHeading/FeatureHeading";

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
      {/* <Row className="mt-3 mb-3 feature-row">
        <Col
          xs={6}
          sm={4}
          md={2}
          className="d-flex align-items-center usp-items"
        >
          <Image
            src={
              "	https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png"
            }
          />
          <p className="fs-15 m-0 ms-2">Safe Payments</p>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={2}
          className="d-flex align-items-center usp-items p-0 nation-wide"
        >
          <Image
            src={
              "https://icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png"
            }
          />
          <p className="fs-15 m-0 ms-2">Nationwide Delivery</p>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={2}
          className="d-flex align-items-center usp-items p-0 free-nd-easy"
        >
          <Image
            src={
              "	https://icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png"
            }
          />
          <p className="fs-15 m-0">Free & Easy Returns</p>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={2}
          className="d-flex align-items-center p-0 usp-items best-price"
        >
          <Image
            src={
              "https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png"
            }
          />
          <p className="fs-15 m-0 ms-1">Best Price Guaranteed</p>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={2}
          className="d-flex align-items-center p-0 usp-items"
        >
          <Image
            src={
              "	https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png"
            }
          />
          <p className="fs-15 m-0 ms-1">100% Authentic Products</p>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={2}
          className="d-flex align-items-center daraz-verified"
        >
          <Image
            src={
              "	https://icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png"
            }
          />
          <p className="fs-15 m-0 ms-2">Daraz Verified</p>
        </Col>
      </Row> */}

      <div className="super-soda-week">
        <Image src={SuperSudaWeek} />
      </div>

      <div className="row">
        <div className="home-category-heading">
          <h3 className="home-category-title">Categories</h3>
        </div>

        <div className="category-card">
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://static-01.daraz.pk/p/381322b5ac1501d1066a888e352e01d9.jpg"
            />
            <Card.Body>
              <Card.Text>Wardrobe Organisers</Card.Text>
            </Card.Body>
          </Card> */}

          {categories.map((catg) => (
            <div
              key={catg.id}
              class="card-categories-li hp-mod-card-hover align-left"
            >
              <a
                class="card-categories-li-content"
                href="//www.daraz.pk/bedroom-clothes-storage/?up_id=381708404&amp;clickTrackInfo=e741ce06-8a80-4350-80a2-c8c8141d51f3__10000419__381708404__u2i__0.9459953657835023__platform__ANDROID__scm__1007.40350.322036.__brandID__39704__SellerID__6005014254038__IsHitHot__1__IfCart__0__IfOrder__0__IfLeafCatCart__0__IfLeafCatOrd__0__IfBrandCart__0__IfBrandOrd__0__IfCartSeller__0__IfOrdSeller__0__item_sold__0__GmvNow__0.0__item_day_sold__0__ctr__0.0__cvr__0.0__rank__0.0__322036__30350&amp;from=hp_categories&amp;item_id=381708404&amp;version=v2"
                exp-tracking="category"
                algo_scm=""
                trackinfo="e741ce06-8a80-4350-80a2-c8c8141d51f3__10000419__381708404__u2i__0.9459953657835023__platform__ANDROID__scm__1007.40350.322036.__brandID__39704__SellerID__6005014254038__IsHitHot__1__IfCart__0__IfOrder__0__IfLeafCatCart__0__IfLeafCatOrd__0__IfBrandCart__0__IfBrandOrd__0__IfCartSeller__0__IfOrdSeller__0__item_sold__0__GmvNow__0.0__item_day_sold__0__ctr__0.0__cvr__0.0__rank__0.0__322036__30350"
                clicktrackinfo="e741ce06-8a80-4350-80a2-c8c8141d51f3__10000419__381708404__u2i__0.9459953657835023__platform__ANDROID__scm__1007.40350.322036.__brandID__39704__SellerID__6005014254038__IsHitHot__1__IfCart__0__IfOrder__0__IfLeafCatCart__0__IfLeafCatOrd__0__IfBrandCart__0__IfBrandOrd__0__IfCartSeller__0__IfOrdSeller__0__item_sold__0__GmvNow__0.0__item_day_sold__0__ctr__0.0__cvr__0.0__rank__0.0__322036__30350"
                title="Wardrobe"
                organisers=""
                data-aplus-ae="x1_2268b5f6"
                data-spm-anchor-id="a2a0e.home.categories.1"
              >
                <div class="card-categories-image-container">
                  <img
                    class="image"
                    src={catg.link}
                    alt="Wardrobe Organisers"
                  />
                </div>
                <div class="card-categories-name">
                  <span class="text">{catg.name}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* flash sale  */}

      <div className="row mt-4">
        <div className="home-category-heading">
          <h3 className="flash-category-title">Flash Sale</h3>
        </div>

        {/* <div
          class="card-fs-content-header J_FSHeader"
          data-count-down-bg-color="#ff6801"
        >
          <div class="card-fs-content-header-left J_FSHeaderLeft">
            <div class="card-fs-content-header-left-status pull-left">
              <div class="fs-status-text">
                On Sale Now
              </div>
            </div>
            <div class="card-fs-content-header-left-timer pull-left">
              <div class="fs-timer-text pull-left" >
                Ending in
              </div>
              <div
                class="fs-timer-count pull-left"
                id="hours"
                // style="background-color: #ff6801; color: undefined;"
              >
                07
              </div>
              <div class="fs-timer-colon pull-left">
                {" "}
                :{" "}
              </div>
              <div
                class="fs-timer-count pull-left"
                id="minutes"
                // style="background-color: #ff6801; color: undefined;"
              >
                42
              </div>
              <div class="fs-timer-colon pull-left">
                {" "}
                :{" "}
              </div>
              <div
                class="fs-timer-count pull-left"
                id="seconds"
                // style="background-color: #ff6801; color: undefined;"
              >
                39
              </div>
            </div>
          </div>

          <a
            class="card-fs-content-button J_ShopMoreBtn"
            title="Flash Sale"
            // style="color: #f57224; border-color: #f57224"
            href="//www.daraz.pk/wow/i/pk/landingpage/flash-sale?wh_weex=true&amp;amp;wx_navbar_transparent=true&amp;amp;scm=1003.4.icms-zebra-5029921-2824236.OTHER_5360388823_2475751&amp;skuIds=379539881,450149270,257983022,430697260,445194260,439273051,201172033"
          >
            SHOP MORE
          </a>
        </div> */}

        <div className="category-card">
          {/* <div
            class="card-fs-content-header J_FSHeader"
            data-count-down-bg-color="#ff6801"
          >
            <div class="card-fs-content-header-left J_FSHeaderLeft">
              <div class="card-fs-content-header-left-status pull-left">
                <div class="fs-status-text">On Sale Now</div>
              </div>
              <div class="card-fs-content-header-left-timer pull-left">
                <div class="fs-timer-text pull-left">Ending in</div>
                <div
                  class="fs-timer-count pull-left"
                  id="hours"
                  // style="background-color: #ff6801; color: undefined;"
                >
                  07
                </div>
                <div class="fs-timer-colon pull-left"> : </div>
                <div
                  class="fs-timer-count pull-left"
                  id="minutes"
                  // style="background-color: #ff6801; color: undefined;"
                >
                  42
                </div>
                <div class="fs-timer-colon pull-left"> : </div>
                <div
                  class="fs-timer-count pull-left"
                  id="seconds"
                  // style="background-color: #ff6801; color: undefined;"
                >
                  39
                </div>
              </div>
            </div>

            <a
              class="card-fs-content-button J_ShopMoreBtn"
              title="Flash Sale"
              // style="color: #f57224; border-color: #f57224"
              href="//www.daraz.pk/wow/i/pk/landingpage/flash-sale?wh_weex=true&amp;amp;wx_navbar_transparent=true&amp;amp;scm=1003.4.icms-zebra-5029921-2824236.OTHER_5360388823_2475751&amp;skuIds=379539881,450149270,257983022,430697260,445194260,439273051,201172033"
            >
              SHOP MORE
            </a>
          </div> */}

          {/* <div className="flash-sale-card">
            <div class="card-fs-content-header-left-status pull-left d-inline-block">
              <div class="fs-status-text">On Sale Now</div>
            </div>

            <div className="sale-time w-100 d-flex justify-content-between">
              <div className="d-flex">
                <div className="ending-heading">Ending in</div>
              </div>
              <Button>clik</Button>
            </div>
          </div> */}

          <div className="d-flex flex-wrap justify-content-center">
            {flashSale.map((flssal) => (
              <ProductPriceCard
                id={flssal.id}
                link={flssal.link}
                name={flssal.name}
                currentPrice={flssal.currentPrice}
                previousPrice={flssal.previousPrice}
                percentageOff={flssal.percentageOff}
              />
            ))}
          </div>
        </div>
      </div>

      {/* just for you */}

      <div className="row mt-4">
        {/* <div className="home-category-heading"> */}
        <h3 className="for-you-category-title">Just For You</h3>
        {/* </div> */}
        <div className="category-card">
          <div
            class="d-flex flex-wrap justify-content-center"
            title="Flash Sale"
          >
            {forYou.map((fru) => (
              <ProductPriceCard
                id={fru.id}
                link={fru.link}
                name={fru.name}
                currentPrice={fru.currentPrice}
                previousPrice={fru.previousPrice}
                percentageOff={fru.percentageOff}
                width={189}
                height={325}
                rating={fru.stars}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="load-more d-flex justify-content-center">
        <button className="load-more-btn">Load Mode</button>
      </div>
    </div>
  );
};

export default Home;
