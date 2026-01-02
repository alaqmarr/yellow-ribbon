import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Reviews = () => {
  return (
    <Layout pageTitle="Reviews">
      <PageHeader title="Reviews" page="Reviews" />

      {/* Google Reviews CTA Section - Now on top */}
      <section style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div
                className="section-title text-center"
                style={{ marginBottom: "40px" }}
              >
                <span className="section-title__tagline">Google Reviews</span>
                <h2 className="section-title__title">
                  See What Travelers Say on Google
                </h2>
                <p style={{ marginTop: "20px", color: "var(--thm-gray)" }}>
                  We&apos;re proud of our 5-star rating on Google! Check out
                  reviews from hundreds of happy travelers.
                </p>
              </div>

              <div
                style={{
                  background: "#fff",
                  padding: "40px",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                {/* Star Rating Display */}
                <div style={{ marginBottom: "25px" }}>
                  <span
                    style={{
                      fontSize: "48px",
                      fontWeight: "700",
                      color: "var(--thm-primary)",
                    }}
                  >
                    5.0
                  </span>
                  <div style={{ marginTop: "10px" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className="fa fa-star"
                        style={{
                          color: "#ffc107",
                          fontSize: "24px",
                          marginRight: "5px",
                        }}
                      ></i>
                    ))}
                  </div>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "var(--thm-gray)",
                      fontSize: "14px",
                    }}
                  >
                    Based on Google Reviews
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href="https://g.co/kgs/jdJ6rv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn"
                  >
                    <i
                      className="fab fa-google"
                      style={{ marginRight: "10px" }}
                    ></i>
                    View All Reviews on Google
                  </a>
                  <a
                    href="https://g.co/kgs/jdJ6rv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn"
                    style={{ backgroundColor: "var(--thm-black)" }}
                  >
                    Write a Review
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section - Now below */}
      <TestimonialOne />

      {/* Why Trust Us Section */}
      <section style={{ padding: "60px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center">
                <h3 style={{ marginBottom: "30px" }}>
                  Why Travelers Trust Yellow Ribbon
                </h3>
                <Row>
                  {[
                    {
                      icon: "fa-users",
                      title: "257+ Happy Clients",
                      desc: "Travelers who've experienced our service",
                    },
                    {
                      icon: "fa-globe",
                      title: "69+ Destinations",
                      desc: "Worldwide coverage for your adventures",
                    },
                    {
                      icon: "fa-headset",
                      title: "24/7 Support",
                      desc: "Always available when you need us",
                    },
                  ].map((item, i) => (
                    <Col md={4} key={i} style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          padding: "30px 20px",
                          background: "#fff",
                          borderRadius: "12px",
                        }}
                      >
                        <i
                          className={`fa ${item.icon}`}
                          style={{
                            fontSize: "36px",
                            color: "var(--thm-primary)",
                            marginBottom: "15px",
                          }}
                        ></i>
                        <h5 style={{ marginBottom: "10px" }}>{item.title}</h5>
                        <p
                          style={{
                            color: "var(--thm-gray)",
                            fontSize: "14px",
                            margin: 0,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Reviews;
