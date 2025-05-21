import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

type ProductCarouselProps = {
  images: string[];
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  return (
    <Carousel indicators={false} interval={null}>
      {images.map((img, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Slide ${idx + 1}`}
            style={{ height: "200px", objectFit: "contain" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
