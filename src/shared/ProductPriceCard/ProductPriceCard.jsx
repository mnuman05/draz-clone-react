import React from "react";
import RatingStars from "../../images/rating-stars.png";
import { Image } from "react-bootstrap";

function ProductPriceCard({
  id,
  link,
  name,
  currentPrice,
  previousPrice,
  percentageOff,
  width = "188px",
  height = "290px",
  rating,
}) {
  return (
    <a
      key={id}
      href={link}
      className="card-fs-content-body-unit hp-mod-card-hover J_FSItemUnit mt-4"
      style={{
        width,
        height,
      }}
    >
      <div className="fs-card-img-container">
        <img className="fs-card-img" alt={name} src={link} />
      </div>
      <div className="fs-card-text">
        <div className="fs-card-title">{name}</div>
        <div className="fs-card-price">
          <span className="currency">Rs.</span>
          <span className="price">{currentPrice}</span>
        </div>
        <div className="fs-card-origin-price">
          <span className="fs-origin-price">
            <span className="currency">Rs.</span>
            <span className="price">{previousPrice}</span>
          </span>
          <span className="fs-discount">{percentageOff}</span>
        </div>

        {rating && (
          <div className="fs-card-sold d-flex">
            <Image src={RatingStars} />
            <span
              style={{
                fontSize: "12px",
                color: "#9e9e9e",
                marginTop: "2px",
              }}
            >
              ({rating})
            </span>
          </div>
        )}
      </div>
    </a>
  );
}

export default ProductPriceCard;
