import aboutOne from "@/data/aboutOne";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  about,
  shape1,
  shape2,
  phone,
  discount,
  tagline,
  title,
  destination,
  points,
} = aboutOne;

const AboutOne = () => {
  return (
    <section className="about-one">
      <div className="about-one-shape-1 animated slideInLeft">
        <Image src={shape1} alt="" />
      </div>
      <div className="about-one-shape-2 float-bob-y">
        <Image src={shape2} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6} className="animated fadeInLeft">
            <div className="about-one__left">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <Image
                    src={`https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    alt=""
                  />
                </div>
                <div className="about-one__call">
                  <div className="about-one__call-icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="about-one__call-number">
                    <p>Book Tour Now</p>
                    <h4>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="about-one__right-text">{destination}</p>
              <ul className="list-unstyled about-one__points">
                {points.map((point, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919100228152?text=Hi,%20Yellow%20Ribbon%20Travels!"
                className="about-one__btn thm-btn"
              >
                Book with us now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
