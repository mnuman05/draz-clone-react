import React from 'react'
import ProductPriceCard from '../../../shared/ProductPriceCard/ProductPriceCard';
import { flashSale } from '../../../constants/Home/home';

const FlashSale = () => {
  return (
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
  );
}

export default FlashSale