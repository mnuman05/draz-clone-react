import React from 'react'
import { categories } from '../../../constants/Home/home';

const ProductCategories = () => {
  return (
    <div className="row">
      <div className="home-category-heading">
        <h3 className="home-category-title">Categories</h3>
      </div>

      <div className="category-card">
        {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://static-01.daraz.pk/p/381322b5ac1501d1066a888e352e01d9.jpg"
            />
            <Card.Body>
              <Card.Text>Wardrobe Organisers</Card.Text>
            </Card.Body>
          </Card> */}

        {categories.map((catg) => (
          <div
            key={catg.id}
            class="card-categories-li hp-mod-card-hover align-left"
          >
            <a
              class="card-categories-li-content"
              href="//www.daraz.pk/bedroom-clothes-storage/?up_id=381708404&amp;clickTrackInfo=e741ce06-8a80-4350-80a2-c8c8141d51f3__10000419__381708404__u2i__0.9459953657835023__platform__ANDROID__scm__1007.40350.322036.__brandID__39704__SellerID__6005014254038__IsHitHot__1__IfCart__0__IfOrder__0__IfLeafCatCart__0__IfLeafCatOrd__0__IfBrandCart__0__IfBrandOrd__0__IfCartSeller__0__IfOrdSeller__0__item_sold__0__GmvNow__0.0__item_day_sold__0__ctr__0.0__cvr__0.0__rank__0.0__322036__30350&amp;from=hp_categories&amp;item_id=381708404&amp;version=v2"
              exp-tracking="category"
              algo_scm=""
              trackinfo="e741ce06-8a80-4350-80a2-c8c8141d51f3__10000419__381708404__u2i__0.9459953657835023__platform__ANDROID__scm__1007.40350.322036.__brandID__39704__SellerID__6005014254038__IsHitHot__1__IfCart__0__IfOrder__0__IfLeafCatCart__0__IfLeafCatOrd__0__IfBrandCart__0__IfBrandOrd__0__IfCartSeller__0__IfOrdSeller__0__item_sold__0__GmvNow__0.0__item_day_sold__0__ctr__0.0__cvr__0.0__rank__0.0__322036__30350"
              clicktrackinfo="e741ce06-8a80-4350-80a2-c8c8141d51f3__10000419__381708404__u2i__0.9459953657835023__platform__ANDROID__scm__1007.40350.322036.__brandID__39704__SellerID__6005014254038__IsHitHot__1__IfCart__0__IfOrder__0__IfLeafCatCart__0__IfLeafCatOrd__0__IfBrandCart__0__IfBrandOrd__0__IfCartSeller__0__IfOrdSeller__0__item_sold__0__GmvNow__0.0__item_day_sold__0__ctr__0.0__cvr__0.0__rank__0.0__322036__30350"
              title="Wardrobe"
              organisers=""
              data-aplus-ae="x1_2268b5f6"
              data-spm-anchor-id="a2a0e.home.categories.1"
            >
              <div class="card-categories-image-container">
                <img class="image" src={catg.link} alt="Wardrobe Organisers" />
              </div>
              <div class="card-categories-name">
                <span class="text">{catg.name}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories