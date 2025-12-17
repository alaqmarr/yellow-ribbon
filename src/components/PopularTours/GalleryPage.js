import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import axios from "axios";
import SingleGallery from "./SingleGallery";

// get popular tours data

const GalleryPage = ({ toursPage = false, images }) => {
  return (
    <section className="gallery-page-masonry">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <div className="gallery-page-masonry__content">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-page-masonry__item animated fadeInUp"
            >
              <SingleGallery image={image} userSelect />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GalleryPage;
