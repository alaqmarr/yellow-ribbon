import React from "react";

const GoogleMap = () => {
  return (
    <section className="contact-page-google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0730!2d78.4560!3d17.4160!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91700000000%3A0x0!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1704091200000!5m2!1sen!2sin"
        className="contact-page-google-map__one"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yellow Ribbon Travels Location"
      ></iframe>
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <a
          href="https://maps.app.goo.gl/2ppNdLWgYBscFnTM6"
          target="_blank"
          rel="noopener noreferrer"
          className="thm-btn"
        >
          <i
            className="fas fa-map-marker-alt"
            style={{ marginRight: "10px" }}
          ></i>
          Open in Google Maps
        </a>
      </div>
    </section>
  );
};

export default GoogleMap;
