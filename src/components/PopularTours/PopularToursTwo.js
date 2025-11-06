import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import axios from "axios";

// get popular tours data

const PopularToursTwo = ({ toursPage = false, popularTours }) => {
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
          {popularTours.map((tour) => (
            <Col
              key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
