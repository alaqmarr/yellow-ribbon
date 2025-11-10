import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ({ image, userSelect = false }) => {

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
      </div>
    </div>
  );
};

export default SingleGallery;