import services from "@/data/services";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ServicesOne = () => {
  return (
    <section className="services-one" style={{ padding: "120px 0 90px" }}>
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">What We Offer</span>
          <h2 className="section-title__title">Our Best Services</h2>
        </div>
        <Row>
          {services.map((service) => (
            <Col
              key={service.id}
              xl={4}
              lg={4}
              md={6}
              className="animated fadeInUp"
            >
              <div
                className="services-one__single"
                style={{
                  marginBottom: "30px",
                  padding: "30px",
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  textAlign: "center",
                  transition: "all 0.5s ease",
                  position: "relative", // Needed for stretched link
                }}
              >
                <div
                  className="services-one__icon"
                  style={{
                    fontSize: "60px",
                    color: "#e8604c",
                    marginBottom: "20px",
                  }}
                >
                  <span className={service.icon}></span>
                </div>
                <h3
                  className="services-one__title"
                  style={{
                    marginBottom: "15px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="services-one__text"
                  style={{ marginBottom: "20px" }}
                >
                  {service.tagline}
                </p>
                <div
                  className="services-one__btn thm-btn"
                  style={{
                    padding: "10px 30px",
                    fontSize: "14px",
                    display: "inline-block",
                  }}
                >
                  Read More
                </div>

                {/* Stretched Link to make the whole card clickable */}
                <Link href={`/service/${service.slug}`}>
                  <a
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                    }}
                  >
                    <span className="sr-only">
                      View Details for {service.title}
                    </span>
                  </a>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesOne;
