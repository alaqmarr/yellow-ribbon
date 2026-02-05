import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

const teamMembers = [
  {
    name: "Rukaiya",
    image: "/rukaiya.jpeg",
    role: "Founder & Travel Expert",
    description:
      "With a B.A. in Travel & Tourism and hands-on experience at IndiGo, Jet Airways, VFS, and leading travel agencies, Rukaiya brings unmatched expertise to every itinerary. Her passion for crafting unique travel experiences is the heart of Yellow Ribbon Travels.",
    experience: [
      "B.A. Travel & Tourism",
      "IndiGo Airlines",
      "Jet Airways",
      "VFS Global",
      "Leading Travel Agency",
    ],
  },
  {
    name: "Yusuf",
    image: "/yusuf.jpeg",
    role: "Co-Founder & Entrepreneur",
    description:
      "The visionary behind Yellow Ribbon Travels, Yusuf brings entrepreneurial spirit and unwavering support. He surprised Rukaiya with the business on their wedding day in July 2017, turning a shared dream into reality.",
    experience: [
      "Business Strategy",
      "Operations Management",
      "Customer Relations",
      "Partnership Development",
    ],
  },
];

const Team = () => {
  return (
    <Layout pageTitle="Our Team">
      <PageHeader title="Our Team" page="Our Team" />

      {/* Team Intro */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div
                className="section-title text-center"
                style={{ marginBottom: "40px" }}
              >
                <span className="section-title__tagline">
                  Meet the Founders
                </span>
                <h2 className="section-title__title">
                  The People Behind Yellow Ribbon Travels
                </h2>
              </div>
              <p
                style={{
                  fontSize: "18px",
                  color: "var(--thm-gray)",
                  lineHeight: "1.8",
                }}
              >
                Yellow Ribbon Travels was built on love, adventure, and a shared
                dream. Get to know the passionate duo who craft unforgettable
                journeys for travelers worldwide.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Members Cards */}
      <section style={{ padding: "0 0 80px", backgroundColor: "#fff" }}>
        <Container>
          <Row className="justify-content-center">
            {teamMembers.map((member, index) => (
              <Col md={6} lg={5} key={index} style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    background: "#f9f9f9",
                    padding: "50px 35px",
                    borderRadius: "20px",
                    textAlign: "center",
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      margin: "0 auto 25px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      border: "5px solid #fff",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Name & Role */}
                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "8px",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--thm-primary)",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginBottom: "20px",
                    }}
                  >
                    {member.role}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--thm-gray)",
                      lineHeight: "1.8",
                      marginBottom: "25px",
                    }}
                  >
                    {member.description}
                  </p>

                  {/* Experience Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    {member.experience.map((exp, i) => (
                      <span
                        key={i}
                        style={{
                          background: "rgba(var(--thm-primary-rgb), 0.1)",
                          color: "var(--thm-primary)",
                          padding: "5px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div style={{ marginTop: "25px" }}>
                    <a
                      href="https://www.instagram.com/yellowribbon.travels?igsh=ZDFsbGlubDhiajl4"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "var(--thm-primary)",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      <i
                        className="fab fa-instagram"
                        style={{ fontSize: "20px" }}
                      ></i>
                      Follow on Instagram
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* BNI Section */}
      <section style={{ padding: "60px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={6}>
              <Image
                src="/assets/images/resources/bni-logo.png"
                alt="BNI Member"
                style={{ height: "80px", width: "auto", marginBottom: "20px" }}
              />
              <h4 style={{ marginBottom: "15px" }}>Proud BNI Member</h4>
              <p style={{ color: "var(--thm-gray)" }}>
                Yellow Ribbon Travels is a proud member of BNI — the
                world&apos;s largest business networking organization.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 style={{ marginBottom: "20px" }}>
                Let&apos;s Plan Your Next Adventure
              </h2>
              <p style={{ marginBottom: "30px", color: "var(--thm-gray)" }}>
                Connect with our team and start planning your dream vacation
                today.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://wa.me/919100228152?text=Hi,%20Yellow%20Ribbon%20Travels!"
                  className="thm-btn"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ marginRight: "10px" }}
                  ></i>
                  WhatsApp Us
                </a>
                <Link href="/our-story">
                  <a
                    className="thm-btn"
                    style={{ backgroundColor: "var(--thm-black)" }}
                  >
                    Read Our Story
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Team;
