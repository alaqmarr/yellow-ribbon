import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const {
    image,
    title,
    name,
    country,
    visa,
    languageSpoken,
    currency,
    description,
    faqs,
    tag,
    id,
  } = destination;

  return (
    <Col xl={3} lg={3}>
      <div
        className="destinations-one__single"
        style={{ position: "relative" }}
      >
        <div className="destinations-one__img">
          <Image src={`${image}`} alt="" />
          <div className="destinations-one__content">
            {title && <p className="destinations-one__sub-title">{title}</p>}
            <h2 className="destinations-one__title">
              <Link href={`/destination/${id}`}>{name}</Link>
            </h2>
          </div>
          <div className="destinations-one__button">
            <a href="https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!">
              {country}
            </a>
          </div>
        </div>
        <Link href={`/destination/${id}`}>
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
            <span className="sr-only">View Details</span>
          </a>
        </Link>
      </div>
    </Col>
  );
};

export default SingleDestination;
