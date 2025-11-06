import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, name, days, nights, price, type, location, id } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={`${image}`}
            alt=""
          />
        </div>
        <div className="popular-tours__content">
          <h3 className="popular-tours__title">
            <Link href={`/package/${id}`}>{name || "Untitled Package"}</Link>

          </h3>
          <p className="popular-tours__rate">
            <span>₹ {price}</span> / Per Person
          </p>
          <ul className="popular-tours__meta list-unstyled">
              <li>
                <Link href={`/package/${id}`}>{days+'D/' + nights + 'N'}</Link>
              </li>
              <li>
                <Link href={`/package/${id}`}>{location ? location : "N/A"}</Link>
              </li>
              <li>
                <Link href={`/package/${id}`}>{type ? type : "N/A"}</Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
