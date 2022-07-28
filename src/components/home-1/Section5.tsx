import Card from "@component/Card";
import React from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import Grid from "../grid/Grid";
import ProductCard2 from "../product-cards/ProductCard2";

const Section5: React.FC = () => {
  return (
    <CategorySectionCreator
      iconName="new-product-1"
      title="Best Sellers"
      seeMoreLink="#"
    >
      <Card p="1rem">
        <Grid container spacing={6}>
          {productList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2 {...item} />
            </Grid>
          ))}
        </Grid>
      </Card>
    </CategorySectionCreator>
  );
};

const productList = [
  {
    title: "Plants Combos",
    price: 150,
    imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
    productUrl: "/product/a1",
  },
  
  {
    title: "Plants Combos",
    price: 150,
    imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
    productUrl: "/product/a1",
  },
  
  {
    title: "Plants Combos",
    price: 150,
    imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
    productUrl: "/product/a1",
  },
  
  {
    title: "Plants Combos",
    price: 150,
    imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
    productUrl: "/product/a1",
  },
  
  {
    title: "Plants Combos",
    price: 150,
    imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
    productUrl: "/product/a1",
  },
  
  {
    title: "Plants Combos",
    price: 150,
    imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
    productUrl: "/product/a1",
  },
  
];

export default Section5;
