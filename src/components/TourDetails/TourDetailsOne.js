import { tourDetailsOne } from "@/data/tourDetailsPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const TourDetailsOne = ({ packageData }) => {
  const {
id,
name,
days,
nights,
image,
price,
location,
itineraries,
inclusions,
exclusions,
type
  } = packageData;
  return (
    <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{name}</h2>
                  <p className="tour-details__top-rate">
                    <span>{price}</span> / Per Person
                  </p>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Duration</p>
                        <h6>{days} Days {nights} Nights</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-plane"></span>
                      </div>
                      <div className="text">
                        <p>Tour Type</p>
                        <h6>{type}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Location</p>
                        <h6>{location}</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TourDetailsOne;
