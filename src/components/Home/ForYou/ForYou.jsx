import React from 'react'
import { forYou } from '../../../constants/Home/home';
import ProductPriceCard from '../../../shared/ProductPriceCard/ProductPriceCard';

const ForYou = () => {
  return (
    <div className="row mt-4">
      <h3 className="for-you-category-title">Just For You</h3>
      <div className="category-card">
        <div class="d-flex flex-wrap justify-content-center" title="Flash Sale">
          {forYou.map((fru) => (
            <ProductPriceCard
              id={fru.id}
              link={fru.link}
              name={fru.name}
              currentPrice={fru.currentPrice}
              previousPrice={fru.previousPrice}
              percentageOff={fru.percentageOff}
              width={189}
              height={325}
              rating={fru.stars}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForYou