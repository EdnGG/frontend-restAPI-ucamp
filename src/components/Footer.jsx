import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="d-flex flex-column bg-black py-5 my-5 justify-content-center align-items-center"
      style={{ height: "40vh", width: "100vh%" }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <a href="#">
          <FontAwesomeIcon
            icon={faFacebook}
            size="4x"
            className="mx-3 text-white"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faTwitter}
            size="4x"
            className="mx-3 text-white"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faInstagram}
            size="4x"
            className="mx-3 text-white"
          />
        </a>
        <a href="#">
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
          <Link to="/" className=" nav-link text-gray-500 hover:text-gray-900">
            Project 05 Ucamp. All rights reserved.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
