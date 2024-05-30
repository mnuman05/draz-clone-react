import React from 'react'
import { Image } from 'react-bootstrap';

const FeatureHeading = () => {
  return (
    <div className="features-section d-flex mt-4 mb-1 align-items-center p-2 justify-content-center">
      <div className="single-feature d-flex justify-content-center h-50 align-items-center me-3 usp-items flex-wr">
        <Image
          src={
            "	https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png"
          }
        />
        <p className="fs-15 m-0 ms-1 feature-heading">Safe Payments</p>
      </div>

      <div className="single-feature d-flex justify-content-center h-50 align-items-center me-3 usp-items">
        <Image
          src={
            "https://icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png"
          }
        />
        <p className="fs-15 m-0 ms-1">Nationwide Delivery</p>
      </div>

      <div className="single-feature d-flex justify-content-center h-50 align-items-center me-3 usp-items">
        <Image
          src={
            "	https://icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png"
          }
        />
        <p className="fs-15 m-0">Free & Easy Returns</p>
      </div>

      <div className="single-feature d-flex justify-content-center h-50 align-items-center me-3 usp-items">
        <Image
          src={
            "https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png"
          }
        />
        <p className="fs-15 m-0 ms-1">Best Price Guaranteed</p>
      </div>

      <div className="single-feature d-flex justify-content-center h-50 align-items-center me-3 usp-items">
        <Image
          src={
            "	https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png"
          }
        />
        <p className="fs-15 m-0 ms-1">100% Authentic Products</p>
      </div>

      <div className="single-feature d-flex justify-content-center h-50 align-items-center me-3 daraz-verified">
        <Image
          src={
            "	https://icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png"
          }
        />
        <p className="fs-15 m-0 ms-2">Daraz Verified</p>
      </div>
    </div>
  );
}

export default FeatureHeading