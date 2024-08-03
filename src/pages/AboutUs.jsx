import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaHistory,
  FaStar,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        {/* Our Mission and Vision Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p>
                <strong>Vision:</strong> We aspire to be a beacon of hope and
                healing in mental health care, striving to be the leading
                provider of workplace wellness, training, and research
                excellence.
              </p>
              <p className="mt-4">
                <strong>Mission:</strong> Our mission is to make quality
                psychological healthcare accessible and affordable, empowering
                individuals and organizations to thrive through enhanced
                productivity and well-being.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/150?text=About us"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of ethical behavior, ensuring trust and transparency in all we do.",
                icon: <FaStar className="text-yellow-500 text-3xl mr-4" />,
              },
              {
                title: "Quality",
                description:
                  "Our commitment to excellence drives us to provide services and training that exceed expectations.",
                icon: <FaStar className="text-yellow-500 text-3xl mr-4" />,
              },
              {
                title: "Responsibility",
                description:
                  "We are dedicated to addressing the needs of our clients with respect and compassion.",
                icon: <FaStar className="text-yellow-500 text-3xl mr-4" />,
              },
              {
                title: "Commitment",
                description:
                  "Our team consistently delivers on promises, fostering a culture of reliability and dedication.",
                icon: <FaStar className="text-yellow-500 text-3xl mr-4" />,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
                {value.icon}
                <div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Our History</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/150?text=History"
                alt="Our History"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <p>
                Since our inception in 2009, Psychological Health Services (PHS)
                has been on a transformative journey, addressing the crucial
                need for employee health and wellness. What began as a humble
                outpatient counseling service has grown into a multifaceted
                institution, offering comprehensive mental health services,
                training programs, and research initiatives. Over the past 14
                years, our dedication to enhancing lives through mental
                well-being has positioned us as a leader in the field.
              </p>
              <p className="mt-4">
                Today, PHS is structured around three core pillars:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>
                  <strong>Training Department:</strong> We offer dynamic and
                  relevant training programs designed to meet the evolving needs
                  of workplaces, fostering resilience and productivity.
                </li>
                <li>
                  <strong>Research Services:</strong> Our research initiatives
                  support evidence-based strategies, with a focus on baseline
                  surveys, project evaluations, and policy development.
                </li>
                <li>
                  <strong>Clinical Services:</strong> We provide expert
                  outpatient psychotherapy and counseling, as well as Employee
                  Assistance Programs (EAPs) that support individual and
                  organizational well-being.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Competencies Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Qualified Team",
                description:
                  "Our team of clinicians, trainers, and researchers bring unmatched expertise and passion to their work.",
                icon: <FaBriefcase className="text-blue-500 text-3xl mr-4" />,
              },
              {
                title: "Pre-Retirement and Outplacement Training",
                description:
                  "We lead in providing specialized training for a smooth transition into retirement or new career paths.",
                icon: (
                  <FaChalkboardTeacher className="text-green-500 text-3xl mr-4" />
                ),
              },
              {
                title: "Alcohol and Drug Abuse Prevention",
                description:
                  "We educate and empower individuals to combat and prevent substance abuse effectively.",
                icon: <FaUserGraduate className="text-red-500 text-3xl mr-4" />,
              },
              {
                title: "Accredited Mental Health Interventions",
                description:
                  "We offer recognized mental health interventions that enhance both individual and organizational well-being.",
                icon: <FaHistory className="text-purple-500 text-3xl mr-4" />,
              },
              {
                title: "Comprehensive Surveys",
                description:
                  "Our surveys provide critical insights into areas like substance abuse, gender equity, and employee wellness.",
                icon: <FaStar className="text-yellow-500 text-3xl mr-4" />,
              },
              {
                title: "Person-Centered Care",
                description:
                  "Our approach is always centered on the individual, ensuring that care is tailored and effective.",
                icon: <FaStar className="text-yellow-500 text-3xl mr-4" />,
              },
            ].map((competency, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-50 rounded-lg shadow-md">
                {competency.icon}
                <div>
                  <h3 className="text-lg font-semibold">{competency.title}</h3>
                  <p>{competency.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients and Partners Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Our Clients and Partners
          </h2>
          <p className="mb-4">
            Over the years, we have had the privilege of working with a diverse
            range of clients and partners, each contributing to our growth and
            success. We are proud to have collaborated with organizations across
            various sectors, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Retirement Benefits Authority</li>
            <li>Public Service Commission</li>
            <li>KEMSA</li>
            <li>CMA</li>
            <li>IRA</li>
            <li>Anglican Church of Kenya</li>
            <li>National Intelligence Service</li>
            <li>Fairtrade Africa</li>
            <li>KICC</li>
            <li>Kenya Airways</li>
            <li>Jubilee Insurance</li>
            <li>Unilever Tea Kericho</li>
            <li>National Housing Corporation</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
