import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

import FoodDelivery from "../../../images/food-delivery.jpg"
import NewOnDaraz from "../../../images/new-on-daraz.jpg";


import { Image } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <PlaceholderImage
          text="First slide"
          src={
            "https://icms-image.slatic.net/images/ims-web/f0fd2448-d970-492e-927e-97bc3f6fc64f.jpg_1200x1200.jpg"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Second slide"
          src={
            "https://icms-image.slatic.net/images/ims-web/2408b169-2c14-45cd-94c5-632c217b69a2.jpg"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Third slide"
          src={
            "	https://icms-image.slatic.net/images/ims-web/926e88c1-dce0-44a5-a354-b07c729d06b7.png"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Third slide"
          src={
            "https://icms-image.slatic.net/images/ims-web/56a58fd1-8c06-4e97-87a0-62d7f7a56b8b.jpg"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Third slide"
          src={
            "https://icms-image.slatic.net/images/ims-web/5cd99540-0284-4a25-9527-f9a38d838985.jpeg"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Third slide"
          src={
            "https://icms-image.slatic.net/images/ims-web/fb8ae42c-8df6-4c85-8bac-36c9be9dc19a.jpg"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Third slide"
          src={
            "https://icms-image.slatic.net/images/ims-web/46d74816-4af4-4bf9-8c1b-f9b96d380fa0.jpg"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Third slide"
          src={
            "	https://icms-image.slatic.net/images/ims-web/e941d14d-977d-452f-becc-8a4e6b402a4c.jpg"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          text="Third slide"
          src={
            "https://icms-image.slatic.net/images/ims-web/9e8d0520-9f24-48e4-a762-2026c8ace8db.jpg"
          }
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;




const PlaceholderImage = ({ text, src }) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={text}
    />
    // <Image src={src} text={text} />
  );
};

