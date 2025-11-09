import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import Sidebar from "@/components/NewsDetailsPage/Sidebar";

const NewsDetailsPage = ({ blogData }) => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <NewsDetailsLeft data={blogData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
