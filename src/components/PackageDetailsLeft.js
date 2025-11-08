import React, { useState } from "react";

const PackageDetailsLeft = ({ packageData }) => {
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
    type,
  } = packageData;
  const [active, setActive] = useState(1);

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Overview</h3>
        <p className="tour-details-two__overview-text">{name}</p>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {inclusions.map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over.item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tour-details-two__overview-bottom-right">
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {exclusions.map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="text">
                      <p>{over.item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {itineraries.map(
            ({ id, dayNumber, description, title, features }) => (
              <div
                className={`accrodion overflow-hidden${
                  active === id ? " active" : ""
                }`}
                key={id}
              >
                <div onClick={() => setActive(id)} className="accrodion-title">
                  <h4>
                    <span>Day {dayNumber}</span> {title || "-"}
                  </h4>
                </div>
                <div
                  className={`accrodion-content animated ${
                    active === id ? "slideInUp d-block" : "slideInDown d-none"
                  }`}
                >
                  <div className="inner">
                    <p>{description}</p>
                    <ul className="list-unstyled">
                      {features > 0 ? (
                        features.map((list, index) => (
                          <li key={index}>{list}</li>
                        ))
                      ) : (
                        <p>No details available for this day.</p>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsLeft;
