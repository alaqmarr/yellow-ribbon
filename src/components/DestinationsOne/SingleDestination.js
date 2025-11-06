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
  } = destination;

  return (
    <Col xl={3} lg={3}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image src={`${image}`} alt="" />
          <div className="destinations-one__content">
            {title && <p className="destinations-one__sub-title">{title}</p>}
            <h2 className="destinations-one__title">
              <Link href="/destinations-details">{name}</Link>
            </h2>
          </div>
          <div className="destinations-one__button">
            <a href="#">{country}</a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;
