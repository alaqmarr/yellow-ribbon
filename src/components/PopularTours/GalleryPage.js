import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import axios from "axios";
import SingleGallery from "./SingleGallery";

// get popular tours data

const GalleryPage = ({ toursPage = false, images }) => {
  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {images.map((image, index) => (
            <Col
              key={index}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleGallery image={image} userSelect />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GalleryPage;
