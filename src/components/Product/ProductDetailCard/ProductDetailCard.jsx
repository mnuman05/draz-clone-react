import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ShareIcon from "../../../images/share-icon.png";
import MinusIcon from "../../../images/minus-icon.png";
import PlusIcon from "../../../images/plus-icon.png";

const ProductDetailCard = () => {
      const [counter, setCounter] = useState(1);

  return (
    <div class="product-detail-card mb-3 product-detail">
      <h3 className="mt-3">
        Led Watch Electronic Button Glass Mirrors Unicorn LED Wristwatch For Men
        Women Waterproof Children's Sports Watch
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
  );
};

export default ProductDetailCard;
