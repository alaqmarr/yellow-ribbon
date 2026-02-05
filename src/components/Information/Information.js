import information from "@/data/information";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const { address, phones, mails } = information;

const Information = () => {
  return (
    <section className="information">
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-place"></span>
              </div>
              <div className="information__text">
                <strong
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    color: "var(--thm-primary)",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Head Office:
                </strong>
                <div
                  style={{
                    backgroundColor: "var(--thm-base)",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
                    marginBottom: "30px",
                    whiteSpace: "pre-line",
                    color: "var(--thm-gray)",
                    fontSize: "16px",
                  }}
                >
                  {address.headOffice}
                </div>
                <strong
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    color: "var(--thm-primary)",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Branches:
                </strong>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: 0,
                    margin: 0,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr", // Strictly 2 columns as requested
                    gap: "20px",
                  }}
                >
                  {address.branches.map((branch, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: 0,
                        fontSize: "15px",
                        lineHeight: "1.6em",
                        backgroundColor: "var(--thm-base)",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
                        color: "var(--thm-gray)",
                        borderLeft: "4px solid var(--thm-primary)",
                        height: "100%",
                      }}
                    >
                      {branch}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-phone-call"></span>
              </div>
              <div className="information__text">
                <h4>
                  {phones.map((phone, index) => (
                    <Fragment key={index}>
                      <a
                        href={`tel:${phone}`}
                        className={`information__number-${index + 1}`}
                      >
                        {phone}
                      </a>
                      <br />
                    </Fragment>
                  ))}
                </h4>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-at"></span>
              </div>
              <div className="information__text">
                <h4>
                  {mails.map((mail, index) => (
                    <Fragment key={index}>
                      <a
                        href={`mailto:${mail}`}
                        className={`information__mail-${index + 1}`}
                      >
                        {mail}
                      </a>
                      <br />
                    </Fragment>
                  ))}
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Information;
