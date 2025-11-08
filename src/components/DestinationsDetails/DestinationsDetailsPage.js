import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DestinationsDetailsLeft from "@/components/DestinationsDetails/DestinationsDetailsLeft";
import DestinationsDetailsRight from "@/components/DestinationsDetails/DestinationsDetailsRight";

const DestinationsDetailsPage = ({data}) => {
  return (
    <section className="destinations-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <DestinationsDetailsLeft data={data} />
          </Col>
          <Col xl={4} lg={5}>
            <DestinationsDetailsRight data={data} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;
