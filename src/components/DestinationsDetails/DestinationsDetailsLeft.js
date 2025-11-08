import React from "react";
import { Image } from "react-bootstrap";
import DestinationsDetailsFaq from "@/components/DestinationsDetails/DestinationsDetailsFaq";

const DestinationsDetailsLeft = ({ data }) => {
  const {
    image,
    name,
    tag,
    title,
    description,
    currency,
    languageSpoken,
    visa,
    country,
    faqs,
  } = data;

  return (
    <div className="destinations-details__left">
      <div className="destinations-details__img">
        {image && <Image src={image} alt="" />}
      </div>
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">{title}</h3>
        <p className={`destinations-details__discover-text-${1}`}>
          {description}
        </p>
      </div>
      <div className="destinations-details__overview">
        <h3 className="destinations-details__title">{name}</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          {country && (
            <li>
              <div className="destinations-details__overview-left">
                <p>Country</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{country}</p>
              </div>
            </li>
          )}
          {visa && (
            <li>
              <div className="destinations-details__overview-left">
                <p>Visa</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{visa}</p>
              </div>
            </li>
          )}
          {visa && (
            <li>
              <div className="destinations-details__overview-left">
                <p>Tags</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{tag}</p>
              </div>
            </li>
          )}
          {currency && (
            <li>
              <div className="destinations-details__overview-left">
                <p>Currency</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{currency}</p>
              </div>
            </li>
          )}
          {languageSpoken && (
            <li>
              <div className="destinations-details__overview-left">
                <p>Language Spoken</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{languageSpoken}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
      <DestinationsDetailsFaq faqs={faqs} />
    </div>
  );
};

export default DestinationsDetailsLeft;
