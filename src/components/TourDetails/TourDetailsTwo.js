import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PackageDetailsLeft from "../PackageDetailsLeft";
import PackageDetailsSidebar from "../PackageDetailsSidebar";

const TourDetailsTwo = ({ tour }) => {
  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <PackageDetailsLeft packageData={tour} />
          </Col>
          <Col xl={4} lg={5}>
            <PackageDetailsSidebar packageData={tour} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;
