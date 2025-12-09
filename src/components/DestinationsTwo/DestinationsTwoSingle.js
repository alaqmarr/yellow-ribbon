import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const DestinationsTwoSingle = ({ destination = {}, col }) => {
  const { image, title, subtitle, href } = destination;

  return (
    <Col xl={col} lg={col}>
      <div
        className="destinations-two__top-single animated fadeInUp"
        style={{ position: "relative" }}
      >
        <div className="destinations-two__top-img">
          <Image src={`/${image}`} alt="" />
          <div className="destinations-two__top-content">
            {subtitle && (
              <p className="destinations-two__top-sub-title">{subtitle}</p>
            )}
            <h2 className="destinations-two__top-title">
              <Link href={href}>{title}</Link>
            </h2>
          </div>
        </div>
        <Link href={href}>
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

export default DestinationsTwoSingle;
