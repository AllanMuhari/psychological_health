import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaClinicMedical,
  FaChalkboardTeacher,
  FaSearch,
  FaUserMd,
  FaHandsHelping,
  FaLaptopMedical,
} from "react-icons/fa";

const Services = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Our Services</h1>

        {/* Clinical Services */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <FaClinicMedical className="text-blue-500 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Clinical Services</h2>
          </div>
          <p className="mb-4">
            At PHS, we are committed to providing swift, compassionate mental
            health responses to critical incidents, workplace traumas, and
            personal crises. Whether you're seeking individual therapy, support
            for your family, or a collective group session, we’re here to guide
            you through every step of your journey towards healing and
            well-being.
          </p>

          {/* Individual Service Sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Individual Counseling
              </h3>
              <p className="mb-2">
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
            <div>
              <h3 className="text-xl font-semibold mb-2">Group Counseling</h3>
              <p className="mb-2">
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
            <div>
              <h3 className="text-xl font-semibold mb-2">Teletherapy</h3>
              <p className="mb-2">
                Get the support you need, wherever you are. With our teletherapy
                services, you can access professional mental health care from
                the comfort of your own space, ensuring that help is always
                within reach.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Family/Couples Counseling
              </h3>
              <p className="mb-2">
                Strengthen your relationships with professional guidance. Our
                family and couples counseling sessions provide a safe
                environment to improve communication, resolve conflicts, and
                build stronger, healthier relationships.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Crisis Intervention
              </h3>
              <p className="mb-2">
                When immediate support is needed, our crisis intervention
                services offer critical assistance, helping you navigate through
                the toughest moments with care and expertise.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Book an Appointment
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Pricing Information</h3>
            <ul className="list-disc list-inside">
              <li>Individual Psychotherapy Session: Ksh. 4,000</li>
              <li>Family Therapy Session: Ksh. 5,000</li>
              <li>Tele-therapy Session: Available upon request</li>
              <li>Group Therapy Session: Ksh. 30,000 (up to 15 people)</li>
              <li>Crisis Intervention: Contact us for details</li>
            </ul>
            <p className="mt-2 text-sm">
              * Special rates apply for group therapy sessions outside Nairobi.
              We’re partnered with APA Insurance, Jubilee, BUPA, Minet,
              Heritage, and MUA Insurance for your convenience. Please check
              with your provider or contact us for more information.
            </p>
          </div>
        </section>

        {/* Training Services */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <FaChalkboardTeacher className="text-green-500 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Training Services</h2>
          </div>
          <p className="mb-4">
            Invest in your team’s well-being and productivity with our
            comprehensive training programs. From mental health and wellness to
            alcohol and drug abuse management, our expert-led sessions are
            designed to equip your employees with the tools they need to thrive
            both personally and professionally.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Mental Health and Wellness Program
              </h3>
              <p className="mb-2">
                Promote a healthy workplace culture by raising awareness about
                mental health, reducing stigma, and encouraging positive
                behaviors that enhance emotional well-being.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                Request a Quotation
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Alcohol & Drug Abuse Training
              </h3>
              <p className="mb-2">
                Equip your team with the knowledge and skills to manage
                substance abuse effectively, ensuring a healthier and more
                productive workplace.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                Request a Quotation
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Stress Management and Resilience
              </h3>
              <p className="mb-2">
                Help your employees develop resilience and manage stress
                effectively, leading to improved well-being and sustained
                productivity.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                Request a Quotation
              </button>
            </div>
          </div>
        </section>

        {/* Research Services */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <FaSearch className="text-red-500 text-4xl mr-4" />
            <h2 className="text-2xl font-bold">Research Services</h2>
          </div>
          <p className="mb-4">
            Make informed decisions with our research services. From conducting
            baseline surveys to developing and evaluating workplace policies, we
            provide the insights you need to create strategies that support your
            organization’s growth and success.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Baseline Surveys</h3>
              <p className="mb-2">
                Gather critical data to inform your strategies and ensure that
                your organizational goals are grounded in accurate, up-to-date
                information.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Strategy Planning</h3>
              <p className="mb-2">
                Develop comprehensive strategies that enhance efficiency,
                well-being, and overall organizational health, with expert
                guidance every step of the way.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Workplace Policy Development
              </h3>
              <p className="mb-2">
                Craft and evaluate policies that align with your organizational
                goals and foster a positive, productive workplace culture.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
