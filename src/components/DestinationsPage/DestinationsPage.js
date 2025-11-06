import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleDestination from "@/components/DestinationsOne/SingleDestination";

const DestinationsPage = ({data}) => {
  return (
    <section className="destinations-one destinations-page">
      <Container>
        <Masonry className="row position-relative">
          {data.map((destination) => (
            <SingleDestination key={destination.id} destination={destination} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default DestinationsPage;
