import React, { useState } from "react";
import "./product.css";
import { Image } from "react-bootstrap";
import ShareIcon from "../../images/share-icon.png";
import MinusIcon from "../../images/minus-icon.png";
import PlusIcon from "../../images/plus-icon.png";
import TooltipIcon from "../../images/tool-tip.png";
import LocationIcon from "../../images/location-icon.png";

import DeleveiryIcon from "../../images/deleviery-item-icon.png";
import CashIcon from "../../images/cash-icon.png";
import ChatIcon from "../../images/chat-icon.png";


const Product = () => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <div className="container bradcrumb">
        <p>{`Watches Sunglasses Jewellery > Watches > Men > Sports > Led Watch Electronic Button Glass Mirrors Unicorn LED Wristwatch For Men Women Waterproof Children's Sports Watch`}</p>
      </div>

      <div class="container product-main-card">
        <div class="row">
          <div class="product-pic-card mb-3 p-0">
            <div class="item-gallery" data-spm="gallery">
              <div class="gallery-preview-panel">
                <div class="gallery-preview-panel__content">
                  <img
                    class="gallery-preview-panel__image"
                    alt="Led Watch Electronic Button Glass Mirrors Unicorn LED Wristwatch For Men Women Waterproof Children's Sports Watch"
                    src="https://static-01.daraz.pk/p/4f95ff023d23ca7468aab6136322e566.jpg_750x750.jpg_.webp"
                  />
                </div>
                <div class="tag-img-box"></div>
              </div>
              <div class="next-slick next-slick-outer next-slick-horizontal">
                <div
                  draggable="true"
                  class="next-slick-inner next-slick-initialized"
                >
                  <div class="next-slick-list">
                    <div class="next-slick-track">
                      <div
                        class="next-slick-slide next-slick-active item-gallery__thumbnail item-gallery__thumbnail-video"
                        daraz_pdp_gallery_tpp_track="gallery"
                        main_image_number="1"
                        type="video"
                        data-index="0"
                        tabindex="-1"
                        data-aplus-ae="x1_b23802f"
                        data-spm-anchor-id="a2a0e.pdp.gallery.i0.e6f669b7wdhD9Y"
                      >
                        <div class="item-gallery__image-wrapper">
                          <img
                            src="https://laz-img-cdn.alicdn.com/tfs/TB1oP2bbQvoK1RjSZFNXXcxMVXa-300-200.png"
                            class="item-gallery__video-icon"
                            name="lazada-ic_video"
                          />
                        </div>
                      </div>
                      <div
                        class="next-slick-slide next-slick-active item-gallery__thumbnail"
                        daraz_pdp_gallery_tpp_track="gallery"
                        main_image_number="2"
                        type="img"
                        data-index="1"
                        tabindex="-1"
                        data-aplus-ae="x2_5bada9ae"
                        data-spm-anchor-id="a2a0e.pdp.gallery.i1.e6f669b7wdhD9Y"
                      >
                        <div class="item-gallery__image-wrapper">
                          <img
                            class="pdp-mod-common-image item-gallery__thumbnail-image"
                            alt="Led Watch Electronic Button Glass Mirrors Unicorn LED Wristwatch For Men Women Waterproof Children's Sports Watch"
                            src="https://static-01.daraz.pk/p/593a6befc611b3b074834cc6bdb1c72c.jpg_100x100.jpg_.webp"
                          />
                        </div>
                      </div>
                      <div
                        class="next-slick-slide next-slick-active item-gallery__thumbnail item-gallery__thumbnail_state_active"
                        daraz_pdp_gallery_tpp_track="gallery"
                        main_image_number="3"
                        type="img"
                        data-index="2"
                        tabindex="-1"
                        data-aplus-ae="x3_6621d4aa"
                        data-spm-anchor-id="a2a0e.pdp.gallery.i2.e6f669b7wdhD9Y"
                      >
                        <div class="item-gallery__image-wrapper">
                          <img
                            class="pdp-mod-common-image item-gallery__thumbnail-image"
                            alt="Led Watch Electronic Button Glass Mirrors Unicorn LED Wristwatch For Men Women Waterproof Children's Sports Watch"
                            src="https://static-01.daraz.pk/p/4f95ff023d23ca7468aab6136322e566.jpg_100x100.jpg_.webp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="none"
                    class="next-slick-arrow next-slick-prev outer medium horizontal disabled"
                  >
                    <i class="next-icon next-icon-arrow-left next-icon-medium"></i>
                  </div>
                  <div
                    data-role="none"
                    class="next-slick-arrow next-slick-next outer medium horizontal disabled"
                  >
                    <i class="next-icon next-icon-arrow-right next-icon-medium"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-detail-card mb-3 product-detail">
            <h3 className="mt-3">
              Led Watch Electronic Button Glass Mirrors Unicorn LED Wristwatch
              For Men Women Waterproof Children's Sports Watch
            </h3>

            <div className="rating-section d-flex justify-content-between">
              <div className="rating d-flex">
                <Image
                  src={
                    "https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                  }
                />
                <Image
                  src={
                    "https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                  }
                />
                <Image
                  src={
                    "https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                  }
                />
                <Image
                  src={
                    "https://laz-img-cdn.alicdn.com/tfs/TB1yQX4Ah9YBuNjy0FfXXXIsVXa-30-30.png"
                  }
                />
                <Image
                  src={
                    "	https://laz-img-cdn.alicdn.com/tfs/TB1Nx3Lz3mTBuNjy1XbXXaMrVXa-30-30.png"
                  }
                />
                <span>23 Ratings</span>
              </div>
              <div className="favrt-share d-flex">
                <Image src={ShareIcon} />
                <Image
                  className="heart-icon-product"
                  src={
                    "https://img.alicdn.com/imgextra/i4/O1CN01AIpdkU1r1ZEKDP8LG_!!6000000005571-55-tps-17-16.svg"
                  }
                />
              </div>
            </div>
            <div className="brand-section ">
              <span className="brand me-1">Brand:</span>
              <a href="">No Brand | </a>
              <a href="">More Watches from No Brand</a>
            </div>

            {/* <br /> */}

            <div className="price-section">
              <span className="total-price">Rs. 199</span>
              <div class="origin-block">
                <span class=" pdp-price pdp-price_type_deleted pdp-price_color_lightgray pdp-price_size_xs">
                  Rs. 700
                </span>
                <span class="pdp-product-price__discount">-72%</span>
              </div>
            </div>

            <div id="module_promotion_tags" class="pdp-block module">
              <div class="pdp-mod-product-info-section pdp-mod-promotion-tags">
                <h6 class="section-title">Promotions</h6>
                <div class="section-content">
                  <div class="tag-list" data-spm="promotion_bar">
                    <div
                      class="promotion-tag-item  has-arrow"
                      data-spm="product_promotion"
                    >
                      <div
                        class="tag-name"
                        exp-tracking="product_promotion_exposure"
                        data-spm="product_promotion"
                        data-aplus-ae="x1_7068037f"
                        data-spm-anchor-id="a2a0e.pdp.product_promotion.product_promotion.e6f669b7JOn56p"
                      >
                        Min. Spend Rs. 499 Capped at Rs. 100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="module_sku-select" class="pdp-block module">
              <div class="sku-selector">
                <div class="sku-prop">
                  <div class="pdp-mod-product-info-section sku-prop-selection">
                    <h6 class="section-title">Watch Strap Color</h6>
                    <div class="section-content">
                      <div class="sku-prop-content-header">
                        <span class="sku-name ">4</span>
                      </div>
                      <div class="sku-prop-content">
                        <span class="sku-variable-img-wrap-selected">
                          <div class="pdp-common-image sku-variable-img">
                            <div class="lazyload-wrapper ">
                              <img
                                class="image"
                                src="https://static-01.daraz.pk/p/4f95ff023d23ca7468aab6136322e566.jpg_80x80.jpg_.webp"
                              />
                            </div>
                          </div>
                          <span class="lzd-svg-icon lzd-svg-icon_name_lazada-ic-option-check sku-variable-img-icon">
                            <svg
                              class="lazadaicon lazada-icon svgfont "
                              aria-hidden="true"
                            ></svg>
                          </span>
                        </span>
                        <span class="sku-variable-img-wrap">
                          <div class="pdp-common-image sku-variable-img">
                            <div class="lazyload-wrapper ">
                              <img
                                class="image"
                                src="https://static-01.daraz.pk/p/593a6befc611b3b074834cc6bdb1c72c.jpg_80x80.jpg_.webp"
                              />
                            </div>
                          </div>
                        </span>
                        <span class="sku-variable-img-wrap">
                          <div class="pdp-common-image sku-variable-img">
                            <div class="lazyload-wrapper ">
                              <img
                                class="image"
                                src="https://static-01.daraz.pk/p/8f38b969d371d4821e55c01f96d1b390.jpg_80x80.jpg_.webp"
                              />
                            </div>
                          </div>
                        </span>
                        <span class="sku-variable-img-wrap">
                          <div class="pdp-common-image sku-variable-img">
                            <div class="lazyload-wrapper ">
                              <img
                                class="image"
                                src="https://static-01.daraz.pk/p/8de9b00973536cdc4fa499146ebacf24.jpg_80x80.jpg_.webp"
                              />
                            </div>
                          </div>
                        </span>
                        <span class="sku-variable-img-wrap">
                          <div class="pdp-common-image sku-variable-img">
                            <div class="lazyload-wrapper ">
                              <img
                                class="image"
                                src="https://static-01.daraz.pk/p/c1ffd3cc03fb56f32f3eb59c27d35d64.jpg_80x80.jpg_.webp"
                              />
                            </div>
                          </div>
                        </span>
                        <span class="sku-variable-img-wrap">
                          <div class="pdp-common-image sku-variable-img">
                            <div class="lazyload-wrapper ">
                              <img
                                class="image"
                                src="https://static-01.daraz.pk/p/e24ec5bc0e30769937e3ee933b0df860.jpg_80x80.jpg_.webp"
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span class="pdp_center_target"></span>
                </div>
              </div>
            </div>

            <div className="quantity-section mt-2 w-50 d-flex justify-content-between">
              <span>Quantity</span>
              <Image src={MinusIcon} />

              <span>{counter}</span>
              <Image src={PlusIcon} />
            </div>

            <div id="module_add_to_cart" class="pdp-block module">
              <div class="pdp-cart-concern">
                <button class="add-to-cart-buy-now-btn  pdp-button pdp-button_type_text pdp-button_theme_bluedaraz pdp-button_size_xl">
                  <span class="pdp-button-text">
                    <span class="">Buy Now</span>
                  </span>
                </button>
                <button class="add-to-cart-buy-now-btn  pdp-button pdp-button_type_text pdp-button_theme_orange pdp-button_size_xl">
                  <span class="pdp-button-text">
                    <span class="">Add to Cart</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
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
                    <div class="seller-info-value gray-text">
                      Not enough data
                    </div>
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
        </div>
      </div>
    </>
  );
};

export default Product;
