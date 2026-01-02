import React from "react";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {} }) => {
  const { bg } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <Container>
        <div className="swiper-slide-inner">
          <div className="tour-details-slider_icon">
            <a href="https://wa.me/919100228152?text=Hi,%20Yellow%20Ribbon%20Travels!">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://wa.me/919100228152?text=Hi,%20Yellow%20Ribbon%20Travels!">
              <i className="fa fa-heart"></i>
            </a>
          </div>
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
