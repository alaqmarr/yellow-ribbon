import React from "react";
import TourDetailsOne from "./TourDetails/TourDetailsOne";
import TourDetailsTwo from "./TourDetails/TourDetailsTwo";


const PackageDetails = ({ packageData }) => {
  return (
    <>
      <TourDetailsOne packageData={packageData} />
      <TourDetailsTwo packageData={packageData} />
    </>
  );
};

export default PackageDetails;
