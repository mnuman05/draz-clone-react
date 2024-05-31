import React from "react";
import ProductPicCard from "./ProductPicCard/ProductPicCard";
import ProductDetailCard from "./ProductDetailCard/ProductDetailCard";
import ProductLocationCard from "./ProductLocationCard/ProductLocationCard";

const ProductCard = () => {
  return (
    <div class="row">
      <ProductPicCard />

      <ProductDetailCard />

      <ProductLocationCard />
    </div>
  );
};

export default ProductCard;
