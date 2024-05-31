import React from "react";
import { Image } from "react-bootstrap";
import TooltipIcon from "../../../images/tool-tip.png";
import LocationIcon from "../../../images/location-icon.png";

import DeleveiryIcon from "../../../images/deleviery-item-icon.png";
import CashIcon from "../../../images/cash-icon.png";
import ChatIcon from "../../../images/chat-icon.png";


const ProductLocationCard = () => {
  return (
    <div class="product-location-card mb-3">
      <div id="module_seller_delivery" class="pdp-block module">
        <div data-spm="delivery_options">
          <div class="delivery">
            <div class="delivery-header">
              <div class="delivery-header__title">Delivery</div>
              <div class="delivery-header__tooltip">
                <Image src={TooltipIcon} />
              </div>
            </div>
            <div class="delivery__header">
              <div class="location delivery__location">
                <div class="location__current">
                  <div class="location__body">
                    <Image src={LocationIcon} />
                    <div class="location__address">
                      Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                    </div>
                    <div class="location__link-change">
                      <a class="location-link location-link_size_xs automation-location-link-change">
                        CHANGE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="delivery__content">
              <div class="delivery__options">
                <div class="delivery__option">
                  <div class="delivery-option-item delivery-option-item_type_standard">
                    <div class="delivery-option-item__body">
                      <Image src={DeleveiryIcon} />
                      <div class="delivery-option-item__info">
                        <div class="delivery-option-item__title">
                          <span style={{ fontWeight: "600" }}>
                            Standard Delivery{" "}
                          </span>
                          <span class="delivery-option-item__info_small">
                            3 Jun - 8 Jun
                          </span>
                        </div>
                        <div class="delivery-option-item__time">
                          4 - 9 day(s)
                        </div>
                      </div>
                      <div class="delivery-option-item__shipping-fee">
                        Rs. 145
                      </div>
                    </div>
                  </div>
                </div>
                <div class="delivery__option">
                  <div class="delivery-option-item delivery-option-item_type_COD">
                    <div class="delivery-option-item__body">
                      <Image src={CashIcon} />
                      <div class="delivery-option-item__info">
                        <div class="delivery-option-item__title">
                          <span>Cash on Delivery Available</span>
                        </div>
                      </div>
                      <div class="delivery-option-item__shipping-fee"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="module_seller_info" class="pdp-block module">
        <div class="seller-container" data-spm="seller">
          <div class="seller-name-retail">
            <div class="seller-name__wrapper">
              <div class="seller-name__title">Sold by</div>
              <div class="seller-name__detail" data-spm="seller">
                <a
                  class="pdp-link pdp-link_size_l pdp-link_theme_black seller-name__detail-name"
                  target="_self"
                  href="//www.daraz.pk/shop/modern-watch-company/?itemId=426753086&amp;channelSource=pdp"
                >
                  Modern watch company
                </a>
              </div>
            </div>
            <div class="seller-im-wrapper">
              <span class="seller-im-content">
                <span class="seller-im-icon">
                  <Image src={ChatIcon} />
                </span>
                <span>CHAT</span>
              </span>
            </div>
          </div>
          <div class="pdp-seller-info-pc">
            <div class="info-content">
              <div class="seller-info-title">Positive Seller Ratings</div>
              <div class="seller-info-value rating-positive ">78%</div>
            </div>
            <div class="info-content">
              <div class="seller-info-title">Ship on Time</div>
              <div class="seller-info-value ">94%</div>
            </div>
            <div class="info-content">
              <div class="seller-info-title">Chat Response Rate</div>
              <div class="seller-info-value gray-text">Not enough data</div>
            </div>
          </div>
          <div class="seller-link" data-spm="seller">
            <a
              class="pdp-link pdp-link_size_xs pdp-link_theme_blue"
              target="_self"
              href="//www.daraz.pk/shop/modern-watch-company/?itemId=426753086&amp;channelSource=pdp"
            >
              Visit Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLocationCard;
