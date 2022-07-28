import Card from "@component/Card";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import Grid from "../grid/Grid";
import ProductCard4 from "../product-cards/ProductCard4";
import ProductCard5 from "../product-cards/ProductCard5";

const Section4: React.FC = () => {
  return (
    <Box mb="3.75rem">
      <Container>
        <Box>
          <Grid container spacing={6}>
            <Grid item lg={6} xs={12}>
              <CategorySectionHeader
                iconName="ranking-1"
                title="Top Ratings"
                seeMoreLink="#"
              />
              <Card p="1rem">
                <Grid container spacing={4}>
                  {topRatedList.map((item) => (
                    <Grid item md={3} sm={6} xs={6} key={item.title}>
                      <Link href={item.productUrl}>
                        <a>
                          <ProductCard4 {...item} />
                        </a>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
            <Grid item md={6} xs={12}>
              <CategorySectionHeader
                iconName="Group"
                title="Featured Brands"
                seeMoreLink="#"
              />
              <Card p="1rem">
                <Grid container spacing={4}>
                  {brandList.map((item) => (
                    <Grid item sm={6} xs={12} key={item.title}>
                      <Link href={item.productUrl}>
                        <a>
                          <ProductCard5 {...item} />
                        </a>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const topRatedList = [
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20190707213157/melodious-cuddly-floral-combo_1.jpg",
    title: "Flowers N Guitars",
    rating: 4,
    price: 3300,
    reviewCount: 49,
    productUrl: "/product/d1",
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20190707213157/melodious-cuddly-floral-combo_1.jpg",
    title: "Flowers N Guitars",
    rating: 4,
    price: 3300,
    reviewCount: 49,
    productUrl: "/product/d1",
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20190707213157/melodious-cuddly-floral-combo_1.jpg",
    title: "Flowers N Guitars",
    rating: 4,
    price: 3300,
    reviewCount: 49,
    productUrl: "/product/d1",
  },
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20190707213157/melodious-cuddly-floral-combo_1.jpg",
    title: "Flowers N Guitars",
    rating: 4,
    price: 3300,
    reviewCount: 49,
    productUrl: "/product/d1",
  },
 
];

const brandList = [
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20201016223534/gandhi-monkey-themed-monk-idols_1.jpg",
    title: "Budha Round Waterfall",
    productUrl: "/product/e1",
  },
 
  {
    imgUrl: "https://www.fnp.com/images/pr/l/v20201016223534/gandhi-monkey-themed-monk-idols_1.jpg",
    title: "Budha Round Waterfall",
    productUrl: "/product/e1",
  },
 
];

export default Section4;
