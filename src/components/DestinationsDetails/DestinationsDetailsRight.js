import { destinationsDetailsRight } from "@/data/destinationsDetails";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const DestinationsDetailsRight = ({ data }) => {
  const { places } = data;
  if (!places || places.length === 0) {
    return (
      <div className="destinations-details__right">
        <div className="tour-details-two__last-minute tour-details-two__last-minute-2">
          <h3 className="tour-details-two__sidebar-title">Nearby Places</h3>
          <p>No nearby places available.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="destinations-details__right">
      <div className="tour-details-two__last-minute tour-details-two__last-minute-2">
        <h3 className="tour-details-two__sidebar-title">Places to Visit</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {places.map(({ id, image, name, description }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image">
                <Image src={`${image}`} alt="" />
              </div>
              <div className="tour-details-two__last-minute-content">
                <h5>{name}</h5>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationsDetailsRight;
