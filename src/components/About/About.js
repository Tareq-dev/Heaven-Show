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

const About = () => {
  return (
    <div style={{ height: "700px" }} className="bg-info">
      <NavPage />
      <div className="about bg-white mt-5 px-2 mx-2">
        <div className="px-3 py-3">
          <img
            className="my-img w-100"
            src="https://i.ibb.co/mzHZDNL/trk1.png"
            alt=""
          />
        </div>
        <div className="py-2 mt-5 pt-5">
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
            <a href="/f">
              <FontAwesomeIcon
                className="mx-2 text-primary"
                icon={faFacebook}
              />
            </a>
            <a href="dd">
              <FontAwesomeIcon className="mx-2" icon={faGithub} />
            </a>
            <a href="/ll">
              <FontAwesomeIcon
                className="mx-2 text-danger"
                icon={faStackOverflow}
              />
            </a>
            <a href="/ld">
              <FontAwesomeIcon
                className="mx-2 text-primary"
                icon={faLinkedinIn}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
