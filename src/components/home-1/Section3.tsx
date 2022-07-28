import Card from "@component/Card";
import Carousel from "@component/carousel/Carousel";
import useWindowSize from "@hook/useWindowSize";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard6 from "../product-cards/ProductCard6";

const Section3: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 650) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <CategorySectionCreator
      iconName="categories"
      title="Trending Now"
      seeMoreLink="#"
    >
      <Carousel totalSlides={5} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => (
          <Link href={item.categoryUrl} key={ind}>
            <a>
              <Card p="1rem">
                <ProductCard6
                  title={item.title}
                  subtitle={item.subtitle}
                  imgUrl={item.imgUrl}
                />
              </Card>
            </a>
          </Link>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

const categoryList = [
  {
    title: "Personalised",
    subtitle: "Most Order",
    categoryUrl: "/",
    imgUrl: "https://www.fnp.com/images/pr/l/v20191014120513/personalised-pretty-girl-caricature_1.jpg",
  },
 
  {
    title: "Personalised",
    subtitle: "Most Order",
    categoryUrl: "/",
    imgUrl: "https://www.fnp.com/images/pr/l/v20191014120513/personalised-pretty-girl-caricature_1.jpg",
  },
 
  {
    title: "Personalised",
    subtitle: "Most Order",
    categoryUrl: "/",
    imgUrl: "https://www.fnp.com/images/pr/l/v20191014120513/personalised-pretty-girl-caricature_1.jpg",
  },
 
  {
    title: "Personalised",
    subtitle: "Most Order",
    categoryUrl: "/",
    imgUrl: "https://www.fnp.com/images/pr/l/v20191014120513/personalised-pretty-girl-caricature_1.jpg",
  },
 
  {
    title: "Personalised",
    subtitle: "Most Order",
    categoryUrl: "/",
    imgUrl: "https://www.fnp.com/images/pr/l/v20191014120513/personalised-pretty-girl-caricature_1.jpg",
  },
 
];

export default Section3;
