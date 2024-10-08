import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li>
                <Link to="/" className="flex items-center hover:underline">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="flex items-center hover:underline">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center hover:underline">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="flex items-center hover:underline">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="flex items-center hover:underline">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="flex items-center hover:underline">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="flex items-center hover:underline">
                  <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">
              <a
                href="tel:+0721361616"
                className="flex items-center hover:underline">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                0721 361616
              </a>{" "}
              <a
                href="tel:+0202132450"
                className="flex items-center hover:underline">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                020 2132450
              </a>
            </p>
            <p>
              <a
                href="mailto:training@psychohealth.co.ke"
                className="flex items-center hover:underline">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                training@psychohealth.co.ke
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p>
            &copy; {new Date().getFullYear()} Psychological Health Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
