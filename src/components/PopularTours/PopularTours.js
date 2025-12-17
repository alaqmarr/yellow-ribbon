import popularTours from "@/data/popularTours";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";

const PopularTours = ({ data }) => {
  const sixTours = data.slice(0, 6);
  return (
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Featured tours</span>
          <h2 className="section-title__title">Most Popular Tours</h2>
        </div>
        <Row className="g-4">
          {sixTours.map((tour) => (
            <Col xl={4} lg={4} md={6} key={tour.id}>
              <SingleTour tour={tour} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PopularTours;
