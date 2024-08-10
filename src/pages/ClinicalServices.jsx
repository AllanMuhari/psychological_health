import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaClinicMedical } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceImage1 from "../assets/service1.jpg";
import serviceImage2 from "../assets/service2.jpg";
import serviceImage3 from "../assets/service3.jpg";
import serviceImage4 from "../assets/service4.jpg";

const ClinicalServices = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Clinical Services
        </h1>

        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FaClinicMedical className="text-blue-600 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Clinical Services</h2>
          </div>
          <p className="text-lg mb-6">
            At PHS, we are committed to providing swift, compassionate mental
            health responses to critical incidents, workplace traumas, and
            personal crises. Whether you're seeking individual therapy, support
            for your family, or a collective group session, we’re here to guide
            you through every step of your journey towards healing and
            well-being.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Individual Counseling */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <img
                src={serviceImage1}
                alt="Individual Counseling"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Individual Counseling
              </h3>
              <p className="text-md mb-4">
                Discover a safe space to explore your feelings, navigate through
                challenging memories, and identify areas in your life you wish
                to change. Our individual counseling sessions are tailored to
                help you set and achieve personal goals, empowering you to take
                control of your mental health journey.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>

            {/* Group Counseling */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <img
                src={serviceImage3}
                alt="Group Counseling"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Group Counseling</h3>
              <p className="text-md mb-4">
                You don't have to go through it alone. Our group counseling
                sessions bring people together, fostering a community of support
                and understanding. Whether you’re dealing with feelings of
                isolation, depression, or behavioral issues, these sessions
                offer a unique opportunity to connect and heal collectively.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>

            {/* Teletherapy */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <img
                src={serviceImage2}
                alt="Teletherapy"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Teletherapy</h3>
              <p className="text-md mb-4">
                Get the support you need, wherever you are. With our teletherapy
                services, you can access professional mental health care from
                the comfort of your own space, ensuring that help is always
                within reach.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>

            {/* Family/Couples Counseling */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <img
                src={serviceImage4}
                alt="Family/Couples Counseling"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Family/Couples Counseling
              </h3>
              <p className="text-md mb-4">
                Strengthen your relationships with professional guidance. Our
                family and couples counseling sessions provide a safe
                environment to improve communication, resolve conflicts, and
                build stronger, healthier relationships.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>

            {/* Crisis Intervention */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <img
                src={serviceImage1}
                alt="Crisis Intervention"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Crisis Intervention
              </h3>
              <p className="text-md mb-4">
                When immediate support is needed, our crisis intervention
                services offer critical assistance, helping you navigate through
                the toughest moments with care and expertise.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>
          </div>

          {/* Back to Services Button */}
          <Link to="/services">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md mt-6">
              Back to Services
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClinicalServices;
