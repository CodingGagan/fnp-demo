import React from "react";
import Button from "../buttons/Button";
import Typography from "../Typography";
import { StyledCarouselCard1 } from "./CarouselCardStyle";

export interface CarouselCard1Props {
  title: String,
  imageUrl: String
}

const CarouselCard1 = ({title, imageUrl, price}) => {
  {{JSON.stringify(title)}}
  return (
    <StyledCarouselCard1>
      <div>
        <h1 className="title">{title}</h1>
        <Typography color="secondary.main" mb="1.35rem">
          Raksha Bandhan || 11th Aug <br/> Starting at Rs {price}
        </Typography>
        <Button
          className="button-link"
          variant="contained"
          color="primary"
          p="1rem 1.5rem"
        >
          Visit Collections
        </Button>
      </div>

      <div className="image-holder">
        <img
          src={imageUrl}
          alt="apple-watch-1"
        />
      </div>
    </StyledCarouselCard1>
  );
};

export default CarouselCard1;
