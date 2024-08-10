// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {
//   FaClinicMedical,
//   FaChalkboardTeacher,
//   FaSearch,
//   FaUserMd,
//   FaHandsHelping,
//   FaLaptopMedical,
// } from "react-icons/fa";
// import serviceImage1 from "../assets/service1.jpg";
// import serviceImage2 from "../assets/service2.jpg";
// import serviceImage3 from "../assets/service3.jpg";
// import serviceImage4 from "../assets/service4.jpg";
// const Services = () => {
//   return (
//     <>
//       <Header />
//       <main className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

//         {/* Clinical Services */}
//         <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
//           <div className="flex items-center mb-6">
//             <FaClinicMedical className="text-blue-600 text-4xl mr-4" />
//             <h2 className="text-2xl font-bold">Clinical Services</h2>
//           </div>
//           <p className="text-lg mb-6">
//             At PHS, we are committed to providing swift, compassionate mental
//             health responses to critical incidents, workplace traumas, and
//             personal crises. Whether you're seeking individual therapy, support
//             for your family, or a collective group session, we’re here to guide
//             you through every step of your journey towards healing and
//             well-being.
//           </p>

//           {/* Individual Service Sections */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Individual Counseling */}
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <img
//                 src={serviceImage1}
//                 alt="Individual Counseling"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-3">
//                 Individual Counseling
//               </h3>
//               <p className="text-md mb-4">
//                 Discover a safe space to explore your feelings, navigate through
//                 challenging memories, and identify areas in your life you wish
//                 to change. Our individual counseling sessions are tailored to
//                 help you set and achieve personal goals, empowering you to take
//                 control of your mental health journey.
//               </p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//                 Book an Appointment
//               </button>
//             </div>

//             {/* Group Counseling */}
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <img
//                 src={serviceImage3}
//                 alt="Group Counseling"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-3">Group Counseling</h3>
//               <p className="text-md mb-4">
//                 You don't have to go through it alone. Our group counseling
//                 sessions bring people together, fostering a community of support
//                 and understanding. Whether you’re dealing with feelings of
//                 isolation, depression, or behavioral issues, these sessions
//                 offer a unique opportunity to connect and heal collectively.
//               </p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//                 Book an Appointment
//               </button>
//             </div>

//             {/* Teletherapy */}
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <img
//                 src={serviceImage2}
//                 alt="Teletherapy"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-3">Teletherapy</h3>
//               <p className="text-md mb-4">
//                 Get the support you need, wherever you are. With our teletherapy
//                 services, you can access professional mental health care from
//                 the comfort of your own space, ensuring that help is always
//                 within reach.
//               </p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//                 Book an Appointment
//               </button>
//             </div>

//             {/* Family/Couples Counseling */}
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <img
//                 src={serviceImage4}
//                 alt="Family/Couples Counseling"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-3">
//                 Family/Couples Counseling
//               </h3>
//               <p className="text-md mb-4">
//                 Strengthen your relationships with professional guidance. Our
//                 family and couples counseling sessions provide a safe
//                 environment to improve communication, resolve conflicts, and
//                 build stronger, healthier relationships.
//               </p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//                 Book an Appointment
//               </button>
//             </div>

//             {/* Crisis Intervention */}
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <img
//                 src={serviceImage1}
//                 alt="Crisis Intervention"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-3">
//                 Crisis Intervention
//               </h3>
//               <p className="text-md mb-4">
//                 When immediate support is needed, our crisis intervention
//                 services offer critical assistance, helping you navigate through
//                 the toughest moments with care and expertise.
//               </p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//                 Book an Appointment
//               </button>
//             </div>
//           </div>
//           <div className="mt-8">
//             <h3 className="text-xl font-bold mb-2">Pricing Information</h3>
//             <ul className="list-disc list-inside text-md mb-4">
//               <li>Individual Psychotherapy Session: Ksh. 4,000</li>
//               <li>Family Therapy Session: Ksh. 5,000</li>
//               <li>Tele-therapy Session: Available upon request</li>
//               <li>Group Therapy Session: Ksh. 30,000 (up to 15 people)</li>
//               <li>Crisis Intervention: Contact us for details</li>
//             </ul>
//             <p className="text-sm">
//               * Special rates apply for group therapy sessions outside Nairobi.
//               We’re partnered with APA Insurance, Jubilee, BUPA, Minet,
//               Heritage, and MUA Insurance for your convenience. Please check
//               with your provider or contact us for more information.
//             </p>
//           </div>
//         </section>

