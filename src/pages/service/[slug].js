import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import services from "@/data/services";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useRouter } from "next/router";

const ServiceDetails = ({ service }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageTitle={service.title}>
      <PageHeader title={service.title} />
      <section className="service-details" style={{ padding: "120px 0" }}>
        <Container>
          <Row>
            <Col xl={8} lg={7}>
              <div className="service-details__left">
                <div
                  className="service-details__img"
                  style={{ marginBottom: "30px" }}
                >
                  {/* Placeholder image logic - normally we would map this */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fluid
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="service-details__content">
                  <h3
                    className="service-details__title"
                    style={{
                      marginBottom: "20px",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="service-details__text-1"
                    style={{
                      fontSize: "18px",
                      lineHeight: "30px",
                      marginBottom: "30px",
                      color: "#777",
                    }}
                  >
                    {service.description}
                  </p>
                  <p
                    className="service-details__text-2"
                    style={{
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "#777",
                    }}
                  >
                    {service.tagline}
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={5}>
              <div className="service-details__sidebar">
                <div
                  className="service-details__sidebar-service"
                  style={{
                    backgroundColor: "#f4f5f8",
                    padding: "30px",
                    borderRadius: "10px",
                    marginBottom: "30px",
                  }}
                >
                  <h4
                    className="service-details__sidebar-title"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    All Services
                  </h4>
                  <ul
                    className="service-details__sidebar-service-list list-unstyled"
                    style={{ padding: 0, margin: 0 }}
                  >
                    {services.map((s) => (
                      <li key={s.id} style={{ marginBottom: "10px" }}>
                        <a
                          href={`/service/${s.slug}`}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "15px 20px",
                            backgroundColor: "#fff",
                            borderRadius: "5px",
                            color: "#777",
                            fontSize: "16px",
                            fontWeight: "500",
                            transition: "all 0.5s ease",
                          }}
                        >
                          {s.title}
                          <span className="fa fa-angle-right"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="service-details__need-help"
                  style={{
                    backgroundColor: "#e8604c",
                    padding: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <div
                    className="service-details__need-help-bg"
                    style={{}}
                  ></div>
                  <h3
                    className="service-details__need-help-title"
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "15px",
                      color: "#fff",
                    }}
                  >
                    Need Help?
                  </h3>
                  <p
                    className="service-details__need-help-text"
                    style={{
                      fontSize: "16px",
                      lineHeight: "28px",
                      marginBottom: "20px",
                      color: "#fff",
                    }}
                  >
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member help.
                  </p>
                  <h2
                    className="service-details__need-help-contact"
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    <a href="tel:9789905294" style={{ color: "#fff" }}>
                      978 990 5294
                    </a>
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  return {
    props: {
      service,
    },
  };
}

export default ServiceDetails;
