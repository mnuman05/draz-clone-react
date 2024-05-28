import React from "react";

function ProductPriceCard({ id, link, name, currentPrice, previousPrice, percentageOff }) {
  return (
    <a
      key={id}
      href={link}
      className="card-fs-content-body-unit hp-mod-card-hover J_FSItemUnit"
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
        <div className="fs-card-sold"></div>
      </div>
    </a>
  );
}

export default ProductPriceCard;
