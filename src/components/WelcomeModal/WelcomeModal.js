import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link";

const WelcomeModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("welcomePopupShown");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("welcomePopupShown", "true");
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="welcome-modal"
      size="lg" // Make it larger for the split layout
      dialogClassName="modal-90w" // customized class if needed, or just use size
      style={{ zIndex: 99999 }} // Ensure it's on top
    >
      <Modal.Body style={{ padding: 0, borderRadius: "20px", border: "none" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "#fff",
            borderRadius: "15px", // Match modal border radius
            overflow: "hidden", // Clip image corners
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)", // Premium shadow
          }}
        >
          {/* Left Side - Image */}
          <div
            style={{
              flex: "1 1 40%", // Take up roughly 40% width
              minHeight: "300px",
              backgroundImage: "url(/flights.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            {/* Overlay for text readability if we put text over image, otherwise just a nice image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.1))",
              }}
            ></div>
          </div>

          {/* Right Side - Content */}
          <div
            style={{
              flex: "1 1 60%", // Take up roughly 60% width
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "#999",
                cursor: "pointer",
                padding: "5px",
                lineHeight: "1",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#333")}
              onMouseOut={(e) => (e.target.style.color = "#999")}
            >
              &times;
            </button>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                marginBottom: "15px",
                color: "var(--thm-black)",
                lineHeight: "1.2",
              }}
            >
              Fly Anywhere, <br />
              <span style={{ color: "var(--thm-primary)" }}>Anytime!</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--thm-gray)",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              Experience seamless flight bookings with the best deals
              guaranteed. Your next adventure is just a click away.
            </p>
            <a
              href="https://wa.me/919100228152?text=Hi,%20I%20would%20like%20to%20book%20a%20flight!"
              target="_blank"
              rel="noreferrer"
              className="thm-btn"
              onClick={handleClose}
              style={{
                textAlign: "center",
                width: "fit-content",
                padding: "12px 30px",
              }}
            >
              Book My Flight
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WelcomeModal;
