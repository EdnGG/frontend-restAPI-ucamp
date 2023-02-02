import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="d-flex flex-column bg-black py-5 my-5 justify-content-center align-items-center"
      style={{ height: "40vh", width: "100vh%" }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <h4>
          Follow me!!{" "}
          <span role="img" aria-label="emoji">
            📱
          </span>
        </h4>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <a href="https://www.facebook.com/liledn.mexikn/" target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            size="4x"
            className="mx-3 text-white"
          />
        </a>
        <a href="https://twitter.com/?lang=es" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            size="4x"
            className="mx-3 text-white"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eden-gomez-5002a386/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="4x"
            className="mx-3 text-white"
          />
        </a>
        <a href="https://github.com/EdnGG" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="4x"
            className="mx-3 text-white"
          />
        </a>
      </div>
      <div className="mt-8">
        <p className="text-center text-base leading-6 text-gray-400">
          &copy; 2023{" "}
          <Link
            href="/"
            className=" nav-link text-gray-500 hover:text-gray-900"
          >
            Project 05 Ucamp. All rights reserved.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
