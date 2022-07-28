import Box from "@component/Box";
import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
import Carousel from "@component/carousel/Carousel";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import React, { Fragment } from "react";
// import { valueContainerCSS } from "react-select/dist/declarations/src/components/containers";

const carouselData = [
  { title: "Gift Thread of Love", imageUrl: "https://www.fnp.com/assets/images/custom/rakhi-desk-2022/Rakhi-Collection/Lumba-Rakhi-24-june-2022.jpg", price: 199 },
  { title: "Flavourful Cakes", imageUrl: "https://www.fnp.com/images/pr/l/v20201019160311/rainbow-vanilla-cream-cake_1.jpg", price: 254 },
  { title: "Show Your Love'\s With Gifts", imageUrl: "https://www.fnp.com/images/pr/l/v20201016223536/graceful-namaste-buddha-idol-under-a-tree_1.jpg", price: 1544 }
];

const Section1 = () => {
  return (
    <>
      <Fragment>
        <Navbar navListOpen={true} />
        <Box bg="gray.white" mb="3.75rem">
          <Container pb="2rem">
            <Carousel
              totalSlides={3}
              visibleSlides={1}
              interval={10000}
              infinite={true}
              autoPlay={true}
              showDots={true}
              showArrow={false}
              spacing="0px"
            >
              {carouselData.map((value) => <CarouselCard1 key={value.price} title={value.title} imageUrl={value.imageUrl} price={value.price} />)}
            </Carousel>
          </Container>
        </Box>
      </Fragment>
    </>
  );
}

export default Section1;
