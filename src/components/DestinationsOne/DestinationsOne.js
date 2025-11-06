import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "@/components/DestinationsOne/SingleDestination";

const DestinationsOne = ({ data }) => {
  return (
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Destination lists</span>
          <h2 className="section-title__title">Go Exotic Places</h2>
        </div>
        <Row className="masonary-layout">
          {data.slice(0, 5).map((destination) => (
            <SingleDestination key={destination.id} destination={destination} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
