import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl md:text-2xl font-bold">
          Psychological Health Services
        </h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto p-3 w-full bg-blue-600 lg:bg-transparent absolute lg:relative top-16 left-0 lg:top-0 transition-transform duration-300 ease-in-out`}>
          <Link
            to="/"
            className="block lg:inline-block w-full text-center lg:w-auto px-4 py-2 lg:py-0 border-t border-white lg:border-none">
            Home
          </Link>
          <Link
            to="/about-us"
            className="block lg:inline-block w-full text-center lg:w-auto px-4 py-2 lg:py-0 border-t border-white lg:border-none">
            About Us
          </Link>
          <Link
            to="/services"
            className="block lg:inline-block w-full text-center lg:w-auto px-4 py-2 lg:py-0 border-t border-white lg:border-none">
            Our Services
          </Link>
          <Link
            to="/resources"
            className="block lg:inline-block w-full text-center lg:w-auto px-4 py-2 lg:py-0 border-t border-white lg:border-none">
            Resources
          </Link>
          <Link
            to="/contact-us"
            className="block lg:inline-block w-full text-center lg:w-auto px-4 py-2 lg:py-0 border-t border-white lg:border-none">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
