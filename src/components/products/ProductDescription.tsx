import React from "react";
import Box from "../Box";
import Typography, { H3 } from "../Typography";

export interface ProductDescriptionProps { }

const ProductDescription: React.FC<ProductDescriptionProps> = () => {
  return (
    <Box>
      <H3 mb="1rem">Specification:</H3>
      <Typography>
        Brand: Demo Brand <br />
        <br />
        Lorem Flower Set  <br />
        Lorem Ipsum Sok JD ahd h hbhasd h dah <br />
        dahbhasd da duad d uahduabdi id aidia dai diausduadu d uad <br />
        Made in India <br />
      </Typography>
    </Box>
  );
};

export default ProductDescription;
