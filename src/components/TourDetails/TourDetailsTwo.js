import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PackageDetailsLeft from "../PackageDetailsLeft";
import PackageDetailsSidebar from "../PackageDetailsSidebar";

const TourDetailsTwo = ({ packageData }) => {
  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <PackageDetailsLeft packageData={packageData} />
          </Col>
          <Col xl={4} lg={5}>
            <PackageDetailsSidebar packageData={packageData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;
