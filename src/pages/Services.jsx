
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaClinicMedical, FaChalkboardTeacher, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

        {/* Clinical Services */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12 hover:bg-blue-50 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center mb-6">
            <FaClinicMedical className="text-blue-600 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Clinical Services</h2>
          </div>
          <p className="text-lg mb-4">
            At PHS, we provide swift, compassionate mental health responses to
            critical incidents, workplace traumas, and personal crises.
          </p>
          <Link to="/services/clinical">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </Link>
        </section>

        {/* Training Services */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12 hover:bg-blue-50 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center mb-6">
            <FaChalkboardTeacher className="text-green-600 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Training Services</h2>
          </div>
          <p className="text-lg mb-4">
            Invest in your team’s well-being and productivity with our
            comprehensive training programs.
          </p>
          <Link to="/services/training">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </Link>
        </section>

        {/* Research Services (replacing Consultancy Services) */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12 hover:bg-blue-50 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center mb-6">
            <FaSearch className="text-red-600 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Research Services</h2>
          </div>
          <p className="text-lg mb-4">
            Our research services help organizations make informed decisions by
            providing insights through baseline surveys, policy development, and
            program evaluation.
          </p>
          <Link to="/services/research">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
