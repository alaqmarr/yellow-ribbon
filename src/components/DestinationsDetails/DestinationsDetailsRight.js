import { destinationsDetailsRight } from "@/data/destinationsDetails";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";

const transportOptions = [
  { value: "Self", label: "Self Transportation" },
  { value: "With Package", label: "With Package Transportation" },
];

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 14,
    fontWeight: 500,
    padding: "0",
    margin: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
    color: "#787780",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    borderRadius: "8px",
    padding: "0",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#787780",
    padding: "10px 20px",
    backgroundColor: state.isSelected ? "var(--thm-primary)" : "#fff",
    transition: "all 0.4s ease",
    cursor: "pointer",
    borderBottom: "1px solid #f4f4f4",
    "&:hover": {
      backgroundColor: "var(--thm-primary)",
      color: "#fff",
    },
    fontSize: 14,
    fontWeight: 500,
  }),
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    backgroundColor: "#f4f5f8", // Matching the light gray background typical of theme inputs
    height: "55px",
    "&:hover": {
      borderColor: "transparent",
    },
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "#787780",
    fontSize: 14,
    fontWeight: 400,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const DestinationsDetailsRight = ({ data }) => {
  const { places } = data;
  const [transport, setTransport] = useState("Self");
  const [passengers, setPassengers] = useState(1);
  const [startDate, setStartDate] = useState(new Date());

  const handleSelectTransport = ({ value }) => {
    setTransport(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateString = startDate.toLocaleDateString("en-GB");
    const currentUrl = window.location.href;

    const text = `Hello, I am interested in booking a trip to this destination.%0A
*Link:* ${currentUrl}%0A
*Travel Date:* ${dateString}%0A
*No. of Passengers:* ${passengers}%0A
*Transportation:* ${transport}
`;

    const whatsappUrl = `https://wa.me/919789905294?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="destinations-details__right">
      <div className="tour-details-two__book-tours">
        <h3 className="tour-details-two__sidebar-title">Book This Trip</h3>
        <form
          onSubmit={handleSubmit}
          className="tour-details-two__sidebar-form"
        >
          <div className="tour-details-two__sidebar-form-input">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select Travel Date"
              className="w-100"
              dateFormat="dd/MM/yyyy"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-calendar-alt"></i>
            </div>
          </div>

          <div className="tour-details-two__sidebar-form-input">
            <input
              type="number"
              placeholder="No. of Passengers"
              name="passengers"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              required
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-users"></i>
            </div>
          </div>

          <div className="tour-details-two__sidebar-form-input">
            <Select
              name="transport"
              options={transportOptions}
              onChange={handleSelectTransport}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              value={transportOptions.find((opt) => opt.value === transport)}
              placeholder="Transportation Type"
              instanceId="transportSelectDest"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>

          <button
            style={{ zIndex: 0 }}
            type="submit"
            className="thm-btn tour-details-two__sidebar-btn"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>

      <div className="tour-details-two__last-minute tour-details-two__last-minute-2">
        <h3 className="tour-details-two__sidebar-title">Places to Visit</h3>
        {places && places.length > 0 ? (
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
        ) : (
          <p>No nearby places available.</p>
        )}
      </div>
    </div>
  );
};

export default DestinationsDetailsRight;
