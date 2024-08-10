import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResearchServices = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Research Services
        </h1>

        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FaSearch className="text-red-600 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Research Consulting</h2>
          </div>
          <p className="text-lg mb-6">
            We offer comprehensive research services to help organizations make
            informed decisions based on data-driven insights. Our expertise
            spans a wide range of research methodologies, ensuring that your
            specific needs are met with precision.
          </p>

          {/* Service Details */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Data Analysis and Reporting
            </h3>
            <p className="text-md mb-4">
              Our team provides detailed data analysis and reporting services,
              ensuring that you have the information you need to drive strategic
              decisions. We utilize advanced statistical tools and methodologies
              to deliver clear, actionable insights.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">Market Research</h3>
            <p className="text-md mb-4">
              Our market research services help you understand your target
              audience, competitive landscape, and industry trends. We offer
              both qualitative and quantitative research solutions to help you
              make informed business decisions.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Survey Design and Implementation
            </h3>
            <p className="text-md mb-4">
              We design and implement custom surveys to gather valuable data
              from your target audience. Our team ensures that your survey is
              tailored to meet your research objectives and provides meaningful
              insights.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Literature Review and Synthesis
            </h3>
            <p className="text-md mb-4">
              Our literature review and synthesis services provide a thorough
              analysis of existing research and literature on your topic of
              interest. We summarize and synthesize findings to support your
              research or business initiatives.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Academic Research Support
            </h3>
            <p className="text-md mb-4">
              We provide academic research support for students, faculty, and
              institutions. Our services include research design, data
              collection, analysis, and thesis/dissertation consulting.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            Our team of experienced researchers is dedicated to providing
            high-quality, reliable research services. Whether you need support
            for business decisions, academic work, or any other research-related
            project, we're here to help. Contact us to learn more about how we
            can assist you with your research needs.
          </p>

          {/* Back to Services Button */}
          <Link to="/services">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
              Back to Services
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResearchServices;
