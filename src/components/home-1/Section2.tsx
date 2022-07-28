import Box from "@component/Box";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard1 from "../product-cards/ProductCard1";

/* Shop By BestSeller */

const Section2: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <CategorySectionCreator
      iconName="light"
      title="Shop By Bestseller Categories"
      seeMoreLink="#"
    >
      <Box mt="-0.25rem" mb="-0.25rem">
        <Carousel totalSlides={7} visibleSlides={visibleSlides}>
          {productList.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard1
                id={ind}
                imgUrl={item.imgUrl}
                title={item.title}
                rating={item.rating}
                price={item.price}
                off={56}
                key={ind}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

const productList = [
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20220609182010/swayam-floral-tc-200-pure-cotton-double-bedsheet-and-pillow-covers_1.jpg",
    title: "Swayam Floral TC 200 Pure Cotton Double Bedsheet and Pillow Covers",
    price: 2399,
    rating: 4,
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20190729193343/colorful-balloons-decor_1.jpg",
    title: "Colorful Ballons Decor",
    price: 1599,
    rating: 5,
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20191119144241/good-luck-two-layer-bamboo-plant_1.jpg",
    title: "Bring Good Luck 2 Layer Bamboo",
    price: 549,
    rating: 4.7,
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20201128223543/bagsy-malone-tote-combo-bags-soft-pink_1.jpg",
    title: "Bagsy Malone Tote Combo Packs- Soft Pink",
    price: 1199,
    rating: 4,
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20180518122234/three-layer-chocolaty-wishes_1.jpg",
    title: "Dairy Milk Chocolate & Eclairs Arrangement",
    price: 2299,
    rating: 3.5,
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20210902185645/iron-ganesha-tlight-candle-stand_1.jpg",
    title: "Iron Ganesha TLight Candle Stand",
    price: 1499,
    rating: 5,
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20200827182557/little-monk-on-hand-idol-black-golden_1.jpg",
    title: "Little Monk On Hand Idol-Black & Golden",
    price: 899,
    rating: 4,
  }
];

export default Section2;
