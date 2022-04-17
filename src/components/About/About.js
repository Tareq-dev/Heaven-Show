import React from "react";
import NavPage from "../NavPage/NavPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faStackOverflow,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div style={{ height: "700px" }} className="bg-info">
      <NavPage />
      <Row className="about bg-white mt-5 px-5 mx-5">
        <Col className="p-5">
          <img
            className="my-img w-100"
            src="https://i.ibb.co/mzHZDNL/trk1.png"
            alt=""
          />
        </Col>
        <Col className="py-5 mt-2">
          <h1>ABOUT ME</h1>
          <h6 className="text-danger">Front End Developer</h6>
          <p className="fs-6">
            Working in a competitive environment with high professional
            standards, personal growth opportunities, opportunities for
            continual learning, and high expectations for excellent results. And
            to put my knowledge and abilities to the greatest possible use in
            order to achieve corporate objectives.
          </p>
          <div className="fs-2">
            <FontAwesomeIcon className="mx-2 text-primary" icon={faFacebook} />
            <FontAwesomeIcon className="mx-2" icon={faGithub} />
            <FontAwesomeIcon
              className="mx-2 text-danger"
              icon={faStackOverflow}
            />
            <FontAwesomeIcon
              className="mx-2 text-primary"
              icon={faLinkedinIn}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
