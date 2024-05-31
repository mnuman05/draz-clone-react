import React from "react";
import "./product.css";
import ProductCard from "../../components/Product";

const Product = () => {
  return (
    <>
      <div className="container bradcrumb cursor-pointer">
        <p>{`Watches Sunglasses Jewellery > Watches > Men > Sports > Led Watch Electronic Button Glass Mirrors Unicorn LED Wristwatch For Men Women Waterproof Children's Sports Watch`}</p>
      </div>

      <div class="container product-main-card">
        <ProductCard />
      </div>
    </>
  );
};

export default Product;