//         {/* Training Services */}
//         <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
//           <div className="flex items-center mb-6">
//             <FaChalkboardTeacher className="text-green-600 text-4xl mr-4" />
//             <h2 className="text-2xl font-bold">Training Services</h2>
//           </div>
//           <p className="text-lg mb-6">
//             Invest in your team’s well-being and productivity with our
//             comprehensive training programs. From mental health and wellness to
//             alcohol and drug abuse management, our expert-led sessions are
//             designed to equip your employees with the tools they need to thrive
//             both personally and professionally.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Mental Health and Wellness Program
//               </h3>
//               <p className="text-md mb-4">
//                 Promote a healthy workplace culture by raising awareness about
//                 mental health, reducing stigma, and encouraging positive
//                 behaviors that enhance emotional well-being.
//               </p>
//               <button className="bg-green-600 text-white px-4 py-2 rounded-md">
//                 Request a Quotation
//               </button>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Alcohol & Drug Abuse Training
//               </h3>
//               <p className="text-md mb-4">
//                 Equip your team with the knowledge and skills to manage
//                 substance abuse effectively, ensuring a healthier and more
//                 productive workplace.
//               </p>
//               <button className="bg-green-600 text-white px-4 py-2 rounded-md">
//                 Request a Quotation
//               </button>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Stress Management and Resilience
//               </h3>
//               <p className="text-md mb-4">
//                 Help your employees develop resilience and manage stress
//                 effectively, leading to improved well-being and sustained
//                 productivity.
//               </p>
//               <button className="bg-green-600 text-white px-4 py-2 rounded-md">
//                 Request a Quotation
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Research Services */}
//         <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
//           <div className="flex items-center mb-6">
//             <FaSearch className="text-red-600 text-4xl mr-4" />
//             <h2 className="text-2xl font-bold">Research Services</h2>
//           </div>
//           <p className="text-lg mb-6">
//             Make informed decisions with our research services. From conducting
//             baseline surveys to developing and evaluating workplace policies, we
//             provide the insights you need to create strategies that support your
//             organization’s growth and success.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">Baseline Surveys</h3>
//               <p className="text-md mb-4">
//                 Understand the current state of mental health in your
//                 organization and identify key areas for improvement with our
//                 comprehensive baseline surveys.
//               </p>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Workplace Policy Development
//               </h3>
//               <p className="text-md mb-4">
//                 Craft and evaluate policies that align with your organizational
//                 goals and foster a positive, productive workplace culture.
//               </p>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Consultancy Services */}
//         <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
//           <div className="flex items-center mb-6">
//             <FaUserMd className="text-indigo-600 text-4xl mr-4" />
//             <h2 className="text-2xl font-bold">Consultancy Services</h2>
//           </div>
//           <p className="text-lg mb-6">
//             Our consultancy services provide professional advice to
//             organizations seeking to improve their mental health and wellness
//             initiatives. We work closely with HR teams to develop customized
//             strategies that align with organizational goals and foster a
//             positive workplace culture.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Workplace Mental Health Consultancy
//               </h3>
//               <p className="text-md mb-4">
//                 Partner with our experts to develop and implement mental health
//                 programs that support employee well-being and enhance overall
//                 productivity.
//               </p>
//               <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Employee Assistance Programs (EAP)
//               </h3>
//               <p className="text-md mb-4">
//                 Provide your employees with access to confidential counseling
//                 services and support for a wide range of personal and
//                 work-related issues, ensuring their mental health and
//                 well-being.
//               </p>
//               <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Support Services */}
//         <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
//           <div className="flex items-center mb-6">
//             <FaHandsHelping className="text-yellow-600 text-4xl mr-4" />
//             <h2 className="text-2xl font-bold">Support Services</h2>
//           </div>
//           <p className="text-lg mb-6">
//             Our support services are designed to assist organizations in
//             implementing effective mental health strategies and policies. We
//             offer ongoing support and advice to ensure your programs are
//             successful and sustainable.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Mental Health Helpline
//               </h3>
//               <p className="text-md mb-4">
//                 Provide immediate support to employees in crisis with our 24/7
//                 mental health helpline, ensuring that help is always available
//                 when needed.
//               </p>
//               <button className="bg-yellow-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Onsite Counseling Services
//               </h3>
//               <p className="text-md mb-4">
//                 Bring mental health support directly to your workplace with our
//                 onsite counseling services, providing employees with easy access
//                 to professional care.
//               </p>
//               <button className="bg-yellow-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Digital Services */}
//         <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
//           <div className="flex items-center mb-6">
//             <FaLaptopMedical className="text-purple-600 text-4xl mr-4" />
//             <h2 className="text-2xl font-bold">Digital Services</h2>
//           </div>
//           <p className="text-lg mb-6">
//             Leverage technology to enhance mental health care with our digital
//             services. We provide online platforms and tools to ensure that
//             mental health support is accessible and effective, no matter where
//             your employees are.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Online Mental Health Platforms
//               </h3>
//               <p className="text-md mb-4">
//                 Provide your employees with access to digital mental health
//                 resources and counseling services, ensuring that support is
//                 always available, no matter where they are.
//               </p>
//               <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-md shadow-md">
//               <h3 className="text-xl font-semibold mb-3">
//                 Virtual Workshops and Webinars
//               </h3>
//               <p className="text-md mb-4">
//                 Offer your employees the flexibility to attend mental health
//                 workshops and training sessions online, making it easy to
//                 integrate learning into their daily schedules.
//               </p>
//               <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Services;
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
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
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
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
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
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
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

