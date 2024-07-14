import React from "react";
import "./HomeSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Img } from "../../../assets/image/hookImg";
const HomeSlider = () => {
  const config = {
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    customTransition: "transform 0.8s ease-in-out",
    transitionDuration: 800,
    draggable: true,
    swipeable: true,
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} infinite={true} {...config}>
        <div>
          <img src={Img.homeSlide1} className="carousel-item___bg-image" />
        </div>
        <div>
          <img src={Img.homeSlide2} className="carousel-item___bg-image" />
        </div>
      </Carousel>
    </>
  );
};

export default HomeSlider;
