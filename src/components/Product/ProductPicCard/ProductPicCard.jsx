import React from "react";

// import BackWArrow from "../../images/backword-arrow-icon.png";
// import ForWArrow from "../../images/upward-arrow-icon.png";

const ProductPicCard = () => {
  return (
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
          <div draggable="true" class="next-slick-inner next-slick-initialized">
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
            {/* <div
                    data-role="none"
                    class="next-slick-arrow next-slick-prev outer medium horizontal disabled"
                  >
                    <Image src={BackWArrow} />
                  </div>
                  <div
                    data-role="none"
                    class="next-slick-arrow next-slick-next outer medium horizontal disabled"
                  >
                    <Image src={ForWArrow} />
                  </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPicCard;
